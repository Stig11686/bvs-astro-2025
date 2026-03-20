---
enable: true
title: "Have A Project on Your Mind?"
description: "Great! We're excited to hear from you and let's start something"

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
      placeholder: "Phone Number"
      name: "phone"
      required: false
      type: "tel"
      halfWidth: true
      defaultValue: ""

    - label: ""
      placeholder: "Company Name"
      name: "company"
      required: false
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
      placeholder: "Budget *"
      name: "budget_range"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "£1,000 - £2,500"
            value: "1000_to_2500"
            selected: false
          - label: "£2,500 - £5,000"
            value: "2500_to_5000"
            selected: false
          - label: "£5,000+"
            value: "5000_plus"
            selected: false
          - label: "Not sure yet"
            value: "unknown"
            selected: true

    - label: ""
      placeholder: "Timeline"
      name: "timeline"
      required: false
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "ASAP"
            value: "ASAP"
            selected: false
          - label: "1-3 months"
            value: "1-3 months"
            selected: false
          - label: "3-6 months"
            value: "3-6 months"
            selected: false
          - label: "6+ months"
            value: "6+ months"
            selected: false
          - label: "Just exploring"
            value: "Just exploring"
            selected: true

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
