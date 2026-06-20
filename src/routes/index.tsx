import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import logo from "@/assets/foundation-sarthi-logo.jpeg.asset.json";
import founderPhoto from "@/assets/founder-sunil-machra.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foundation Sarthi — Online Personal Tutoring for Class 9 & 10 (CBSE/ICSE)" },
      { name: "description", content: "1:2 personalized online tutoring for Class 9 & 10 CBSE and ICSE students. Live classes, weekly tests, doubt support — taught by MBBS doctors and IITians." },
      { property: "og:title", content: "Foundation Sarthi — Strong Foundations, Bright Futures" },
      { property: "og:description", content: "Only 2 students per teacher. Build a strong academic foundation with Foundation Sarthi." },
      { property: "og:image", content: logo.url },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Foundation Sarthi",
        description: "Personalized online tutoring for Class 9 & 10 CBSE/ICSE students.",
        url: "/",
        logo: logo.url,
      }),
    }],
  }),
  component: HomePage,
});

// ---- Config ----
const WHATSAPP_NUMBER = "917073456579"; // Founder: Dr. Sunil Machra (MBBS)
const WHATSAPP_MESSAGE = `Hello 👋

I am Dr. Sunil Machra (MBBS), Founder & Mentor at Foundation Sarthi.

I would be happy to personally guide you regarding your academic goals and arrange a FREE Demo Session & Personal Google Meet to understand your requirements and suggest the best learning plan.

Kindly share the following details:

📝  Information

• Name:
• Class:
• Board (ICSE/CBSE):
• Subject(s) Required:
• Parent / Student:
• Contact Number:

Once I receive these details, I will personally connect with you and schedule a one-to-one guidance session.

Looking forward to helping you build a strong foundation for future success. 🚀`;

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ---- Reveal-on-scroll helper ----
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <About />
        <Courses />
        <WhyUs />
        <Ecosystem />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingBookNow />
    </div>
  );
}

