# Paul Kings Easy Visa

This is the organised Next.js version of the approved one-page website. The visual design, desktop/mobile CSS, copy, image paths and existing animations are preserved from the working version.

## Main rule

For normal updates, change only the folder for the section you are editing. Do not replace the whole site unless a global change is required.

## Home page sections

- `home-page/hero/` — header, hero, slideshow and hero animation
- `home-page/how-we-help/` — visa destinations/services section
- `home-page/how-it-works/` — four-step scroll process
- `home-page/client-stories/` — customer stories and reveal animation
- `home-page/meet-paul/` — Paul, legal services and passport renewal animation
- `home-page/faq/` — FAQ and mobile accordion
- `home-page/contact/` — contact details, map and final CTA

Each section owns its own component, content and CSS. CSS stays prefixed with a unique `.pk-...-scope` wrapper so one section cannot accidentally restyle another.

## Data files

- `data/business.ts` — business details used by SEO and Contact content
- `data/faq.ts` — FAQ questions/answers used by both the visible FAQ and SEO structured data
- `data/client-stories.ts` — client-story text, images and outcomes

## Images

Existing site images remain in `public/images/home-page/`. Keep the same filenames when replacing an image and no code change is needed.

## GitHub / Vercel

Keep Vercel Root Directory set to `paul-kings-easy-visa` if this folder remains inside the repository root. `main` can remain production. For safer future edits, use a `preview` branch first and merge after checking the Vercel preview.
