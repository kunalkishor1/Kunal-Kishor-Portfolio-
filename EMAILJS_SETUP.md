# EmailJS Setup Guide

This portfolio uses EmailJS to send contact form messages directly to your email without requiring a backend email server.

## Quick Setup Steps

### 1. Sign Up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

### 2. Create an Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

### 3. Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Set **To Email** to your email: `kunalkishor93344@gmail.com`
5. **Copy the Template ID** (you'll need this)

### 4. Get Your Public Key
1. Go to **Account** > **General** > **API Keys**
2. Copy your **Public Key**

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env` in the root directory
2. Fill in your values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```

### 6. Restart Your Development Server
After adding the `.env` file, restart your dev server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message

## Fallback Behavior
If EmailJS is not configured or fails, the form will automatically:
- Show a helpful error message
- Open your default email client with the message pre-filled
- This ensures users can always contact you even if EmailJS fails

## Troubleshooting
- **"Email service is not configured"**: Make sure your `.env` file exists and has all three variables set
- **"Failed to send message"**: Check that your EmailJS service is active and your template is correct
- **No emails received**: Check your spam folder and verify the "To Email" in your template

## Alternative: Direct Email Links
If you prefer not to use EmailJS, the contact form will automatically fall back to opening the user's email client with the message pre-filled.

