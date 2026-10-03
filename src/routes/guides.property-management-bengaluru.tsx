import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
  PageIntro,
} from "../components/InformationPage";

export const Route = createFileRoute("/guides/property-management-bengaluru")({
  component: PropertyManagementGuide,
});

function PropertyManagementGuide() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>Property Management in Bengaluru | EasyFind Property Solutions</title>
        <meta
          name="description"
          content="A practical guide for owners choosing local property management support across confirmed Bengaluru areas."
        />
        <link
          rel="canonical"
          href="https://easyfindprops.com/guides/property-management-bengaluru"
        />
      </Helmet>
      <InformationHeader />
      <PageIntro
        eyebrow="Bengaluru property guide"
        title="What good property management should look like."
      >
        <p>
          A practical starting point for owners who need local support across Bengaluru—without
          unclear scope or hidden steps.
        </p>
      </PageIntro>
      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <article>
            <div className="flex flex-wrap gap-2">
              {["Bengaluru", "NRI owners", "Owner checklist"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#e9eff1] px-3 py-1.5 text-xs font-semibold text-[#446274]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#23435f] md:text-4xl">
              Five questions to ask before appointing a local property partner.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#667384]">
              Property management is not only about finding a tenant. The real test is what happens
              after the agreement: inspections, repairs, access, updates, approvals, and closure.
            </p>
            <div className="mt-10 space-y-8">
              <GuideQuestion number="01" title="Who is responsible for what?">
                Ask for the exact scope, response expectations, approval limits, and escalation
                route.
              </GuideQuestion>
              <GuideQuestion number="02" title="How will I see progress from a distance?">
                Agree the update rhythm, photos, records, and a clear close-out note after work.
              </GuideQuestion>
              <GuideQuestion number="03" title="What happens when a vendor is needed?">
                Confirm quotations, approval thresholds, quality checks, and who confirms
                completion.
              </GuideQuestion>
              <GuideQuestion number="04" title="What documents and access are needed?">
                Clarify the owner information, property records, keys, permissions, and emergency
                contact.
              </GuideQuestion>
              <GuideQuestion number="05" title="How are fees and changes handled?">
                Get the fee, payment timing, exclusions, and process for changing or ending the
                scope in writing.
              </GuideQuestion>
            </div>
            <ContactStrip label="Need a Bengaluru property plan?" />
          </article>
          <aside className="rounded-2xl border border-[#e4e8ed] bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
              More practical guides
            </p>
            <div className="mt-5 divide-y divide-[#e4e8ed]">
              <GuideLink
                title="Renting out in Bengaluru"
                text="What to clarify before enquiries, visits, and tenant selection."
              />
              <GuideLink
                title="NRI property care"
                text="A simple inspection and maintenance rhythm for owners abroad."
              />
              <GuideLink
                title="Handover checklist"
                text="Documents, condition notes, access, utilities, and next actions."
              />
              <GuideLink
                title="Choosing a rental consultant"
                text="Questions about fees, receipts, communication, and scope."
              />
            </div>
            <p className="mt-6 text-xs leading-relaxed text-[#667384]">
              Written for Bengaluru owners and property seekers. This is practical guidance, not
              legal advice.
            </p>
          </aside>
        </div>
        <ContactLinks />
      </main>
      <InformationFooter />
    </div>
  );
}

function GuideQuestion({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex gap-4 border-b border-[#e4e8ed] pb-7">
      <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-[#b89445]">{number}</span>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-[#23435f]">{title}</h3>
        <p className="mt-2 leading-relaxed text-[#667384]">{children}</p>
      </div>
    </section>
  );
}

function GuideLink({ title, text }: { title: string; text: string }) {
  return (
    <a href="/#contact" className="group block py-4 first:pt-0 last:pb-0">
      <span className="flex items-center justify-between gap-4 font-serif text-lg font-semibold text-[#23435f]">
        {title}
        <ArrowRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="mt-1 block text-sm leading-relaxed text-[#667384]">{text}</span>
    </a>
  );
}
