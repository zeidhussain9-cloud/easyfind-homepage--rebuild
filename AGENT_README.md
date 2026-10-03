# EasyFind Property Solutions — Repository Notes

## Current verified state

- Repository: `zeidhussain9-cloud/efps-live-website`
- Production branch: `main`
- Render service: `srv-d98o56btqb8s739ek100` (`Easyfindprops`)
- Public domain: `https://easyfindprops.com`
- Render alias: `https://easyfindprops.onrender.com`
- Render deploys `main` automatically after a successful commit.

The Render alias and custom domain resolve to the same service. Use the custom
domain in customer-facing content and the service ID when discussing deployment.

## Product and page guardrails

The homepage is an enquiry-led property-services site, not a property listing
portal. Keep the approved navy, cream, and gold visual language; use practical,
specific wording; and avoid unsupported claims, invented statistics, or vague
vendor promises.

The four service routes are:

1. Find a property — rent or purchase.
2. Rent out or sell my property.
3. Manage my property — local owners, owners elsewhere in India, and NRI
   owners, with agreed local coordination and updates.
4. Prepare and care for my property — the full readiness, repair, refresh,
   inspection, documentation, and handover-support route.

After those routes, the page continues to **Local where it matters**, then
proof, how it works, FAQs, and contact.

## Engineering notes

- Frontend: React, TanStack Router, Vite, TypeScript, and Tailwind.
- Production build: `npm run build`.
- Development: `npm run dev` on port 5000.
- Production server: `npm run start` serves the built SPA with Express.
- Lead delivery must remain inside the existing verified form pipeline.
- Do not commit secrets or modify deployment credentials.

## Maintenance checklist

Before publishing homepage changes:

1. Build the site and inspect the diff.
2. Check mobile and desktop navigation, anchor links, enquiry CTAs, forms,
   legal links, and the map/contact area.
3. Search for stale repository, Render, or domain references.
4. Verify the Render service ID and live deployment status.
5. Keep `main` clean after the change; remove merged feature branches and
   worktrees.
