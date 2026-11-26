# Pandora Home's — Bachelor's Dream Stay

Website for Pandora Home's, a men's residence at 11/8-C Free School Street, Panthapath, Dhaka.
Built with Next.js 15, React 18, TypeScript and Tailwind CSS, in English and Bangla.

The site is a **static export**: `next build` writes plain HTML, CSS, JS and images to `out/`.
There is no server or database, which is why it can be hosted free on Cloudflare Pages.

## Pages

| Route | What it shows |
|-------|---------------|
| `/` | Home: hero, date search, featured rooms, amenities, gallery, flyer |
| `/rooms` | All rooms |
| `/rooms/[id]` | One room's details (pre-rendered for each room in `lib/rooms.ts`) |
| `/booking/[id]` | Booking request form with dates and price estimate |
| `/about` | About the residence |
| `/contact` | Phone numbers, address, map link and an enquiry form |

## How bookings and enquiries reach the hostel

With no server, the forms cannot store or email anything. When a visitor submits the
booking or contact form, the site shows a summary of their request and lets them:

- **Send by SMS** — opens their messaging app with the summary already filled in, addressed to the first number in `lib/contact.ts`
- **Call** — dials the hostel
- **Copy details** — to paste into any other app

No payment is taken online. The hostel confirms the room and payment by phone.
If you later want requests delivered automatically (email, a database, online payment),
that needs a backend, for example a Cloudflare Pages Function.

## Where to edit things

| To change | Edit |
|-----------|------|
| Rooms, prices, amenities, house rules | `lib/rooms.ts` |
| Room photos | `public/images/rooms/` and `lib/room-images.ts` |
| Phone numbers, address, map link | `lib/contact.ts` |
| English / Bangla text | the `<T en="..." bn="..." />` next to each piece of text |
| Colours | `app/globals.css`, `tailwind.config.js` |

To add a room, add it to `ROOMS` in `lib/rooms.ts`. Its `/rooms/<id>` and `/booking/<id>`
pages are generated automatically on the next build.

## Run locally

Requires Node.js 18.18 or newer (the repo pins 22 in `.node-version`).

```bash
npm ci          # install the exact versions in package-lock.json
npm run dev     # http://localhost:3000
npm run build   # writes the static site to out/
npx serve out   # optional: preview the built site
```

## Deploy on Cloudflare Pages

Once the repository is connected to Cloudflare Pages through GitHub, every push to the
production branch (normally `main`) builds and deploys automatically. To set it up:

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, pick this repository.
2. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
3. Save and deploy. No environment variables are needed.

Cloudflare picks up the Node version from `.node-version`.

## Project structure

```
app/          pages (App Router)
components/   header, footer, page sections, room card, date picker, enquiry hand-off
lib/          room data, contact details, i18n, date helpers
public/       logo, favicon, flyer and room photos
```
