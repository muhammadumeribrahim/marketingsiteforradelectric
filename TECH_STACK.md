# Rad Electric Co - Technical Documentation

## Technology Stack

### Frontend Framework
- **React 18.3.1** - Component-based UI library
- **TypeScript** - Type-safe JavaScript superset
- **Vite 6.3.5** - Next-generation build tool and development server

### Routing
- **React Router 7.13.0** - Declarative routing for React applications

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS integration for Vite
- **Custom CSS Variables** - Brand colors and theme tokens

### Animation
- **Motion (Framer Motion) 12.23.24** - Production-ready animation library
- Page transitions, scroll animations, and interactive effects

### Icons & UI Components
- **Lucide React 0.487.0** - Icon library
- **Radix UI** - Accessible component primitives
  - Dialog, Accordion, Dropdown, Popover, Tooltip, and more
- **shadcn/ui patterns** - Pre-built accessible components

### Forms
- **React Hook Form 7.55.0** - Performant form validation
- **Netlify Forms** - Backend form submission handler (no additional backend required)

### Additional Libraries
- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging utility

## Form Backend

### Contact Form Integration
The website uses **Netlify Forms** for form submissions:
- No server-side code required
- Automatic spam filtering
- Email notifications to `jon@radelectricsolutions.com`
- Form submissions accessible via Netlify Dashboard

### Setup Requirements
1. Deploy to Netlify
2. Forms are automatically detected and enabled
3. Configure email notifications in Netlify Dashboard → Forms
4. Add notification recipient: `jon@radelectricsolutions.com`

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Server runs at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output directory: `dist/`

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── app/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Contact.tsx  # Contact form with Netlify integration
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Footer with social links
│   │   └── ...
│   ├── pages/           # Route pages
│   │   ├── HomePage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── ServiceDetailPage.tsx
│   ├── data/            # Static data
│   │   ├── servicesData.ts
│   │   └── galleryData.ts
│   └── routes.tsx       # Route configuration
├── assets/
│   └── images/          # Static image assets
└── styles/              # Global styles
    ├── index.css        # Main styles
    ├── theme.css        # Theme variables
    └── fonts.css        # Custom font imports
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-optimized interactions

## Performance Optimizations

- Code splitting via React Router
- Lazy loading for images
- Optimized Vite build output
- Minimal bundle size with tree-shaking

## Deployment

### Recommended: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment: Node 18+

### Alternative: Vercel, Cloudflare Pages, AWS Amplify
Compatible with any static hosting platform supporting Vite builds.

---

**Built for Rad Electric Co** | © 2025