// ---------------- Navbar ----------------
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="Foundation Sarthi logo" className="h-10 w-10 shrink-0 rounded-lg object-contain ring-1 ring-border" />
          <div className="min-w-0">
            <div className="truncate text-base font-bold leading-tight">
              <span className="text-brand-blue">Foundation</span> <span className="text-brand-green">Sarthi</span>
            </div>
            <div className="truncate text-[11px] text-muted-foreground">CBSE • ICSE • Online Personal Tutoring</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-brand-blue">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-95">
            Enroll Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-soft">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-blue px-4 py-2 text-center text-sm font-semibold text-white">
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section id="top" className="gradient-hero relative overflow-hidden">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-blue ring-1 ring-brand-blue/15">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Only 2 students per teacher
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-blue sm:text-5xl lg:text-6xl">
            Strong Foundations, <span className="text-brand-green">Bright Futures</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Personalized learning for Class 9th & 10th students — CBSE and ICSE. Live online tutoring by MBBS doctors and IITians, designed for individual attention and real results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95">
              Enroll Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
              Book Free Demo
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { n: "1:2", l: "Student ratio" },
              { n: "100%", l: "Personal attention" },
              { n: "9–10", l: "CBSE & ICSE" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-brand-blue">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-green/10 blur-2xl" />
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-border">
            <img src={logo.url} alt="Foundation Sarthi" className="mx-auto h-64 w-auto object-contain sm:h-80" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl bg-blue-soft p-4">
                <div className="text-sm font-semibold text-brand-blue">9th & 10th</div>
                <div className="text-xs text-muted-foreground">CBSE • ICSE</div>
              </div>
              <div className="rounded-2xl bg-green-soft p-4">
                <div className="text-sm font-semibold text-brand-green">By MBBS & IITians</div>
                <div className="text-xs text-muted-foreground">Expert mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Founder ----------------
function Founder() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-soft ring-1 ring-border">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[180px_1fr]">
            <div className="mx-auto lg:mx-0">
              <img
                src={founderPhoto.url}
                alt="Dr. Sunil Machra — Founder, Foundation Sarthi"
                className="h-44 w-44 rounded-full object-cover shadow-soft ring-4 ring-white"
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Meet the Founder</div>
              <h2 className="mt-2 text-2xl font-extrabold text-brand-blue sm:text-3xl">Dr.SUNIL MACHRA (MBBS)</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Dr.SUNIL MACHRA is the Founder & Mentor at Foundation Sarthi. With a medical background and a passion for teaching, he personally guides every student to build strong academic foundations and achieve bright futures.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
                  Chat on WhatsApp
                </a>
                <a href="tel:+917073456579" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue ring-1 ring-border transition hover:bg-blue-soft">
                  Call +91 70734 56579
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Section wrapper ----------------
function Section({ id, eyebrow, title, subtitle, children, tone = "white" }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode; tone?: "white" | "blue" | "green";
}) {
  const ref = useReveal<HTMLDivElement>();
  const bg = tone === "blue" ? "bg-blue-soft" : tone === "green" ? "bg-green-soft" : "bg-background";
  return (
    <section id={id} className={`${bg} py-20`}>
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 opacity-0">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">{eyebrow}</div>}
          <h2 className="mt-2 text-3xl font-extrabold text-brand-blue sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

// ---------------- About ----------------
function About() {
  return (
    <Section id="about" eyebrow="About us" title="About Foundation Sarthi" subtitle="We are an online tutoring platform built around one belief — every student deserves undivided attention to truly understand and grow.">
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { t: "Our Mission", d: "Empower Class 9 & 10 students with strong conceptual clarity, exam confidence, and lifelong learning habits.", c: "blue" },
          { t: "Our Vision", d: "Make personalized 1:2 mentorship from MBBS & IIT alumni accessible to every serious learner across India.", c: "green" },
          { t: "Why Personalization", d: "Generic batches lose individual students. Our 1:2 model lets teachers adapt to each child's pace, gaps and goals.", c: "blue" },
        ].map((x) => (
          <div key={x.t} className={`rounded-2xl p-7 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-soft ${x.c === "blue" ? "bg-blue-soft" : "bg-green-soft"}`}>
            <h3 className={`text-lg font-bold ${x.c === "blue" ? "text-brand-blue" : "text-brand-green"}`}>{x.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Courses ----------------
function Courses() {
  const courses = [
    { board: "CBSE", cls: "Class 9", color: "blue" as const, points: ["All subjects covered", "NCERT + exemplar drills", "Concept-first teaching"] },
    { board: "CBSE", cls: "Class 10", color: "green" as const, points: ["Board exam intensive", "PYQ practice", "Weekly mock tests"] },
    { board: "ICSE", cls: "Class 9", color: "blue" as const, points: ["Selina + concise solutions", "Strong English & Science", "Conceptual depth"] },
    { board: "ICSE", cls: "Class 10", color: "green" as const, points: ["Board-aligned syllabus", "Doubt-solving daily", "Performance tracking"] },
  ];
  return (
    <Section id="courses" tone="blue" eyebrow="Courses" title="Courses We Offer" subtitle="Subject-wise preparation, exam strategy, and unlimited doubt solving — for every board and every chapter.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <div key={c.board + c.cls} className="group rounded-2xl bg-white p-6 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-soft">
            <div className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${c.color === "blue" ? "bg-blue-soft text-brand-blue" : "bg-green-soft text-brand-green"}`}>{c.board}</div>
            <h3 className="mt-3 text-xl font-bold text-brand-blue">{c.cls}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />{p}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-brand-blue hover:text-brand-green">Enquire →</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Why Us ----------------
function WhyUs() {
  const items = [
    { t: "Only 2 Students Per Teacher", d: "True 1:2 mentorship — no crowded batches, no missed doubts." },
    { t: "Personalized Attention", d: "Customized plans based on each student's pace and goals." },
    { t: "Complete Study Ecosystem", d: "Live classes, notes, tests, doubts — all in one place." },
    { t: "Regular Assessments", d: "Weekly tests and chapter quizzes to track real progress." },
    { t: "Performance Tracking", d: "Detailed analytics on accuracy, time, and concept gaps." },
    { t: "Parent Progress Reports", d: "Transparent updates so parents stay in the loop." },
  ];
  return (
    <Section id="why" eyebrow="Why Choose Us" title="Why Foundation Sarthi" subtitle="Everything is built around one number — 2 students per teacher.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i, idx) => (
          <div key={i.t} className="rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-sm font-bold text-brand-blue">{String(idx + 1).padStart(2, "0")}</div>
              <h3 className="text-base font-bold text-foreground">{i.t}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Ecosystem ----------------
function Ecosystem() {
  const items = [
    { t: "Live Classes", d: "Interactive 1:2 live sessions on Google Meet." },
    { t: "Recorded Sessions", d: "Re-watch any class anytime for revision." },
    { t: "Notes & Assignments", d: "Curated notes and topic-wise practice sheets." },
    { t: "Weekly Tests", d: "Chapter and full-syllabus tests with feedback." },
    { t: "Doubt Support", d: "Dedicated doubt-solving outside class hours." },
    { t: "Progress Analytics", d: "See strengths, gaps and improvement curves." },
  ];
  return (
    <Section id="ecosystem" tone="green" eyebrow="Study Ecosystem" title="Everything a Student Needs" subtitle="A complete learning loop — teach, practice, test, revise, track.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => (
          <div key={x.t} className="rounded-2xl bg-white p-6 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-glow">
            <h3 className="text-base font-bold text-brand-blue">{x.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Testimonials ----------------
function Testimonials() {
  const items = [
    { q: "My daughter's Math score jumped from 62 to 91 in two terms. The 1:2 model truly works.", n: "Mrs. Sharma", r: "Parent, Class 10 CBSE" },
    { q: "I never felt shy asking doubts. My mentor explained every concept until it clicked.", n: "Aarav", r: "Student, Class 9 ICSE" },
    { q: "Weekly tests and parent reports kept us informed. Highly recommended for serious students.", n: "Mr. Verma", r: "Parent, Class 10 ICSE" },
  ];
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Success Stories" subtitle="Real results from real students and parents.">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.n} className="rounded-2xl bg-blue-soft p-7 ring-1 ring-border">
            <div className="text-4xl leading-none text-brand-green">“</div>
            <blockquote className="mt-2 text-sm text-foreground/90">{t.q}</blockquote>
            <figcaption className="mt-6">
              <div className="text-sm font-semibold text-brand-blue">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Process ----------------
function Process() {
  const steps = [
    { n: "01", t: "Book Free Demo", d: "Schedule a no-cost demo with a mentor." },
    { n: "02", t: "Assessment", d: "We evaluate current level, gaps and goals." },
    { n: "03", t: "Batch Allocation", d: "Get paired with the right 1:2 mentor and partner." },
    { n: "04", t: "Start Learning", d: "Begin live classes, tests, and personal mentorship." },
  ];
  return (
    <Section id="process" tone="blue" eyebrow="Enrollment Process" title="How to Get Started" subtitle="Four simple steps to begin your learning journey.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl bg-white p-6 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-3xl font-extrabold text-brand-green/70">{s.n}</div>
            <h3 className="mt-2 text-lg font-bold text-brand-blue">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ---------------- FAQ ----------------
function FAQ() {
  const faqs = [
    { q: "What is the 1:2 teaching model?", a: "Each live class has only 2 students with one teacher, ensuring full personal attention and active participation." },
    { q: "Which boards do you cover?", a: "We currently teach CBSE and ICSE for Class 9 and 10, all major subjects." },
    { q: "Who are the teachers?", a: "Our mentors are MBBS doctors and IITians with proven teaching experience." },
    { q: "Is there a free demo class?", a: "Yes! Click 'Book Free Demo' or the green Book Now button to schedule one over WhatsApp." },
    { q: "How do parents track progress?", a: "We share regular progress reports including test scores, attendance and concept-level analytics." },
  ];
  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <span className="text-sm font-semibold text-foreground sm:text-base">{f.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-soft text-brand-blue transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

// ---------------- Contact ----------------
function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (!name || name.length > 80) errs.name = "Please enter your name (max 80 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) errs.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) errs.phone = "Enter a valid phone number.";
    if (message.length > 600) errs.message = "Message is too long.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const text = `Enquiry from ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setStatus("ok");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Section id="contact" tone="green" eyebrow="Contact" title="Get in Touch" subtitle="Have questions or ready to enroll? Reach out — we typically reply within an hour.">
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-border sm:p-8">
          <div className="grid gap-4">
            <Field label="Full Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Phone" name="phone" type="tel" error={errors.phone} />
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea name="message" rows={4} maxLength={600} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-blue" placeholder="Tell us about your child's class, board and goals…" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="mt-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95">
              Send via WhatsApp
            </button>
            {status === "ok" && <p className="text-sm text-brand-green">Opening WhatsApp… we'll get back to you soon!</p>}
          </div>
        </form>

        <div className="space-y-5">
          <InfoCard icon="📞" title="Phone" lines={["+91 70734 56579"]} />
          <InfoCard icon="✉️" title="Email" lines={["hello@foundationsarthi.com"]} />
          <InfoCard icon="💬" title="WhatsApp" lines={["Chat with the founder directly"]} action={{ label: "Open WhatsApp", href: whatsappLink }} />
          <div className="overflow-hidden rounded-2xl ring-1 ring-border">
            <iframe
              title="Foundation Sarthi location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={type === "email" ? 120 : 80}
        required
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-blue"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon, title, lines, action }: { icon: string; title: string; lines: string[]; action?: { label: string; href: string } }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-border">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-soft text-xl">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-bold text-brand-blue">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
        {action && (
          <a href={action.href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-semibold text-brand-green hover:underline">
            {action.label} →
          </a>
        )}
      </div>
    </div>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="border-t border-border bg-brand-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Foundation Sarthi" className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
            <div>
              <div className="text-base font-bold">Foundation Sarthi</div>
              <div className="text-xs text-white/70">Strong Foundations, Bright Futures</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/80">
            Personalized online tutoring for Class 9 & 10 CBSE/ICSE students. 1:2 mentorship by MBBS doctors and IITians.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {[["About", "#about"], ["Courses", "#courses"], ["Why Us", "#why"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Connect</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Foundation Sarthi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ---------------- Floating Book Now ----------------
function FloatingBookNow() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105 sm:bottom-6 sm:right-6"
      aria-label="Book Now on WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.41-8.43ZM12.05 21.3h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.83 9.83 0 0 1-1.5-5.23c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.44-4.43 9.86-9.88 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.55.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      Book Now
    </a>
  );
}
