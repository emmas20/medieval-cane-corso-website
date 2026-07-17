# Medieval Cane Corso — Website

A static HTML/CSS/JS website for Medieval Cane Corso, a Cane Corso breeder based in Surrey, BC, serving Metro Vancouver and the Lower Mainland. No build step, no framework — open the files directly or host on any static file host.

## Folder structure

```
site/
├── index.html               Homepage
├── about.html                About / breeder story / philosophy / health / breed info
├── our-dogs.html              Full profiles: Sir Shadow, Americana's Countess Elizabeth, Medieval's Luna
├── puppies-litters.html      Available puppies + planned litters + status legend
├── gallery.html               Full filterable photo gallery with lightbox
├── certifications.html        OFA health testing & registration documentation
├── faq.html                    Full FAQ page (with FAQPage structured data)
├── application/index.html      Contact info + full puppy application form (served at /application/)
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css              Full design system (colors, type, components)
├── js/
│   ├── data.js                 ALL editable content lives here (see below)
│   └── main.js                 Nav, slideshow, lightbox, FAQ accordion, form logic, renderers
└── images/
    ├── hero/                   Homepage hero image
    ├── slideshow/               Curated homepage slideshow (10 images)
    ├── dogs/                    Sir Shadow / Elizabeth / Luna profile photos
    ├── puppies/                 Litter, whelping, and "how we raise puppies" photos
    └── gallery/                 Full gallery photo set
```

## How to update content (no code required)

Almost everything on the site — dog profiles, litters, puppy availability, reviews, certifications, FAQs, gallery photos, and business contact info — is controlled from **one file: `js/data.js`**. It's a plain JavaScript object with comments explaining each field. To:

- **Add/remove a dog:** add or remove an entry in the `dogs` array.
- **Add a new litter / change availability status:** edit the `litters` array. Status must be one of: `Available`, `Reserved`, `Placement Pending`, `Planned Litter`, `Applications Open`, `Applications Closed`.
- **List an individually available puppy:** add entries to `availablePuppies` (currently empty — the site shows a "no puppies currently available" message until this is populated).
- **Add a review:** add an entry to `reviews.items`.
- **Add/remove a certification:** edit the `certifications` array.
- **Replace a gallery image:** drop the new image file into the matching `/images/` folder and update the `file` path in the `gallery` array (or the relevant array for slideshow/dogs/puppies).
- **Update contact info:** edit the `business` object (phone, email, Instagram, service area, hours).

Pages read from this file at load time via `<script src="js/data.js">`, so one edit updates every page that uses that data.

## Running locally

