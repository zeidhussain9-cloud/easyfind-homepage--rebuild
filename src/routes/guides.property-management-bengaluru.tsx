import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, CircleHelp } from "lucide-react";
import type { ReactNode } from "react";
import {
  CheckList,
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";

export const Route = createFileRoute("/guides/property-management-bengaluru")({
  component: PropertyManagementGuide,
});

function PropertyManagementGuide() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>Property Management in Bengaluru: A Practical Owner's Guide | EasyFind</title>
        <meta
          name="description"
          content="A practical Bengaluru guide for property owners: local coordination, inspections, repairs, handover, owner updates, and questions to ask before appointing support."
        />
        <link
          rel="canonical"
          href="https://easyfindprops.com/guides/property-management-bengaluru"
        />
      </Helmet>
      <InformationHeader />
      <section className="bg-[#1b354b] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
              Bengaluru property guide · 8 min read
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] md:text-6xl">
              Property management in Bengaluru, without the fog.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#e2eaee] md:text-lg">
              A practical owner’s guide to the local work, decisions, and records that should be
              clear before you appoint support.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
              The short answer
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug text-white">
              Good property management is not “everything handled.”
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#d4e0e5]">
              It is a clear scope, a reliable local process, and an owner who knows what changed,
              what needs a decision, and what happens next.
            </p>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <article className="space-y-14">
            <div className="grid gap-3 border-y border-[#e4e8ed] py-5 text-sm sm:grid-cols-3">
              {[
                ["For", "Bengaluru, India-based, and NRI owners"],
                ["Focus", "Scope, access, repairs, updates, handover"],
                ["Next step", "Discuss property management"],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b89445]">
                    {label}
                  </p>
                  <p className="mt-1 leading-relaxed text-[#446274]">{text}</p>
                </div>
              ))}
            </div>
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Who this is for
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#23435f] md:text-4xl">
                The owner should not have to guess what is happening.
              </h2>
              <p className="mt-5 leading-relaxed text-[#667384]">
                This guide is for Bengaluru owners, people living elsewhere in India, and NRI owners
                who want practical coordination without handing over more responsibility than they
                intended.
              </p>
            </section>

            <GuideSection number="01" title="What local property management can include">
              <p>
                The scope should be agreed property by property. It may include the practical
                coordination around:
              </p>
              <CheckList
                items={[
                  "Tenant or occupant communication and agreed follow-ups.",
                  "Property visits, inspection notes, access coordination, and photo records.",
                  "Repair enquiries, vendor follow-up, quotations, approvals, and completion checks.",
                  "Vacancy, handover, key and utility coordination, and readiness for the next step.",
                  "Clear updates for an owner who is away, with decisions recorded rather than assumed.",
                ]}
              />
            </GuideSection>

            <GuideSection number="02" title="The operating questions to settle first">
              <p>
                Before paying or appointing anyone, ask for answers you can refer back to. A short
                written scope is more useful than a broad promise to “take care of everything.”
              </p>
              <div className="mt-7 space-y-7">
                <GuideQuestion number="A" title="How will tenant or occupant coordination work?">
                  Confirm who communicates, what counts as urgent, how requests are logged, and when
                  an issue comes back to the owner for a decision.
                </GuideQuestion>
                <GuideQuestion number="B" title="How are inspections and access handled?">
                  Agree who can access the property, how visits are arranged, what gets recorded,
                  and when photos or an inspection note are shared.
                </GuideQuestion>
                <GuideQuestion number="C" title="What happens when a repair is needed?">
                  Ask whether the provider sources a vendor, obtains a quote, seeks approval,
                  coordinates the visit, and checks completion—or only passes on a contact.
                </GuideQuestion>
                <GuideQuestion
                  number="D"
                  title="How will vacancy, handover, and readiness be closed?"
                >
                  Clarify the condition note, keys, utilities, pending repairs, access, and the
                  exact handover message you will receive.
                </GuideQuestion>
              </div>
            </GuideSection>

            <GuideSection number="03" title="If you live elsewhere in India or abroad">
              <p>
                Distance makes small assumptions expensive. Agree the update rhythm, preferred
                channel, approval threshold, emergency contact, inspection cadence, and the records
                you will receive. Decide in advance what can be coordinated and what still needs
                your approval.
              </p>
              <div className="mt-6 rounded-xl border border-[#e4e8ed] bg-[#f7f5ef] p-5">
                <p className="font-semibold text-[#23435f]">A useful owner update answers:</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#667384]">
                  {[
                    "What changed?",
                    "What was checked or completed?",
                    "What decision is needed, and by when?",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#b89445]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GuideSection>

            <GuideSection number="04" title="Where EasyFind currently works">
              <p>
                EasyFind’s current Bengaluru working coverage includes the areas below. Coverage,
                access, and the exact work remain subject to the property, brief, and agreed scope;
                ask us before relying on support for a particular address.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Bellandur",
                  "Kadubeesanahalli",
                  "Marathahalli",
                  "Yemalur",
                  "Whitefield",
                  "Hoodi",
                  "ITPL",
                  "HSR Layout",
                  "Kudlu Gate",
                  "Sarjapur Road",
                  "Kasavanahalli",
                  "Harlur",
                  "Varthur",
                  "Mahadevapura",
                  "Panathur",
                  "Koramangala",
                ].map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#e9eff1] px-3 py-1.5 text-sm font-medium text-[#446274]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </GuideSection>

            <GuideSection number="05" title="What EasyFind does—and does not—promise">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-[#dce8df] bg-[#f5faf6] p-5">
                  <p className="font-semibold text-[#23435f]">We can discuss</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#667384]">
                    A practical property brief, local coordination, agreed updates, access,
                    inspections, repair follow-up, and handover or readiness steps.
                  </p>
                </div>
                <div className="rounded-xl border border-[#eadfd3] bg-[#fffaf4] p-5">
                  <p className="font-semibold text-[#23435f]">We do not promise</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#667384]">
                    Unlimited responsibility, guaranteed rent, guaranteed tenant quality, a fixed
                    time-to-let, or work outside the scope and approvals we agree.
                  </p>
                </div>
              </div>
            </GuideSection>

            <ContactStrip label="Discuss property management" />
          </article>
          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-[#e4e8ed] bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Before you appoint anyone
              </p>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-[#23435f]">
                Keep these questions in writing.
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  "What exactly is included and excluded?",
                  "Who approves spending and vendor work?",
                  "What records, photos, or receipts will I receive?",
                  "How are urgent issues escalated?",
                  "How can the scope be changed or ended?",
                ].map((question) => (
                  <div key={question} className="flex gap-3 text-sm leading-relaxed text-[#667384]">
                    <CircleHelp size={17} className="mt-0.5 shrink-0 text-[#b89445]" />
                    <span>{question}</span>
                  </div>
                ))}
              </div>
              <a
                href="/customer-protection"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#23435f] underline underline-offset-4"
              >
                Read Customer Protection <ArrowRight size={16} />
              </a>
            </div>
            <div className="rounded-2xl bg-[#e9eff1] p-6 md:p-8">
              <p className="text-sm font-semibold text-[#23435f]">Last updated: October 2026</p>
              <p className="mt-2 text-sm leading-relaxed text-[#667384]">
                General guidance, not legal advice. Confirm the scope and documents for your own
                property before proceeding.
              </p>
            </div>
          </aside>
        </div>
        <ContactLinks />
      </main>
      <InformationFooter />
    </div>
  );
}

function GuideSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-[#b89445]">
          {number}
        </span>
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#23435f] md:text-4xl">
            {title}
          </h2>
          <div className="mt-4 max-w-2xl leading-relaxed text-[#667384]">{children}</div>
        </div>
      </div>
    </section>
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
