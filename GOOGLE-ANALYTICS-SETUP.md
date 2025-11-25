# 📊 Google Analytics Setup Guide

## ✅ What's Already Done

Google Analytics has been integrated into your portfolio! Here's what was added:

1. ✅ **Package installed**: `@next/third-parties`
2. ✅ **Component added**: `<GoogleAnalytics />` in `app/layout.tsx`
3. ✅ **Environment variable**: `NEXT_PUBLIC_GA_ID` configured

---

## 🚀 How to Enable Analytics

### Step 1: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Admin"** (gear icon in bottom left)
4. Under **"Property"**, click **"Create Property"**
5. Fill in your website details:
   - Property name: "Portfolio" or your site name
   - Reporting time zone: Your timezone
   - Currency: Your currency
6. Click **"Next"** → Choose business size → Click **"Create"**
7. Accept the Terms of Service
8. Choose **"Web"** platform
9. Set up data stream:
   - Website URL: `https://krdevanshu06.vercel.app`
   - Stream name: "Portfolio Website"
10. Click **"Create stream"**
11. **Copy your Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add to Your Site

Update your `.env.local` file:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Replace with your actual ID
```

### Step 3: Deploy

**For Vercel:**

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Your Google Analytics ID (e.g., `G-ABC123DEF4`)
   - **Environment**: Production, Preview, Development (check all)
4. Click **"Save"**
5. **Redeploy** your site

**For other platforms:**

Add the environment variable in your deployment settings and redeploy.

---

## 🧪 Testing Analytics

### Verify It's Working:

1. **Deploy your site** with the GA ID configured
2. **Visit your site** in a browser
3. Open **Chrome DevTools** (`F12`)
4. Go to **Network** tab
5. Filter by **"google-analytics"** or **"gtag"**
6. You should see requests being sent to Google Analytics

### Check Google Analytics Dashboard:

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. Go to **Reports** → **Realtime**
4. Open your site in another tab
5. You should see yourself as an active user within 30 seconds

---

## 📈 What Analytics Tracks

Your portfolio will automatically track:

- ✅ **Page views** - Which pages visitors view
- ✅ **User sessions** - How long people stay on your site
- ✅ **Traffic sources** - Where visitors come from (Google, LinkedIn, etc.)
- ✅ **Geographic data** - Where your visitors are located
- ✅ **Device types** - Mobile vs Desktop usage
- ✅ **User engagement** - Bounce rate, time on page, etc.

---

## 🔒 Privacy & GDPR Compliance

The `@next/third-parties/google` package automatically:

- ✅ Loads Analytics scripts optimally (no blocking)
- ✅ Uses modern gtag.js implementation
- ✅ Respects user privacy settings

### Optional: Add Cookie Consent Banner

If you want to be extra compliant with GDPR/CCPA:

```bash
npm install react-cookie-consent
```

Then add to your layout:

```tsx
import CookieConsent from "react-cookie-consent";

// In your body:
<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  enableDeclineButton
>
  This site uses cookies to enhance the user experience.
</CookieConsent>
```

---

## 🎯 Custom Events (Optional)

Want to track specific actions? Add custom events:

```tsx
// Example: Track when someone clicks "View Project"
import { sendGAEvent } from '@next/third-parties/google'

function ProjectCard() {
  const handleClick = () => {
    sendGAEvent('event', 'view_project', {
      project_name: 'DailyDiff'
    })
  }
  
  return <button onClick={handleClick}>View Project</button>
}
```

---

## 📊 Useful Reports to Check

After a week of traffic, check these reports in Google Analytics:

1. **Acquisition** → **Traffic acquisition**
   - See where your visitors come from
   
2. **Engagement** → **Pages and screens**
   - Which projects get the most views
   
3. **User** → **Demographics**
   - Age, gender, location of your audience
   
4. **Tech** → **Tech details**
   - Browser, OS, screen resolution usage

---

## 🔧 Configuration Files

**Modified files:**

| File | Change |
|------|--------|
| `app/layout.tsx` | Added `GoogleAnalytics` component |
| `.env.local` | Added `NEXT_PUBLIC_GA_ID` variable |
| `.env.example` | Added example for `NEXT_PUBLIC_GA_ID` |
| `package.json` | Added `@next/third-parties` dependency |

---

## ❓ Troubleshooting

### Analytics not showing data?

1. **Wait 24-48 hours** - Google Analytics can take time to process initial data
2. **Check environment variable** - Make sure `NEXT_PUBLIC_GA_ID` is set in Vercel
3. **Verify ID format** - Should be `G-XXXXXXXXXX` (not UA-XXXXXXX-X)
4. **Check browser extensions** - Ad blockers may block Analytics
5. **View in Realtime** - Use Realtime reports to see immediate data

### Still not working?

- Check browser console for errors
- Verify the GA script loads (Network tab in DevTools)
- Make sure you redeployed after adding the env variable
- Try in incognito mode (extensions might block it)

---

## 🎉 You're All Set!

Once you add your Google Analytics ID and redeploy:

- ✅ Traffic tracking will start automatically
- ✅ No code changes needed for basic analytics
- ✅ All pages are tracked (homepage, projects, experience, archive)
- ✅ Performance optimized with Next.js third-parties package

**Next Steps:**

1. Get your GA ID from analytics.google.com
2. Add to `.env.local` and Vercel environment variables
3. Redeploy and start tracking! 📈

---

**Status:** ✅ Configured & Ready  
**Last Updated:** November 25, 2025
