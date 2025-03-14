# Portfolio v2

![Portfolio Preview](/public/preview.jpg)

> **Note:** This is an old portfolio. Check out my newest portfolio at [github.com/tyloo/tyloo.fr](https://github.com/tyloo/tyloo.fr)

## Overview

This is a personal portfolio website built with Next.js, showcasing my projects, skills, and blog posts. The site features a clean, modern design with a dark theme and responsive layout.

## Technologies Used

- **Next.js 15** - React framework with server-side rendering and static site generation
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript for better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **MDX** - Markdown with JSX support for blog posts
- **Resend** - Email delivery service for contact form
- **React Hook Form** - Form validation library
- **Zod** - TypeScript-first schema validation
- **Framer Motion** - Animation library
- **Typed.js** - Library for typing animations
- **reCAPTCHA** - Protection against spam submissions

## Features

- **Responsive Design** - Optimized for all device sizes
- **Blog with MDX Support** - Write blog posts using Markdown with JSX components
- **Contact Form** - Send emails directly from the website with reCAPTCHA protection
- **Resume Section** - Showcase professional experience and skills
- **Projects Showcase** - Display portfolio projects with details
- **Dark Theme** - Modern dark theme design
- **Animations** - Smooth animations and transitions
- **SEO Optimized** - Meta tags and structured data for better search engine visibility

## Installation

1. Clone the repository

```bash
git clone https://github.com/tyloo/portfolio-v2.git
cd portfolio-v2
```

2. Install dependencies

```bash
pnpm install
```

3. Create a `.env` file based on `.env.example`

```bash
cp .env.example .env
```

4. Fill in the environment variables in the `.env` file:

```
RESEND_API_KEY=your_resend_api_key
RECAPTCHA_SECRET=your_recaptcha_secret_key
CONTACT_SENDER_NAME=Your Name
CONTACT_SENDER_EMAIL=your-email@example.com
CONTACT_RECIPIENT_NAME=Your Name
CONTACT_RECIPIENT_EMAIL=your-email@example.com
RECAPTCHA_SECRET=
RECAPTCHA_SECRET=your_recaptcha_secret_key

NEXT_PUBLIC_RECAPTCHA=your_recaptcha_site_key
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the
result.

### Build

Build the application for production:

```bash
pnpm build
```

### Start

Start the production server:

```bash
pnpm start
```

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components
- `content/posts/` - MDX blog posts
- `emails/` - Email templates for the contact form
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and API handlers
- `public/` - Static assets

## Blog Posts

Blog posts are written in MDX format and stored in the `content/posts` directory. Each post has frontmatter with metadata like title, summary, image, author, and publication date.

## Contact Form

The contact form uses React Hook Form with Zod validation, reCAPTCHA for spam protection, and Resend for email delivery. Emails are sent using server actions.

## License

MIT