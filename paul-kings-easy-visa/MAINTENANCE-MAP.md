# Maintenance Map

| Change needed | File/folder to edit |
|---|---|
| Hero wording/layout/slideshow | `home-page/hero/` |
| Visa support cards | `home-page/how-we-help/` |
| Four-step process | `home-page/how-it-works/` |
| Client text/images/outcomes | `data/client-stories.ts` (content) or `home-page/client-stories/ClientStoriesSection.css` (design) |
| Paul/legal/passport section | `home-page/meet-paul/` |
| FAQ wording | `data/faq.ts` |
| FAQ design/accordion | `home-page/faq/` |
| Phone/email/address/WhatsApp/Google | `data/business.ts` |
| Contact design/map layout | `home-page/contact/` |
| SEO metadata/schema | `app/layout.tsx`, `app/page.tsx`, `data/business.ts`, `data/faq.ts` |
| Replace an image only | `public/images/home-page/` using the same filename |

The seven section CSS files are imported in `app/layout.tsx` in the same order as the old combined CSS. This preserves the existing cascade and responsive PC/mobile behavior.
