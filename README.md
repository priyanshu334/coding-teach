# Coaching Landing Page

A modern, interactive landing page for a coaching program built with Next.js 16, featuring stunning 3D graphics and a comprehensive enrollment system.

## Features

- 🎨 **Modern UI/UX** - Built with Tailwind CSS v4 and shadcn/ui components
- 🌓 **Dark Mode** - Full dark mode support with next-themes
- 🎭 **3D Graphics** - Interactive 3D elements powered by Three.js and React Three Fiber
- 🔐 **Authentication** - Integrated with Supabase for user management
- 📱 **Responsive Design** - Mobile-first approach for all devices
- ⚡ **Fast Performance** - Optimized with Next.js 16 App Router
- 📝 **Enrollment Form** - Built-in application/enrollment system
- 📊 **Dashboard** - User dashboard for enrolled students

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Backend:** [Supabase](https://supabase.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Custom animations with tw-animate-css

## Project Structure

```
coaching_landing/
├── app/
│   ├── dashboard/      # Student dashboard
│   ├── form/          # Enrollment form
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Landing page
│   └── globals.css    # Global styles
├── components/
│   ├── 3d/            # Three.js 3D components
│   ├── ui/            # shadcn/ui components
│   ├── HeroSection.tsx
│   ├── Philosophy.tsx
│   ├── ProgramStructure.tsx
│   ├── cirriculam.tsx
│   ├── cohort-design.tsx
│   ├── Pricing.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/               # Utility functions
└── public/            # Static assets
```

## Getting Started

### Prerequisites

- Node.js 20+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd coaching_landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Landing Page Sections

The landing page consists of the following sections:

1. **Hero Section** - Eye-catching introduction with 3D elements
2. **Philosophy** - Core values and teaching approach
3. **Program Structure** - Overview of the coaching program
4. **Curriculum** - Detailed course content
5. **Cohort Design** - Information about batch structure
6. **Pricing** - Pricing plans and packages
7. **Footer** - Contact information and links

## Customization

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `postcss.config.mjs`
- Theme customization: `components/theme-provider.tsx`

### Components

- Modify existing components in the `components/` directory
- Add new shadcn/ui components using the CLI:

```bash
npx shadcn@latest add <component-name>
```

### 3D Elements

Customize 3D graphics in `components/3d/`. Uses React Three Fiber and drei helpers.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Docker

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For questions or support, please contact the development team.
