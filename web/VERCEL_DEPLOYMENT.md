# Vercel Deployment Guide for Metaarth Capital

## 🚀 Deployment Steps

### 1. Environment Variables
Set these in Vercel Dashboard → Settings → Environment Variables:

```
EMAIL_USER=metafitlucknow@gmail.com
EMAIL_PASS=ksmotvwrqlgtflmo
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### 2. Build Settings
- **Framework Preset**: Next.js
- **Root Directory**: `web`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 3. Domain Configuration
- Add your custom domain in Vercel Dashboard
- Configure DNS settings as instructed

## 🔧 Fixed Issues

✅ **FUNCTION_INVOCATION_FAILED** - Fixed with proper API routes
✅ **FUNCTION_INVOCATION_TIMEOUT** - Set maxDuration to 30s
✅ **FUNCTION_PAYLOAD_TOO_LARGE** - Optimized images and assets
✅ **DEPLOYMENT_NOT_FOUND** - Fixed build configuration
✅ **ROUTER_CANNOT_MATCH** - Fixed routing configuration
✅ **MALFORMED_REQUEST_HEADER** - Added security headers
✅ **OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED** - Configured image domains

## 📁 File Structure
```
web/
├── src/app/api/contact/route.ts  # API endpoint
├── vercel.json                   # Vercel configuration
├── next.config.mjs              # Next.js configuration
├── .env.example                  # Environment variables template
└── .gitignore                   # Git ignore rules
```

## 🎯 Performance Optimizations
- Image optimization enabled
- CSS optimization enabled
- Security headers added
- Compression enabled
- SWC minification enabled
