# Portfolio Setup Guide

This guide will help you configure your portfolio with your personal information and set up the contact form.

## 📋 Step 1: Update Personal Information

Open `src/config/personalInfo.ts` and update it with your details from your CV:

```typescript
export const personalInfo = {
  name: "Your Full Name",           // From your CV
  fullName: "Your Full Name",
  title: "Your Job Title",          // e.g., "Full-Stack Developer"
  tagline: "Your Tagline",          // e.g., "MERN & Next.js Expert"
  
  email: "your-email@example.com",  // Your email from CV
  phone: "+1234567890",             // Optional
  location: "Your City, Country",    // Your location from CV
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername", // Optional
  },
  
  bio: "Your bio from CV...",
  
  // EmailJS config (see Step 2)
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};
```

## 📧 Step 2: Set Up EmailJS (Contact Form)

The contact form uses EmailJS to send emails directly from your website. Here's how to set it up:

### 2.1 Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### 2.2 Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

### 2.3 Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy the Template ID**

### 2.4 Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

### 2.5 Update Config File

Update `src/config/personalInfo.ts` with your EmailJS credentials:

```typescript
emailjs: {
  serviceId: "service_xxxxxxxxx",    // From Step 2.2
  templateId: "template_xxxxxxxxx", // From Step 2.3
  publicKey: "your-public-key",     // From Step 2.4
},
```

### 2.6 Test the Contact Form

1. Start your dev server: `npm run dev`
2. Fill out the contact form on your site
3. Check your email inbox for the test message

## 🔄 Alternative: Use Mailto (No Setup Required)

If you don't want to set up EmailJS, the contact form will automatically fall back to opening your email client. Just make sure your `email` in `personalInfo.ts` is correct.

## 📝 Step 3: Update SEO Meta Tags

After updating `personalInfo.ts`, also update `index.html`:

1. Open `index.html`
2. Update the meta tags with your information:
   - Title
   - Description
   - Open Graph tags
   - Twitter Card tags
   - Structured data (JSON-LD)

The SEO component (`src/components/SEO.tsx`) will automatically use your `personalInfo` config, but `index.html` needs manual updates for initial page load.

## 🎨 Step 4: Update Social Media Links in index.html

In `index.html`, update the structured data section with your actual social media URLs:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ],
  ...
}
</script>
```

## ✅ Step 5: Verify Everything Works

1. **Contact Form**: Test sending a message
2. **Social Links**: Click all social media icons to verify they work
3. **Email Links**: Click email links to verify they open correctly
4. **SEO**: Check that your name appears correctly throughout the site

## 🚀 Step 6: Deploy to Vercel

1. Push your changes to GitHub
2. Connect your repo to Vercel
3. Deploy!

## 📞 Need Help?

If you encounter any issues:
- Check the browser console for errors
- Verify all EmailJS credentials are correct
- Make sure your email service is properly connected in EmailJS
- Test the contact form in incognito mode to avoid cache issues

## 📋 Quick Checklist

- [ ] Updated `src/config/personalInfo.ts` with your details
- [ ] Set up EmailJS account
- [ ] Added EmailJS credentials to config
- [ ] Tested contact form
- [ ] Updated `index.html` meta tags
- [ ] Verified all social links work
- [ ] Tested email links
- [ ] Ready to deploy!

---

**Note**: The contact form will work even without EmailJS setup - it will fall back to opening your email client. But EmailJS provides a better user experience.
