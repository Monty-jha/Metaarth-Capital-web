# Vercel Deployment Guide for Metaarth Capital

## 🚀 Quick Deployment Steps

### 1. Environment Variables Setup
In your Vercel dashboard, go to Project Settings > Environment Variables and add:

```
EMAIL_USER = metafitlucknow@gmail.com
EMAIL_PASS = ksmotvwrqlgtflmo
```

### 2. Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Domain Configuration
- **Production Domain**: `metaarth-capital-web.vercel.app`
- **Custom Domain**: (if you have one)

## 🔧 Troubleshooting Contact Form

### If Contact Form Shows 500 Error:

1. **Check Environment Variables**:
   - Go to Vercel Dashboard > Your Project > Settings > Environment Variables
   - Ensure `EMAIL_USER` and `EMAIL_PASS` are set correctly
   - Redeploy after adding environment variables

2. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard > Your Project > Functions tab
   - Look for error logs in the contact API

3. **Alternative Contact Form**:
   - The contact form now uses `/api/contact-simple` as fallback
   - This route logs submissions to Vercel logs instead of sending emails
   - Check Vercel Function logs to see form submissions

## 📧 Email Service Options

### Option 1: Gmail SMTP (Current)
- Uses nodemailer with Gmail SMTP
- Requires App Password from Gmail
- May have rate limits

### Option 2: SendGrid (Recommended)
- More reliable for production
- Better deliverability
- Professional email service

### Option 3: Mailgun
- Alternative email service
- Good for transactional emails

## 🛠️ Manual Email Setup

If you want to receive emails manually:

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard > Functions
   - Look for contact form submissions
   - Copy the form data from logs

2. **Set up Email Forwarding**:
   - Use Gmail filters to forward emails
   - Set up automated responses

## 🚀 Deployment Commands

```bash
# Push to GitHub
git add .
git commit -m "Fix Vercel deployment"
git push origin master

# Vercel will auto-deploy from GitHub
```

## ✅ Success Indicators

- ✅ Build completes without errors
- ✅ All pages load correctly
- ✅ Contact form shows success message
- ✅ No 500 errors in browser console
- ✅ Favicon displays in browser tab

## 🔍 Debugging

### Check Vercel Logs:
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Functions" tab
4. Look for `/api/contact-simple` logs
5. Check for any error messages

### Test Contact Form:
1. Fill out the contact form
2. Submit the form
3. Check Vercel Function logs for the submission
4. Verify success message appears

## 📞 Support

If you need help:
1. Check Vercel Function logs first
2. Verify environment variables are set
3. Test the contact form
4. Check browser console for errors
