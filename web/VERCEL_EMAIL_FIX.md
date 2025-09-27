# Fix Vercel Email Deployment Issue

## Problem
The contact form is showing "Failed to send message" error on Vercel deployment due to email configuration issues.

## Solution Steps

### 1. Set Environment Variables in Vercel

Go to your Vercel dashboard:
1. Navigate to your project
2. Go to **Settings** → **Environment Variables**
3. Add these variables:

```
EMAIL_USER = metafitlucknow@gmail.com
EMAIL_PASS = ksmotvwrqlgtflmo
```

### 2. Redeploy Your Project

After adding environment variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger redeployment

### 3. Alternative: Use SendGrid (Recommended)

If Gmail continues to have issues, switch to SendGrid:

#### Install SendGrid:
```bash
npm install @sendgrid/mail
```

#### Update API route:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'jhamonty302@gmail.com',
  from: 'metafitlucknow@gmail.com',
  subject: `New Contact Form Submission from ${name}`,
  html: `<!-- Your HTML template -->`
};

await sgMail.send(msg);
```

### 4. Check Vercel Function Logs

1. Go to **Functions** tab in Vercel dashboard
2. Click on your contact API function
3. Check the **Logs** section for detailed error messages

### 5. Test Email Configuration

The updated code now includes:
- ✅ Environment variable validation
- ✅ Email transporter verification
- ✅ Better error handling
- ✅ Detailed logging

### 6. Common Issues & Solutions

#### Issue: "Email service not configured"
**Solution:** Make sure environment variables are set in Vercel

#### Issue: "Email service authentication failed"
**Solution:** Check if Gmail App Password is correct

#### Issue: "Failed to send email"
**Solution:** Try using SendGrid instead of Gmail

### 7. Quick Fix Commands

```bash
# Check if environment variables are set
vercel env ls

# Add environment variable
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# Redeploy
vercel --prod
```

## Testing

After fixing:
1. Submit the contact form
2. Check Vercel function logs
3. Verify email is received
4. Check browser console for any errors

## Support

If issues persist:
1. Check Vercel function logs
2. Verify Gmail App Password is working
3. Consider switching to SendGrid
4. Contact Vercel support if needed
