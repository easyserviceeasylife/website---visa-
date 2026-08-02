# Paul Kings Easy Visa

One-page Next.js website prepared for GitHub and Vercel from the seven approved standalone HTML sections.

## 1. Add your seven image files

Open:

```text
public/images/home-page/
```

Add these exact filenames:

```text
paul-kings-logo.png
paul-king-portrait.png
british-passport.png
pattaya-office-map.webp
client-uk-couple.webp
client-australia-couple.webp
client-italy-couple.webp
```

You do not need to add the nine hero slideshow images. The code keeps the exact Unsplash sources already used in the approved hero.

## 2. Run locally

Node.js 20.9 or newer is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 3. Set the live domain

The default SEO domain is:

```text
https://paulkingeasyvisa.info
```

If your final domain is different, copy `.env.example` to `.env.local` and update:

```text
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

In Vercel, add the same value under **Project Settings → Environment Variables**.

## 4. Upload to GitHub

Create one empty repository, then run:

```bash
git init
git add .
git commit -m "Launch Paul Kings Easy Visa website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 5. Deploy with Vercel

1. In Vercel choose **Add New → Project**.
2. Import the GitHub repository.
3. Vercel detects Next.js automatically.
4. Add `NEXT_PUBLIC_SITE_URL` if the live domain differs from the default.
5. Deploy, then add the custom domain in Vercel.

## 6. SEO included

The project includes:

- SEO title and meta description
- canonical URL
- Open Graph and Twitter metadata
- generated social-sharing image
- `robots.txt`
- `sitemap.xml`
- Local Business structured data
- FAQ structured data using the exact FAQ content
- descriptive image alternative text from the approved sections
- optional Google Search Console verification environment variable

After deployment, add the domain in Google Search Console and submit:

```text
https://YOUR-DOMAIN/sitemap.xml
```

When Google supplies the HTML verification value, add it in Vercel as:

```text
GOOGLE_SITE_VERIFICATION=your-verification-value
```

## Important

The seven section designs, responsive layouts, animation timing, slideshow controls, scroll reveals, process progress animation and mobile FAQ accordion were preserved. CSS was scoped only to stop one standalone section from overriding another after they were joined onto one page.
