/**
 * Netlify Function: Subscribe to MailerLite
 *
 * Handles email signups from the "From Pretty to Profitable" landing page.
 * Posts subscriber data to MailerLite API with the configured group ID.
 */

/**
 * Cloudflare Turnstile check. Off until TURNSTILE_SECRET_KEY is set. Only a
 * missing or rejected token fails; if Cloudflare is down or the secret is
 * wrong the sign-up goes through, as the CRM does for enquiries.
 */
async function passesTurnstile(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return true;
    const data = await res.json();
    if (data.success) return true;
    const codes = data['error-codes'] || [];
    if (codes.some((c) => ['missing-input-secret', 'invalid-input-secret', 'internal-error'].includes(c))) {
      console.error('Turnstile is misconfigured; sign-up let through:', codes);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Turnstile unreachable; sign-up let through:', error);
    return true;
  }
}

export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const { email, firstName, 'cf-turnstile-response': token } = JSON.parse(event.body);

    if (!(await passesTurnstile(token))) {
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ error: 'Spam check failed. Please refresh the page and try again.' }),
      };
    }

    // Validate required fields
    if (!email || !firstName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email and first name are required' }),
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Please enter a valid email address' }),
      };
    }

    // Get environment variables
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error('Missing MailerLite configuration');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Subscribe to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName,
        },
        groups: [groupId],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle MailerLite-specific errors
      if (response.status === 422 && data.message?.includes('already')) {
        // Subscriber already exists - treat as success
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: 'Already subscribed' }),
        };
      }

      console.error('MailerLite API error:', data);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to subscribe. Please try again.' }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };

  } catch (error) {
    console.error('Subscribe function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'An unexpected error occurred' }),
    };
  }
}
