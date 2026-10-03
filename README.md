# EasyFind Property Solutions

The EasyFind Property Solutions website is the public, enquiry-led site for
finding a property and getting practical local support for property owners in
Bengaluru. It does not publish live property listings.

## Verified production setup

- **Repository:** `zeidhussain9-cloud/efps-live-website`
- **Default branch:** `main`
- **Render service:** `srv-d98o56btqb8s739ek100` (`Easyfindprops`)
- **Render dashboard:** <https://dashboard.render.com/static/srv-d98o56btqb8s739ek100>
- **Primary public domain:** <https://easyfindprops.com>
- **Render service URL:** <https://easyfindprops.onrender.com>
- **Deployment:** Render auto-deploys the `main` branch on commit.

The Render URL is the platform-generated alias for the same service; it is not
a separate deployment. The custom domain is the customer-facing URL.

## Local development

Install Node.js and npm, then run:

```sh
npm install
npm run dev
```

The development server listens on port 5000.

## Routes

- `/` — EasyFind landing page and enquiry form
- `/formatter` — internal property formatter
- `/api/formatter/health` — formatter API health check
- `/legal/privacy`, `/legal/terms`, `/legal/cookies` — legal pages

## Production

```sh
npm run build
npm run start
```

The production server serves the built site and formatter API together.

## Configuration

The main site uses the verified enquiry submission pipeline. Optional
environment variables used by the formatter and deployment are documented in
`.env.example` and `AGENTS.md`. Never commit secrets.

## Website direction

EasyFind is positioned as an on-ground property partner: practical, local,
clear, and trustworthy. The four service routes are:

1. Find a property — for people looking to rent or purchase.
2. Rent out or sell my property — for owners preparing either route.
3. Manage my property — for owners in Bengaluru, elsewhere in India, and
   abroad, including NRI owners.
4. Prepare and care for my property — coordinated property readiness and care.

The homepage should remain enquiry-led and should not become a listing portal.
