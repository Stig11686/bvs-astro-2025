---
enable: true
title: "Have A Project on Your Mind?"
description: "Ready to turn your website into your best salesperson? Tell me a bit about your project and I’ll get back to you within one working day."

image: "/images/computer-website.jpg"

map:
  enable: false
  position: "right"
  title: "Map of New Work City"
  url: https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed

form:
  emailSubject: "New enquiry from BVS website"
  submitButton:
    enable: true
    label: "SEND MESSAGE"

  inputs:
    - label: ""
      placeholder: "Name *"
      name: "name"
      required: true
      halfWidth: true
      defaultValue: ""

    - label: ""
      placeholder: "Email Address *"
      name: "email"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""

    - label: ""
      placeholder: "Company Website"
      name: "website"
      required: false
      type: "url"
      halfWidth: true
      defaultValue: ""

    - label: ""
      placeholder: "How can I help? *"
      name: "service_type"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "New website"
            value: "new_website"
            selected: false
          - label: "Help with my current site"
            value: "support_care"
            selected: false
          - label: "Site audit"
            value: "site_audit"
            selected: false
          - label: "Not sure yet"
            value: "not_sure"
            selected: false

    - label: ""
      tag: "textarea"
      defaultValue: ""
      rows: "3"
      placeholder: "How can I help? *"
      name: "message"
      required: true
      halfWidth: false

    - label: "I agree to the terms and conditions and [privacy policy](/contact/)."
      id: "privacy-policy"
      name: "privacy_agreed"
      value: "Agreed"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""

    - note: success
      parentClass: "hidden text-sm message success"
      content: Thank you for your enquiry! We'll get back to you within 24 hours.

    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: Something went wrong! Please email us directly at [info@bvswebdesign.co.uk](mailto:info@bvswebdesign.co.uk)
---
