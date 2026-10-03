import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import ContactForm from "../components/ContactForm";

export const Route = createFileRoute("/")({ component: Index });

const NAVY = "#17324f";
const HERO = "#1A3A5C";
const GOLD = "#b89445";
const CREAM = "#f7f5ef";
const INK = "#223044";
const MUTED = "#667384";
const WHATSAPP = "https://wa.me/919148338801";
const CALL = "tel:+919148338801";
const MAPS = "https://maps.app.goo.gl/aFny22T8D57v5dzK8?g_st=ac";

const areas = [
  "HSR Layout",
  "Kudlu Gate",
  "Bellandur",
  "Sarjapur Road",
  "Whitefield",
  "Hoodi",
  "Mahadevapura",
  "Marathahalli",
  "Kadubeesanahalli",
  "ITPL",
  "Varthur",
  "Kasavanahalli",
  "Harlur",
  "Yemalur",
  "Panathur",
  "Koramangala",
];

const routes = [
  {
    number: "01",
    title: "Find a property",
    text: "Tell us your area, budget, preferences, and timeline. We help you take the next step with local context.",
    id: "find-a-property",
    eyebrow: "For people looking for a home",
    heading: "A clearer way to start your Bengaluru home search.",
    detail:
      "Share the area you have in mind, your budget, preferences, and move-in timeline. We help you frame the requirement properly, understand the local context, and decide on the next practical step.",
    points: [
      "Area and commute context",
      "Budget and preference clarity",
      "A conversation before the next action",
    ],
  },
  {
    number: "02",
    title: "Rent out my property",
    text: "Coordinate enquiries, visits, documentation-related steps, and handover support for your Bengaluru property.",
    id: "rent-out-my-property",
    eyebrow: "For owners ready to let",
    heading: "Practical support for renting out your property.",
    detail:
      "When you are ready to rent, we help coordinate the early conversations, visits, documentation-related steps, and handover details. The scope is agreed with you before the work begins.",
    points: [
      "Enquiry and visit coordination",
      "Documentation-related follow-up",
      "A clearer handover path",
    ],
  },
  {
    number: "03",
    title: "Manage my property",
    text: "A local point of coordination for owners in Bengaluru, elsewhere in India, or abroad—with agreed updates.",
    id: "manage-my-property",
    eyebrow: "For owners who need local coordination",
    heading: "A local point of contact while you are away.",
    detail:
      "Whether you are elsewhere in India or abroad, we help coordinate the local actions your property needs. We clarify responsibilities, keep the next step visible, and share updates as agreed.",
    points: [
      "Agreed scope before action",
      "Local follow-up on practical issues",
      "Clear updates and closure",
    ],
  },
  {
    number: "04",
    title: "Prepare and care for my property",
    text: "Coordinate cleaning, painting, repairs, inspections, and related professional support, with EasyFind overseeing the agreed work.",
    id: "prepare-and-care",
    eyebrow: "For properties that need attention",
    heading: "Get a property ready, looked after, or back on track.",
    detail:
      "From cleaning and painting to repairs, inspections, and readiness work, we coordinate the agreed local support and help keep the work understandable from start to finish.",
    points: [
      "Readiness checks and practical scope",
      "Coordination with suitable professionals",
      "Updates as the work moves forward",
    ],
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("#top");
      }}
      className="flex items-center"
      aria-label="EasyFind home"
    >
      <span
        className="flex h-10 w-[7.5rem] items-center overflow-hidden rounded-lg"
        style={{ background: light ? "white" : "transparent", padding: light ? "4px 8px" : 0 }}
      >
        <img
          src="/easyfind-logo.jpg"
          alt="EasyFind Property Solutions"
          className="h-full w-full object-contain"
        />
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["How it works", "#how-it-works"],
    ["Areas", "#areas"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium" style={{ color: NAVY }}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-4 py-2 text-sm font-semibold"
            style={{ borderColor: GOLD, color: NAVY }}
          >
            WhatsApp us
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Start an enquiry
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: NAVY }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 pb-6 pt-3 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b py-4 font-medium"
              style={{ color: NAVY }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              scrollTo("#contact");
            }}
            className="mt-4 w-full rounded-full py-3 font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Start an enquiry
          </button>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className="mb-4 text-xs font-semibold uppercase"
      style={{ color: light ? "#e3c976" : GOLD, letterSpacing: ".2em" }}
    >
      {children}
    </div>
  );
}
function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      style={{ color: light ? "white" : NAVY }}
    >
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32" style={{ background: HERO }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 pb-20 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div className="mx-auto max-w-2xl pt-2 text-center lg:mx-0 lg:pt-12 lg:text-left">
          <Eyebrow light>EasyFind Property Solutions</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Your On-Ground
            <br />
            <span style={{ color: "#e3c976" }}>Property Partner</span>
            <br />
            in Bengaluru.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">
            We help people find homes in Bengaluru and help property owners manage what
            matters—locally, clearly, and with practical support.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button
              onClick={() => scrollTo("#find-a-property")}
              className="rounded-full px-6 py-3.5 font-semibold"
              style={{ background: "#e3c976", color: NAVY }}
            >
              I’m looking for a property <ArrowRight className="ml-2 inline" size={17} />
            </button>
            <button
              onClick={() => scrollTo("#rent-out-my-property")}
              className="rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white"
            >
              I own a property
            </button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm lg:mx-0 lg:mt-8 lg:justify-self-end">
          <Eyebrow light>One clear next step</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white">
            Tell us what your property needs.
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Share the situation once and we’ll help you choose the right local route.
          </p>
          <div className="mt-7 space-y-3">
            {routes.map((route) => (
              <button
                key={route.number}
                type="button"
                onClick={() => scrollTo(`#${route.id}`)}
                className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-left transition hover:bg-white/15"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span style={{ color: "#e3c976" }}>{route.number}</span>
                  {route.title}
                </span>
                <ArrowRight size={16} className="text-white/70" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRoute({ route, index }: { route: (typeof routes)[number]; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section
      id={route.id}
      className="scroll-mt-24 py-20 md:py-28"
      style={{ background: index % 2 === 0 ? "white" : CREAM }}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 ${
          reversed ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-4xl" style={{ color: GOLD }}>
              {route.number}
            </span>
            <span className="h-px w-12" style={{ background: GOLD }} />
          </div>
          <Eyebrow>{route.eyebrow}</Eyebrow>
          <SectionTitle>{route.heading}</SectionTitle>
          <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: MUTED }}>
            {route.detail}
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-8 rounded-full px-6 py-3.5 font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Start with this route <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
        <div
          className="rounded-2xl border p-7 shadow-sm md:p-9"
          style={{ borderColor: "#e4e8ed", background: "rgba(255,255,255,.72)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[.2em]" style={{ color: GOLD }}>
            What this can include
          </p>
          <ul className="mt-6 space-y-4">
            {route.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="mt-0.5 shrink-0" size={19} style={{ color: GOLD }} />
                <span className="leading-relaxed" style={{ color: INK }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t pt-6" style={{ borderColor: "#e4e8ed" }}>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              We keep the conversation specific to your situation, so the next step is useful—not
              vague.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnerPromise() {
  return (
    <section id="owner-routes" className="py-20 md:py-28" style={{ background: CREAM }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <Eyebrow>For property owners</Eyebrow>
          <SectionTitle>
            Your Bengaluru property, looked after locally, with clear updates while you’re away.
          </SectionTitle>
          <p className="mt-6 leading-relaxed" style={{ color: MUTED }}>
            Whether you live in Bengaluru, elsewhere in India, or abroad, EasyFind can act as the
            local point of coordination for the work your property needs.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-8 rounded-full px-6 py-3.5 font-semibold"
            style={{ background: NAVY, color: "white" }}
          >
            Discuss my property <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Agree the scope before work begins",
            "Coordinate suitable local professionals",
            "Keep the next action clear",
            "Share agreed updates and closure",
          ].map((x) => (
            <div key={x} className="flex gap-3 rounded-xl bg-white p-5">
              <Check size={20} style={{ color: GOLD }} />
              <span className="font-medium" style={{ color: INK }}>
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <div id="services" className="scroll-mt-24">
        {routes.map((route, index) => (
          <ServiceRoute key={route.id} route={route} index={index} />
        ))}
      </div>
    </>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Eyebrow light>Local where it matters</Eyebrow>
          <SectionTitle light>Useful local context, without the noise.</SectionTitle>
          <p className="mt-5 leading-relaxed text-white/70">
            EasyFind works across key residential and employment corridors in Bengaluru. Tell us
            your preferred area, property need, and timeline—we’ll help you understand the right
            next step.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="font-serif text-xl text-white">Close to work</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Bellandur · Kadubeesanahalli · Marathahalli · Yemalur · Whitefield · Hoodi · ITPL
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="font-serif text-xl text-white">The South-East choice</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              HSR Layout · Kudlu Gate · Sarjapur Road · Kasavanahalli · Harlur · Varthur
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="font-serif text-xl text-white">Connected Bengaluru</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Mahadevapura · Panathur · Koramangala
            </p>
          </div>
        </div>
        <details className="mt-8 max-w-2xl text-white/70">
          <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-white">
            View all confirmed areas <ChevronDown size={16} />
          </summary>
          <p className="mt-4 leading-loose">{areas.join(" · ")}</p>
        </details>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    ["Very helpful and professional.", "Rishabh Kejariwal"],
    ["Prompt service.", "Kirit"],
    ["Professional and dependable.", "Shameer Ayyappan"],
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow>What clients say</Eyebrow>
        <SectionTitle>Local help, noticed by the people who use it.</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <blockquote key={name} className="border p-6" style={{ borderColor: "#e4e8ed" }}>
              <p className="font-serif text-2xl leading-tight" style={{ color: NAVY }}>
                “{quote}”
              </p>
              <footer className="mt-7 text-xs leading-relaxed" style={{ color: MUTED }}>
                — {name}
                <br />
                Google Business Profile
              </footer>
            </blockquote>
          ))}
        </div>
        <a
          href={MAPS}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: NAVY }}
        >
          Read more on Google <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function WhyEasyFind() {
  const points = [
    [
      "Enquiry-led, not a listing portal",
      "Start with your requirement and get a practical next step.",
    ],
    [
      "Local coordination",
      "We agree the scope, coordinate the next action, and share updates as agreed.",
    ],
    [
      "Clear service routes",
      "Find, rent out, manage, or prepare and care for a Bengaluru property.",
    ],
  ];
  return (
    <section
      className="border-y py-20 md:py-24"
      style={{ background: CREAM, borderColor: "#e4e8ed" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Why EasyFind</Eyebrow>
          <SectionTitle>Local support, clearly handled.</SectionTitle>
          <p className="mt-5 leading-relaxed" style={{ color: MUTED }}>
            A straightforward starting point for people looking for a home and owners who need
            practical support on the ground.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: "#e4e8ed" }}
            >
              <Check size={20} style={{ color: GOLD }} />
              <h3 className="mt-5 text-lg font-semibold" style={{ color: NAVY }}>
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle>Clear from the first conversation.</SectionTitle>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            [
              "01",
              "Share the situation",
              "Tell us what you’re looking for or what your property needs.",
            ],
            [
              "02",
              "Agree the direction",
              "We clarify the requirement, scope, and responsibilities.",
            ],
            [
              "03",
              "Coordinate the next step",
              "EasyFind keeps the local action moving and the follow-up clear.",
            ],
          ].map(([n, t, b]) => (
            <div key={n} className="text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 font-serif text-xl"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                {n}
              </div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: NAVY }}>
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    [
      "Do you list properties on the website?",
      "No. We keep the website enquiry-led. Share your area, budget, preferences, or property need and we will guide the next conversation.",
    ],
    [
      "Can owners who live away get local support?",
      "Yes, where the requirement and responsibilities are agreed in advance. We coordinate the next action and share agreed updates.",
    ],
    [
      "When will I hear back after an enquiry?",
      "We aim to acknowledge enquiries within one business day. Completion timelines depend on the requirement and the agreed scope.",
    ],
    [
      "How are fees handled?",
      "Fees and any third-party or vendor charges are agreed case by case according to the requirement and scope. We do not publish a universal price list.",
    ],
    [
      "Which Bengaluru areas do you cover?",
      "We focus on confirmed areas across Bengaluru’s South-East and employment corridors. See the Areas section for the current coverage.",
    ],
  ];
  return (
    <section
      className="border-y py-20 md:py-24"
      style={{ background: CREAM, borderColor: "#e4e8ed" }}
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <Eyebrow>Good to know</Eyebrow>
          <SectionTitle>A clearer conversation starts here.</SectionTitle>
        </div>
        <div
          className="mt-10 divide-y rounded-2xl border bg-white px-6"
          style={{ borderColor: "#e4e8ed" }}
        >
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold"
                style={{ color: NAVY }}
              >
                {question}
                <ChevronDown
                  className="shrink-0 transition group-open:rotate-180"
                  style={{ color: GOLD }}
                  size={18}
                />
              </summary>
              <p className="max-w-2xl pt-3 leading-relaxed" style={{ color: MUTED }}>
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: CREAM }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <SectionTitle>Tell us what you need from Bengaluru property.</SectionTitle>
            <p className="mt-5 max-w-xl leading-relaxed" style={{ color: MUTED }}>
              Share the basics and we’ll help you identify the right next step. No listings
              catalogue—just a practical conversation about your requirement.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#e9f7ee", color: "#176b3a" }}
                >
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    Start an enquiry
                  </span>
                </span>
              </a>
              <a
                href="mailto:info@easyfindprops.com"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#eef3f8", color: NAVY }}
                >
                  <Mail size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    Email
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    info@easyfindprops.com
                  </span>
                </span>
              </a>
              <a
                href={CALL}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
                aria-label="Call EasyFind"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#fbf4df", color: GOLD }}
                >
                  <Phone size={20} />
                </span>
                <span>
                  <span
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: MUTED }}
                  >
                    Phone
                  </span>
                  <span className="mt-1 block font-semibold" style={{ color: NAVY }}>
                    Call EasyFind
                  </span>
                </span>
              </a>
            </div>
            <div
              className="mt-8 flex items-start gap-4 rounded-xl border bg-white/60 p-5"
              style={{ borderColor: "#e4e8ed" }}
            >
              <MapPin className="mt-0.5 shrink-0" style={{ color: GOLD }} size={22} />
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: MUTED }}
                >
                  Find EasyFind
                </p>
                <p className="mt-2 leading-relaxed" style={{ color: INK }}>
                  East Bengaluru, Karnataka
                </p>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: NAVY }}
                >
                  View Google Business Profile <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[440px] rounded-2xl bg-white p-2 shadow-xl lg:mx-0 lg:justify-self-end">
            <ContactForm onPrivacyClick={() => scrollTo("#privacy")} />
          </div>
        </div>
        <div
          className="mt-10 overflow-hidden rounded-2xl border bg-white shadow-lg"
          style={{ borderColor: "#e4e8ed" }}
        >
          <div
            className="flex flex-col justify-between gap-3 border-b px-6 py-5 sm:flex-row sm:items-center"
            style={{ borderColor: "#e4e8ed" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                Our local presence
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold" style={{ color: NAVY }}>
                Find us in Bengaluru
              </h3>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: NAVY }}
            >
              Open in Google Maps <ArrowRight size={15} />
            </a>
          </div>
          <iframe
            title="EasyFind Property Solutions on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4847368668495!2d77.62215847587636!3d12.94079861555562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15229e6c1a61%3A0x26a05f018e301661!2sEasyFind%20Property%20Solutions!5e0!3m2!1sen!2sin!4v1710321234567!5m2!1sen!2sin"
            width="100%"
            height="240"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            style={{ background: "#e9f7ee", color: "#176b3a" }}
          >
            <MessageCircle size={17} /> WhatsApp EasyFind
          </a>
        </div>
        <div
          className="mt-8 flex flex-col justify-between gap-4 border-t pt-6 text-sm sm:flex-row"
          style={{ borderColor: "#e4e8ed", color: MUTED }}
        >
          <span>© {new Date().getFullYear()} EasyFind Property Solutions</span>
          <span>Find a property · Rent out · Manage · Prepare and care</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: MUTED }}>
          Customer-facing brand of EASYFIND REALTY SOLUTIONS PRIVATE LIMITED.
        </p>
        <div
          className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-3"
          style={{ borderColor: "#e4e8ed" }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Our services
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              Find a property
              <br />
              Rent out my property
              <br />
              Manage my property
              <br />
              Prepare and care
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Local support
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              Practical property support across confirmed Bengaluru areas.{" "}
              <a
                href="#areas"
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                Explore areas
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
              Contact
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>
              <a
                href={CALL}
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                Call EasyFind
              </a>
              <br />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: NAVY }}
              >
                WhatsApp us
              </a>
              <br />
              info@easyfindprops.com
            </p>
          </div>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs" aria-label="Legal">
          <a href="/legal/privacy" className="underline underline-offset-2" style={{ color: NAVY }}>
            Privacy
          </a>
          <a href="/legal/terms" className="underline underline-offset-2" style={{ color: NAVY }}>
            Terms
          </a>
          <a href="/legal/cookies" className="underline underline-offset-2" style={{ color: NAVY }}>
            Cookies
          </a>
          <a
            href="/legal/legal-notice"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Legal notice
          </a>
          <a
            href="/legal/accessibility"
            className="underline underline-offset-2"
            style={{ color: NAVY }}
          >
            Accessibility
          </a>
        </nav>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div style={{ color: INK, fontFamily: "Inter, sans-serif" }}>
      <Helmet>
        <title>EasyFind Property Solutions | Your On-Ground Property Partner in Bengaluru</title>
        <meta
          name="description"
          content="EasyFind helps people find homes in Bengaluru and helps property owners manage what matters—with local, clear, practical support."
        />
        <link rel="canonical" href="https://easyfindprops.com" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <OwnerPromise />
        <Areas />
        <Reviews />
        <WhyEasyFind />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