Because the pages use `fetch`-free, same-origin JavaScript, you can simply double-click `index.html` to preview it in most browsers. For the most accurate preview (and to avoid any browser file:// quirks), run a simple local server from inside the `site/` folder:

```bash
# Python 3 (built into macOS/Linux)
python3 -m http.server 8000
# then open http://localhost:8000

# or, if you have Node.js:
npx serve .
```

## Deploying

This is a static site — it can be deployed to any static host with no build step:

- **Netlify:** drag-and-drop the `site/` folder onto app.netlify.com, or connect a Git repo and set the publish directory to `site/`.
- **Vercel:** `vercel deploy` from inside `site/`, or import the Git repo with no framework preset ("Other").
- **GitHub Pages:** push `site/` contents to a repo and enable Pages on the `main` branch.
- **Any traditional web host:** upload the contents of `site/` via FTP/SFTP to the public root.

After deploying, update the domain in these places (currently placeholder `https://www.medievalcanecorso.com`):
- Every `<link rel="canonical">` tag
- Every `<meta property="og:url">` and `og:image` tag
- `sitemap.xml`
- `robots.txt`
- The `url` and `image` fields in the LocalBusiness JSON-LD script in each page's `<head>`

## Connecting the inquiry form to a real backend

The form on `application/index.html` is fully validated and functional client-side (required-field checks, email format check, honeypot spam trap, loading state, and a success message) but does not yet send data anywhere. To connect it:

1. Open `js/main.js` and find the line near the top of `initInquiryForm`:
   ```js
   const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
   ```
2. **Easiest option — Formspree (no server needed):**
   - Create a free account at formspree.io, create a new form, and copy the form endpoint URL it gives you (looks like `https://formspree.io/f/abcd1234`).
   - Paste it into `FORM_ENDPOINT`. That's it — submissions will arrive by email.
   - This endpoint URL is safe to leave in the public JavaScript file; Formspree's public form IDs are not secret keys, they only accept POST submissions.
3. **Custom backend (email service, Supabase, Airtable, etc.):**
   - Build a small serverless function (e.g., a Vercel/Netlify function, or a Supabase Edge Function) that accepts a POST request and forwards it to email or a database.
   - Put any real secret keys (API keys, database credentials) as **environment variables on the server/function**, never in this repository or in `main.js`. Client-side JavaScript is publicly visible, so it must only ever call your own endpoint — never contain the secret key itself.
   - Set `FORM_ENDPOINT` to your function's URL.
4. Until `FORM_ENDPOINT` is set, form submissions are only logged to the browser console (`console.info`) so the form can still be demonstrated/tested end-to-end.

## Missing content — needed from the breeder

The site was built strictly from what was provided; nothing below has been invented. These are clearly labeled as placeholders in the code and should be replaced:

1. **Certificate image files.** The three OFA results (hips, elbows, cardiac) for Sir Shadow were shared as images pasted into chat rather than uploaded files, so their data is on the Certifications page but the actual document images could not be retrieved. Please upload the original certificate image files (as attachments, not pasted into chat) so they can be added as cropped/redacted previews with an enlarge/lightbox view.
2. **Breeding licence documents.** No breeding licence has been provided yet; the Certifications page is structured to include one (with a "Breeding Licence" category and enlarge view) as soon as a document is uploaded.
3. **Breeder's full name / personal bio.** Only the first name "Robbie" was confirmed (via a customer review). The About page has a labeled placeholder box for a fuller personal story.
4. **Business hours / typical response time.** Not provided — a placeholder note appears on the Contact page.
5. **Luna's photos.** Sir Shadow's and Elizabeth's photos are now confirmed (uploaded directly). Luna's existing photos on `our-dogs.html` and in the gallery are still unconfirmed placeholders — please upload real photos of Luna as file attachments so they can be swapped in.
6. **Elizabeth and Luna health testing documentation**, if any exists beyond what's already noted (Elizabeth: none on file yet; Luna: testing planned).
8. **Domain name** — confirm final domain to replace the placeholder used in canonical tags, sitemap, and structured data.
9. **Additional written reviews** — only one full review text was available (partially truncated); the aggregate "5.0 stars, 20 reviews" badge is shown, but only one is quoted.
10. **Real street address**, if the breeder wants a full postal address in structured data (currently only city/region are used, deliberately, to avoid publishing a home address).

## Recommended SEO page titles & meta descriptions

| Page | Title | Meta Description |
|---|---|---|
| Home | Medieval Cane Corso \| Cane Corso Breeder in Surrey & Vancouver, BC | Medieval Cane Corso is a small, purpose-driven Cane Corso breeding program based in Surrey, BC, serving Metro Vancouver and the Lower Mainland. Meet our dogs, view planned litters, and learn our health and temperament standards. |
| About | About Us \| Medieval Cane Corso Breeder, Surrey BC | Learn about Medieval Cane Corso's breeding philosophy, health standards, and how our Cane Corso puppies are raised in Surrey, British Columbia. |
| Our Dogs | Our Cane Corso Dogs \| Sir Shadow, Elizabeth & Luna \| Medieval Cane Corso | Meet the foundation Cane Corso dogs behind Medieval Cane Corso in Surrey, BC — including health testing, temperament, and pedigree information. |
| Puppies & Litters | Cane Corso Puppies & Planned Litters \| Medieval Cane Corso, BC | View planned Cane Corso litters and available puppies from Medieval Cane Corso, a responsible breeder serving Vancouver and the Lower Mainland, BC. |
| Gallery | Cane Corso Photo Gallery \| Medieval Cane Corso | Browse photos of our Cane Corso dogs and puppies — from foundation sire Sir Shadow to our latest litters, raised in Surrey, British Columbia. |
| Certifications | Health Testing & Certifications \| Medieval Cane Corso | View OFA health testing results and registration documentation for our Cane Corso breeding dogs at Medieval Cane Corso, Surrey, BC. |
| Reviews | Reviews & Testimonials \| Medieval Cane Corso | Read what Medieval Cane Corso puppy families have to say — real Google reviews from our Cane Corso breeding program in Surrey, BC. |
| FAQ | Cane Corso Puppy FAQ \| Medieval Cane Corso, Surrey BC | Answers to common questions about Cane Corso puppy applications, health testing, pricing, and pickup at Medieval Cane Corso in British Columbia. |
| Contact | Contact Us \| Puppy Inquiry Form \| Medieval Cane Corso | Get in touch with Medieval Cane Corso or submit a puppy inquiry application. Serving Surrey, Metro Vancouver, and the Lower Mainland, BC. |

These are already implemented in each page's `<title>` and `<meta name="description">` tags — this table is here for quick reference/editing.

## SEO & technical notes

- Each page has exactly one `<h1>`, with a logical `<h2>`/`<h3>` structure beneath it.
- `LocalBusiness` structured data (JSON-LD) is included on every page; `BreadcrumbList` on every inner page; `FAQPage` on the FAQ page.
- Canonical URLs, Open Graph tags, and descriptive image alt text are present throughout.
- Images use `loading="lazy"` below the fold; the hero image uses `fetchpriority="high"` since it's the largest above-the-fold element.
- All images were compressed and resized for web (see "Image processing" below).
- `prefers-reduced-motion` is respected: slideshow autoplay, scroll animations, and smooth scrolling are all disabled for users who request reduced motion.

## Image processing already done

All 52 uploaded photos were reviewed, auto-oriented (correcting sideways/upside-down EXIF rotation), resized to web-appropriate dimensions (1400–1600px max edge), and compressed (JPEG quality 78–80) — original filenames were replaced with descriptive, SEO-friendly names (e.g. `sir-shadow-01-autumn-leaves.jpg`). The homepage hero photo had a phone status bar cropped out of frame.

## Final QA checklist

- [x] All internal navigation links point to existing pages
- [x] Inquiry form: required-field validation, email format check, honeypot spam field, loading state, success message matching the requested copy
- [x] Mobile nav collapses to a slide-in menu below ~980px; forms and grids stack to single column on narrow screens
- [x] All `<img>` tags have descriptive alt text; no image is stretched (all use `object-fit: cover` inside fixed-aspect containers)
- [x] Visible focus states on all interactive elements; skip-to-content link on every page
- [x] No fabricated statistics, awards, certifications, or reviews
- [ ] **Recommended before launch:** run the live site through Google's Rich Results Test (structured data), PageSpeed Insights (performance), and a manual click-through on a real phone.
# medieval-cane-corso-website
