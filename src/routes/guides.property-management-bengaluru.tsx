import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, CircleHelp, MapPin, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import {
  ContactLinks,
  ContactStrip,
  InformationFooter,
  InformationHeader,
} from "../components/InformationPage";

export const Route = createFileRoute("/guides/property-management-bengaluru")({
  component: PropertyManagementGuide,
});

const areas = [
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
];

function PropertyManagementGuide() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#223044]">
      <Helmet>
        <title>Property Management in Bengaluru: A Practical Owner&apos;s Guide | EasyFind</title>
        <meta
          name="description"
          content="What property owners actually need from local support in Bengaluru: agreed work, access, repairs, handover, proof, and clear updates when you are away."
        />
        <link
          rel="canonical"
          href="https://easyfindprops.com/guides/property-management-bengaluru"
        />
      </Helmet>
      <InformationHeader />

      <section className="overflow-hidden bg-[#1b354b] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
              Bengaluru property guide · 8 min read
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] md:text-6xl">
              Your Bengaluru property should not go quiet when you leave.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#e2eaee] md:text-lg">
              A plain-English guide to the local work that keeps an owner informed: people, access,
              repairs, handover, and the small decisions that otherwise become big surprises.
            </p>
            <a
              href="#the-easyfind-way"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-[#e3c976] decoration-2 underline-offset-8"
            >
              See the EasyFind way <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative rounded-2xl border border-white/15 bg-white/[0.08] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
              The honest answer
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug text-white md:text-3xl">
              “Don&apos;t worry, we&apos;ll handle it” is not a process.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#d4e0e5]">
              Before anyone starts, you should know what they will do, what they need you to
              approve, what they will record, and when you will hear back.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/15 pt-5 text-center text-xs text-[#d4e0e5]">
              <div>
                <p className="font-serif text-2xl text-[#e3c976]">01</p>
                <p className="mt-1">See what changed</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#e3c976]">02</p>
                <p className="mt-1">Decide clearly</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#e3c976]">03</p>
                <p className="mt-1">Close the loop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <article className="space-y-16">
            <section className="grid gap-4 border-y border-[#dfe4e7] py-5 text-sm sm:grid-cols-3">
              <QuickFact label="For" text="Bengaluru, India-based, and NRI owners" />
              <QuickFact label="The problem" text="A property is local. Your life may not be." />
              <QuickFact label="Next step" text="Discuss property management" />
            </section>

            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                Start here
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#23435f] md:text-4xl">
                Property management is not one big task. It is a chain of small local moments.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#667384]">
                A message from a tenant. A key that needs collecting. A repair that needs a quote. A
                visit that needs arranging. A vacant home that needs checking before the next person
                walks in. If nobody owns the chain, the owner ends up chasing every link.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-[#667384]">
                The right support gives those moments a home: an agreed scope, a named next step,
                and an update you can understand without being in Bengaluru.
              </p>
            </section>

            <section id="the-easyfind-way" className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 shrink-0 text-[#b89445]" size={23} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89445]">
                    The EasyFind way
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#23435f]">
                    Local eyes. Agreed action. Clear proof.
                  </h2>
                  <p className="mt-4 leading-relaxed text-[#667384]">
                    EasyFind Property Solutions is built around a simple owner promise: your
                    Bengaluru property looked after locally, with clear updates while you are away.
                    We first understand the property and the job. Then we coordinate only the work
                    that is agreed, keep decisions visible, and close with what was checked or
                    completed.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 border-t border-[#e4e8ed] pt-7 sm:grid-cols-3">
                <ProcessStep
                  number="01"
                  title="Understand"
                  text="Property, people, access, and what you need watched."
                />
                <ProcessStep
                  number="02"
                  title="Coordinate"
                  text="Visits, vendors, repairs, and handover steps within scope."
                />
                <ProcessStep
                  number="03"
                  title="Update"
                  text="What happened, what is pending, and what needs your call."
                />
              </div>
            </section>

            <GuideSection number="01" title="What can local support actually look after?">
              <p>
                Start with the work that is real and repeatable. The list below is not an unlimited
                promise; it is a useful way to write the brief for one property.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <WorkCard
                  title="People and messages"
                  text="Agreed tenant or occupant communication, follow-ups, and a clear route for urgent issues."
                />
                <WorkCard
                  title="Visits and access"
                  text="Arranging access, visiting when included, and sharing an inspection note or photo record."
                />
                <WorkCard
                  title="Repairs and vendors"
                  text="Finding the next step, requesting a quote, seeking approval, coordinating the visit, and checking completion."
                />
                <WorkCard
                  title="Vacancy and handover"
                  text="Condition notes, keys, utilities, pending work, and readiness for the next agreed step."
                />
              </div>
            </GuideSection>

            <GuideSection number="02" title="Four conversations to have before you appoint anyone">
              <p>
                Good support becomes easier to trust when the awkward questions are answered early.
                Ask for plain answers, not a wider promise.
              </p>
              <div className="mt-7 space-y-7">
                <GuideQuestion number="A" title="Who speaks to the tenant or occupant?">
                  Agree who responds, where requests are recorded, what is urgent, and when the
                  owner must decide. “We will keep an eye on it” is not enough.
                </GuideQuestion>
                <GuideQuestion number="B" title="How does someone get into the property?">
                  Confirm keys, access permissions, visit notice, who attends, and what comes back
                  after the visit. Access should never be an assumption.
                </GuideQuestion>
                <GuideQuestion number="C" title="What happens before a repair is approved?">
                  Ask who finds the vendor, how the quote reaches you, what happens if the scope
                  changes, and who checks the work when it is finished.
                </GuideQuestion>
                <GuideQuestion number="D" title="When is a handover actually finished?">
                  Define the condition note, keys, utility status, open repairs, photos, and the
                  final message. A key exchange alone is not a handover record.
                </GuideQuestion>
              </div>
            </GuideSection>

            <GuideSection number="03" title="If your home is in Bengaluru but you are not">
              <p>
                Distance is not the only problem. Unclear authority is. Before work starts, decide
                what can move without asking you, what needs approval, and how quickly you need to
                hear about a problem.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <ChecklistCard
                  title="Set the rules"
                  items={[
                    "Preferred update channel",
                    "Approval limit or approval route",
                    "Emergency contact",
                    "Who may provide property access",
                  ]}
                />
                <ChecklistCard
                  title="Expect the record"
                  items={[
                    "What changed",
                    "What was checked or completed",
                    "What is still pending",
                    "What decision is needed, and by when",
                  ]}
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#667384]">
                For owners elsewhere in India or abroad, the exact scope, response rhythm, and
                records should be agreed for the property—not assumed from a package name.
              </p>
            </GuideSection>

            <GuideSection number="04" title="Where we currently work in Bengaluru">
              <p>
                EasyFind currently works across the areas below. Address-level coverage, access,
                timing, and the exact work still need to be confirmed before you rely on support.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#e9eff1] px-3 py-1.5 text-sm font-medium text-[#446274]"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3 rounded-xl border border-[#e4e8ed] bg-[#fbfaf6] p-4 text-sm leading-relaxed text-[#667384]">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#b89445]" />
                <span>
                  Tell us the address and the situation first. We will confirm whether it fits the
                  current working scope.
                </span>
              </div>
            </GuideSection>

            <GuideSection number="05" title="What EasyFind will—and will not—promise">
              <p>
                Trust is easier to build when the boundary is visible. EasyFind can discuss a
                practical brief and agreed local coordination. That does not mean taking ownership
                of every decision or guaranteeing an outcome outside our control.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <BoundaryCard
                  title="Within an agreed brief"
                  good
                  items={[
                    "Local coordination and owner updates",
                    "Access, inspection, repair follow-up, and handover steps",
                    "Working with external vendors and sharing the next decision",
                  ]}
                />
                <BoundaryCard
                  title="Not a blanket promise"
                  items={[
                    "Guaranteed rent, tenant quality, or time-to-let",
                    "Unlimited responsibility for every property issue",
                    "Work outside the scope and approvals agreed with you",
                  ]}
                />
              </div>
            </GuideSection>

            <ContactStrip label="Have a property situation to talk through?" />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-[#dfe4e7] bg-[#23435f] p-6 text-white shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c976]">
                Your appointment check
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight">
                Before you hand over the keys
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#d4e0e5]">
                Put these five answers in writing. If the answer is vague now, it will be harder to
                rely on later.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  "What exactly is included—and excluded?",
                  "Who can approve spending and vendor work?",
                  "What will I receive after a visit or repair?",
                  "How does an urgent issue reach me?",
                  "How can the scope change or end?",
                ].map((question) => (
                  <div key={question} className="flex gap-3 text-sm leading-relaxed text-[#e2eaee]">
                    <CircleHelp size={17} className="mt-0.5 shrink-0 text-[#e3c976]" />
                    <span>{question}</span>
                  </div>
                ))}
              </div>
              <a
                href="/customer-protection"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4"
              >
                Read Customer Protection <ArrowRight size={16} />
              </a>
            </div>
            <div className="rounded-2xl bg-[#e9eff1] p-6 md:p-8">
              <p className="text-sm font-semibold text-[#23435f]">A note before you act</p>
              <p className="mt-2 text-sm leading-relaxed text-[#667384]">
                Last updated: October 2026. General guidance, not legal advice. Confirm the scope,
                documents, and responsibilities for your own property before proceeding.
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

function QuickFact({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b89445]">{label}</p>
      <p className="mt-1 leading-relaxed text-[#446274]">{text}</p>
    </div>
  );
}

function ProcessStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div>
      <p className="font-serif text-2xl text-[#b89445]">{number}</p>
      <p className="mt-2 font-semibold text-[#23435f]">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-[#667384]">{text}</p>
    </div>
  );
}

function WorkCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#e4e8ed] bg-white p-5">
      <p className="font-serif text-xl font-semibold text-[#23435f]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-[#667384]">{text}</p>
    </div>
  );
}

function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-[#e4e8ed] bg-white p-5">
      <p className="font-semibold text-[#23435f]">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#667384]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-[#b89445]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BoundaryCard({
  title,
  items,
  good = false,
}: {
  title: string;
  items: string[];
  good?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${good ? "border-[#dce8df] bg-[#f5faf6]" : "border-[#eadfd3] bg-[#fffaf4]"}`}
    >
      <p className="font-semibold text-[#23435f]">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#667384]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${good ? "text-[#3c7a52]" : "text-[#b89445]"}`}
            />
            {item}
          </li>
        ))}
      </ul>
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
