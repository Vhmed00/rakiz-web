"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Eye } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

// ─── Syntax Highlighter ──────────────────────────────────────
const KW = new Set([
  "import", "from", "export", "default", "const", "let", "var",
  "async", "await", "return", "new", "class", "function", "if", "else",
  "for", "of", "in", "while", "try", "catch", "null", "undefined",
  "true", "false", "require", "def", "print", "Response", "Request",
  "process", "module", "os",
]);

type TK = "comment" | "keyword" | "string" | "number" | "fn" | "plain";

const C: Record<TK, string> = {
  comment: "#4a5568",
  keyword: "#79c0ff",
  string:  "#a5d6ff",
  number:  "#f2cc60",
  fn:      "#d2a8ff",
  plain:   "#c9d1d9",
};

interface Seg { text: string; color: string }

function tokenizeLine(line: string): Seg[] {
  const result: Seg[] = [];
  const trimmed = line.trimStart();
  if (trimmed.startsWith("//") || trimmed.startsWith("#")) {
    return [{ text: line, color: C.comment }];
  }

  let i = 0;
  let buf = "";
  const flush = () => { if (buf) { result.push({ text: buf, color: C.plain }); buf = ""; } };

  while (i < line.length) {
    const ch = line[i];

    if (ch === '"' || ch === "'" || ch === "`") {
      flush();
      const q = ch; let s = q; i++;
      while (i < line.length && line[i] !== q) s += line[i++];
      s += (line[i] ?? ""); i++;
      result.push({ text: s, color: C.string });
      continue;
    }

    if (/[a-zA-Z_$]/.test(ch)) {
      flush(); let w = "";
      while (i < line.length && /[a-zA-Z0-9_$]/.test(line[i])) w += line[i++];
      if (KW.has(w))        result.push({ text: w, color: C.keyword });
      else if (line[i] === "(") result.push({ text: w, color: C.fn });
      else                  result.push({ text: w, color: C.plain });
      continue;
    }

    if (/[0-9]/.test(ch)) {
      flush(); let n = "";
      while (i < line.length && /[0-9.]/.test(line[i])) n += line[i++];
      result.push({ text: n, color: C.number });
      continue;
    }

    buf += ch; i++;
  }
  flush();
  return result;
}

function renderCode(code: string) {
  return code.split("\n").map((line, idx) => (
    <div key={idx} className="flex min-h-[1.5rem]">
      <span
        className="select-none w-10 shrink-0 text-right pe-4 text-xs leading-6"
        style={{ color: "#3a3f4a" }}
      >
        {idx + 1}
      </span>
      <span className="leading-6 text-xs">
        {tokenizeLine(line).map((s, si) => (
          <span key={si} style={{ color: s.color }}>{s.text}</span>
        ))}
      </span>
    </div>
  ));
}

// ─── Tech icon SVGs (inline, no external dep) ────────────────
const NextIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 180 180" fill="currentColor">
    <path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zm-4.5 37.5h15V105l-15-18.75V37.5zm41.9 85.1L67.5 37.5H52.5l75 112.5c-11.3 4.5-23.6 7-37.5 7C52.6 157.5 22.5 127.4 22.5 90S52.6 22.5 90 22.5s67.5 30.1 67.5 67.5c0 16.1-5.7 30.9-15.1 42.6z"/>
  </svg>
);

const PythonIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656L6.207 5.4h5.814v.82H3.889S0 5.77 0 11.969c0 6.2 3.432 5.977 3.432 5.977h2.051v-2.876s-.11-3.432 3.38-3.432h5.824s3.267.053 3.267-3.157V3.267S18.48 0 11.914 0zm-3.238 1.886a1.049 1.049 0 1 1 0 2.098 1.049 1.049 0 0 1 0-2.098zM12.086 24c6.096 0 5.716-2.656 5.716-2.656L17.795 18.6H11.98v-.82h8.132S24 18.23 24 12.031c0-6.199-3.432-5.977-3.432-5.977H18.52v2.876s.11 3.432-3.381 3.432H9.314s-3.267-.053-3.267 3.157v5.214S5.52 24 12.086 24zm3.238-1.886a1.049 1.049 0 1 1 0-2.098 1.049 1.049 0 0 1 0 2.098z"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.998 24a1.361 1.361 0 0 1-.682-.18l-2.168-1.285c-.323-.182-.165-.246-.059-.284.432-.15.52-.184 1.001-.443a.17.17 0 0 1 .16.012l1.665.991c.06.033.144.033.2 0l6.498-3.751c.06-.035.099-.104.099-.177V8.12c0-.074-.039-.143-.1-.18l-6.496-3.748a.183.183 0 0 0-.2 0L5.418 7.94a.207.207 0 0 0-.101.18v7.497c0 .073.04.142.1.175l1.78 1.028c.966.483 1.557-.086 1.557-.658V8.84c0-.105.084-.188.19-.188h.823c.103 0 .189.083.189.188v7.324c0 1.288-.702 2.027-1.924 2.027-.375 0-.671 0-1.494-.406L4.43 16.81a1.365 1.365 0 0 1-.682-1.184V8.12c0-.48.258-.935.682-1.184l6.498-3.752a1.42 1.42 0 0 1 1.363 0l6.498 3.752c.424.249.682.704.682 1.184v7.497c0 .48-.258.935-.682 1.184l-6.498 3.751c-.21.12-.448.18-.684.18l-.01.268z"/>
  </svg>
);

const CurlIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

// ─── Code examples ───────────────────────────────────────────
const TABS = [
  { id: "nextjs",  label: "Next.js",  Icon: NextIcon   },
  { id: "python",  label: "Python",   Icon: PythonIcon },
  { id: "node",    label: "Node.js",  Icon: NodeIcon   },
  { id: "curl",    label: "cURL",     Icon: CurlIcon   },
] as const;

type TabId = typeof TABS[number]["id"];

const CODE: Record<TabId, string> = {
  nextjs: `import { Rakiz } from "@rakiz/sdk";

const rakiz = new Rakiz({ apiKey: process.env.RAKIZ_API_KEY });

// Auto-respond to every new WhatsApp inquiry
export async function POST(request: Request) {
  const { name, phone } = await request.json();

  const message = await rakiz.whatsapp.send({
    to: phone,
    template: "lead_response",
    variables: { name, agent: "Aya" },
  });

  return Response.json({ id: message.id });
}`,

  python: `import rakiz, os

client = rakiz.Rakiz(api_key=os.environ["RAKIZ_API_KEY"])

# Pull live business metrics for the last 30 days
report = client.analytics.report(
    date_range="last_30_days",
    metrics=["leads", "revenue", "cac"],
)

for row in report.data:
    print(f"{row.date}  leads={row.leads}  revenue={row.revenue}")`,

  node: `const { Rakiz } = require("@rakiz/sdk");

const rakiz = new Rakiz({ apiKey: process.env.RAKIZ_API_KEY });

// Auto-create a CRM lead on every new form submission
rakiz.webhooks.on("inquiry.received", async (event) => {
  const lead = await rakiz.crm.createLead({
    name:   event.data.name,
    phone:  event.data.phone,
    source: event.data.source ?? "website",
  });

  console.log("Lead created:", lead.id);
});

rakiz.listen({ port: 3000 });`,

  curl: `curl -X POST https://api.rakiz.om/v1/whatsapp/send \\
  -H "Authorization: Bearer $RAKIZ_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+968XXXXXXXX",
    "template": "lead_response",
    "variables": {
      "name": "Ahmed Al-Balushi",
      "agent": "Aya"
    }
  }'`,
};

// ─── Component ───────────────────────────────────────────────
export default function CodeSwitcher() {
  const { t } = useLanguage();
  const [active, setActive] = useState<TabId>("nextjs");
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="integrate" ref={ref} className="relative px-6 py-24 sm:py-32">
      <div className="divider mx-auto max-w-6xl mb-20" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t.codeSwitcher.badge}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.codeSwitcher.heading}
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-lg mx-auto">
            {t.codeSwitcher.subtext}
          </p>
        </motion.div>

        {/* Code card — dark shell on light page (intentional, industry standard) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="overflow-hidden rounded-2xl border border-neutral-200 shadow-lg"
          style={{ background: "#0d0d0d" }}
        >
          {/* Tab bar */}
          <div
            className="flex items-center justify-between border-b px-1"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "#111111" }}
          >
            <div className="flex">
              {TABS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`relative flex items-center gap-2 px-4 py-3.5 text-xs font-medium transition-colors duration-150 ${
                    active === id ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <Icon />
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute bottom-0 inset-x-4 h-px bg-white/60"
                      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Visual example badge — not a downloadable SDK */}
            <div
              className="me-3 flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs"
              style={{ color: "#71717a", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{t.codeSwitcher.visualLabel}</span>
            </div>
          </div>

          {/* Code block */}
          <div className="overflow-x-auto p-5" dir="ltr">
            <AnimatePresence mode="wait">
              <motion.pre
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0, 0, 0.2, 1] }}
                className="font-mono text-xs leading-relaxed min-h-[240px]"
              >
                {renderCode(CODE[active])}
              </motion.pre>
            </AnimatePresence>
          </div>

          {/* Footer note */}
          <div
            className="flex items-start gap-2.5 border-t px-5 py-4"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "#111111" }}
          >
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            <span className="text-xs leading-relaxed text-neutral-500">
              {t.codeSwitcher.footerNote}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
