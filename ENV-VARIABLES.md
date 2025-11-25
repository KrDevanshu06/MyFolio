# Environment Variables Configuration

## Quick Start

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your actual values

## Variables

### Required

#### `NEXT_PUBLIC_SITE_URL`
- **Purpose:** Base URL for your site (used for SEO, sitemaps, canonical URLs)
- **Production:** `https://krdevanshu06.vercel.app` or your custom domain
- **Local:** `http://localhost:3000`
- **Example:** 
  ```bash
  NEXT_PUBLIC_SITE_URL=https://your-domain.com
  ```

#### `RESEND_API_KEY`
- **Purpose:** API key for Resend email service (contact form)
- **Get it:** https://resend.com/api-keys
- **Example:**
  ```bash
  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
  ```

#### `MY_EMAIL`
- **Purpose:** Your email address to receive contact form submissions
- **Example:**
  ```bash
  MY_EMAIL=your.email@gmail.com
  ```

#### `NEXT_PUBLIC_APP_URL`
- **Purpose:** Application URL (used in contact form responses)
- **Should match:** Same as `NEXT_PUBLIC_SITE_URL`
- **Example:**
  ```bash
  NEXT_PUBLIC_APP_URL=https://your-domain.com
  ```

## Deployment

### Vercel

Add these environment variables in your Vercel project settings:

1. Go to your project → Settings → Environment Variables
2. Add each variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://krdevanshu06.vercel.app`
   - `RESEND_API_KEY` = `your_api_key`
   - `MY_EMAIL` = `your_email@gmail.com`
   - `NEXT_PUBLIC_APP_URL` = `https://krdevanshu06.vercel.app`

### Custom Domain

When you add a custom domain:

1. Update in Vercel:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
   NEXT_PUBLIC_APP_URL=https://your-custom-domain.com
   ```

2. Redeploy - that's it! ✨

## Local Development

For local testing:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
RESEND_API_KEY=your_api_key
MY_EMAIL=your_email@gmail.com
```

## Security Notes

- ✅ `.env.local` is in `.gitignore` - never commit it!
- ✅ Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- ✅ `RESEND_API_KEY` and `MY_EMAIL` are server-side only
- ✅ Always use environment variables for sensitive data

## Troubleshooting

### Variables not updating?

1. Restart your dev server: `npm run dev`
2. Clear Next.js cache: `rm -rf .next`
3. Rebuild: `npm run build`

### SEO metadata showing wrong URL?

1. Check `NEXT_PUBLIC_SITE_URL` is set correctly
2. Verify it doesn't have trailing slash
3. Restart dev server

### Contact form not working?

1. Check `RESEND_API_KEY` is valid
2. Verify `MY_EMAIL` is correct
3. Check Resend dashboard for errors

## Example Files

### Production (.env.local)
```bash
RESEND_API_KEY=re_abc123xyz
MY_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Development (.env.local)
```bash
RESEND_API_KEY=re_abc123xyz
MY_EMAIL=dev@yourdomain.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
