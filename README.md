# The Monger Method - React App

A modern, mobile-responsive React application for The Monger Method fitness coaching business. Built with Vite, Tailwind CSS, Stripe payments, and React Calendar for booking management.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Single Page Application**: Smooth scrolling between sections
- **Stripe Integration**: Accept payments for workout programs
- **Calendar Booking**: Interactive calendar for scheduling coaching calls
- **Component-Based**: Modular React components for easy maintenance
- **Fast Development**: Vite for instant hot module replacement
- **Production Ready**: Optimized for Vercel deployment

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Philosophy.jsx
│   ├── Method.jsx
│   ├── Story.jsx
│   ├── Programs.jsx (with Stripe integration)
│   ├── Coaching.jsx (with Calendar)
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Stripe

1. Get your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com)
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Add your Stripe public key:
   ```
   VITE_STRIPE_PUBLIC_KEY=pk_test_your_key_here
   ```

### 3. Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Features Explained

### Stripe Payment Integration

The Programs section includes three product tiers:
- **The Foundation** - $199
- **Build to Strength** - $399 (Featured)
- **Elite Performance** - $699

Click "Enroll Now" to initiate a Stripe checkout. To make this work in production, you'll need to set up a backend API endpoint at `/api/create-checkout-session`.

### Calendar Booking System

The Coaching section includes:
- Interactive calendar to select available dates
- Time slot selection
- Contact form for client details
- Form submission that stores booking requests

Currently logs to console; integrate with your backend calendar system (Google Calendar, Calendly, etc.)

### Responsive Design

- Desktop: Full navigation with all features visible
- Tablet: Optimized grid layouts
- Mobile: Hamburger menu, single-column layouts

## Deployment to Vercel

### 1. Prepare for Deployment

```bash
npm run build
```

This creates an optimized `dist` folder.

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Set environment variables:
   - `VITE_STRIPE_PUBLIC_KEY` = your public Stripe key
6. Deploy

### 3. Environment Variables

In Vercel Dashboard:
- Settings → Environment Variables
- Add `VITE_STRIPE_PUBLIC_KEY` with your Stripe public key

## Backend Integration Points

The app is designed to work with a backend service for:

1. **Stripe Checkout Session** (`/api/create-checkout-session`)
   - Receives: `{ priceId, productName, amount }`
   - Returns: `{ id }` (session ID)

2. **Booking Management** (in Coaching component)
   - Currently logs to console
   - Integrate with calendar API or email service

3. **Email Notifications**
   - Send confirmation emails after payments
   - Send booking confirmations

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Stripe** - Payment processing
- **React Calendar** - Date selection
- **date-fns** - Date utilities

## Customization

### Color Theme

Edit `tailwind.config.js` to customize colors:
```js
colors: {
  'monger-orange': '#C8722A',
  'monger-cream': '#E8E4DC',
  // ... etc
}
```

### Font Family

Change fonts in `tailwind.config.js` or import different Google Fonts in `index.html`

### Content

All text content is hardcoded in components. For a CMS approach, move content to a separate config file or database.

## Performance Tips

- Images are optimized with modern formats
- Code splitting is handled by Vite automatically
- CSS is purged in production (unused styles removed)
- Minification and compression handled by Vercel

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For issues or questions:
1. Check existing issues on GitHub
2. Review component documentation
3. Test in development environment first

## License

Built for The Monger Method. All rights reserved.\n\n<!-- Deployment trigger -->
# Monger-method
