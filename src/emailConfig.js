// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAIL_CONFIG = {
   SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
   APPLICATION_TEMPLATE_ID: 'YOUR_APPLICATION_TEMPLATE_ID', // Replace with your Application Form Template ID
   DOWNLOAD_TEMPLATE_ID: 'YOUR_DOWNLOAD_TEMPLATE_ID', // Replace with your Download Form Template ID
   PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS Public Key
   GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzZwdUwhb8-kgjiVcYZjAEk971mSH0PWXZ6p2GSK9Pg4fUjSovuSIwugd2CDo9wnCYv/exec'
};

/*
SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account

2. Add an Email Service:
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions
   - Copy the Service ID

3. Create Email Templates:
   
   For Application Form Template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template Name: "Application Form Submission"
   - Use these template variables:
     {{from_name}} - Applicant's name
     {{from_email}} - Applicant's email
     {{phone}} - Phone number
     {{education}} - Educational qualification
     {{current_profile}} - Current profile
   
   Example template:
   Subject: New Application from {{from_name}}
   
   Body:
   New application received:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Education: {{education}}
   Current Profile: {{current_profile}}
   
   For Download Form Template:
   - Create another template
   - Template Name: "Syllabus Download Request"
   - Use these template variables:
     {{from_name}} - User's name
     {{from_email}} - User's email
     {{phone}} - Phone number
     {{current_profile}} - Current profile
   
   Example template:
   Subject: Syllabus Download Request from {{from_name}}
   
   Body:
   New syllabus download request:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Current Profile: {{current_profile}}

4. Get your Public Key:
   - Go to "Account" in the dashboard
   - Copy your Public Key

5. Update this file with your credentials:
   - Replace YOUR_SERVICE_ID with your Service ID
   - Replace YOUR_APPLICATION_TEMPLATE_ID with your Application template ID
   - Replace YOUR_DOWNLOAD_TEMPLATE_ID with your Download template ID
   - Replace YOUR_PUBLIC_KEY with your Public Key

6. IMPORTANT: Add this file to .gitignore to keep your credentials secure
*/
