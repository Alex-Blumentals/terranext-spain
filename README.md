# TerraNext Spain Presentation

Professional web presentation for TerraNext's Zelestra Pizarroso-I proposal.

## Features

- 17 interactive slides
- Keyboard navigation (← →  Space)
- Touch/swipe gestures
- Progress indicator
- Responsive design
- TerraNext brand colors
- Static export (no server required)

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
```

Static files will be generated in the `out/` directory.

## Deployment

This project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## Navigation

- **Arrow Keys**: ← Previous slide, → Next slide
- **Spacebar**: Next slide
- **Touch/Swipe**: Swipe left/right on mobile
- **Buttons**: Click navigation buttons at bottom

## Project Structure

```
terranext-spain/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main presentation component
│   └── globals.css      # Global styles
├── components/
│   └── slides/          # Individual slide components
│       ├── Slide1Cover.tsx
│       ├── Slide2Journey.tsx
│       └── ... (17 slides total)
├── public/
│   └── logos/           # TerraNext & Zelestra logos
└── package.json
```

## Customization

To update content:
1. Edit individual slide files in `components/slides/`
2. Rebuild with `npm run build`

To update styling:
1. Edit `tailwind.config.ts` for colors
2. Edit `app/globals.css` for global styles

## License

© 2025 TerraNext. All rights reserved.
