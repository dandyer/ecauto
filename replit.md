# EC Mobile Auto Services

## Project Overview
A Next.js website for EC Mobile Auto Services, migrated from Vercel to Replit.

## Project Structure
```
website/          # Next.js app (main site)
  src/
    app/          # App Router pages (about, blog, contact, faq, pricing, services, service-areas)
    components/   # Shared React components
  next.config.mjs
  tailwind.config.js
  package.json
```

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Runtime**: Node.js 20

## Running the App
The app runs via the "Start application" workflow:
```
cd website && npm run dev
```
Accessible on port 5000.

## Replit Migration Notes
- Next.js upgraded from 14.2.3 → 16 to fix a critical security vulnerability
- Dev and start scripts updated to bind to `0.0.0.0:5000` for Replit compatibility
- No environment variables or API keys required
