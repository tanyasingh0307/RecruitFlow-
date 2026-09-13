import {
  MicIcon,
  BrainCircuitIcon,
  CalendarDaysIcon,
  FileTextIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChart3Icon,
} from "lucide-react"

const features = [
  {
    icon: MicIcon,
    title: "Natural Voice AI",
    description:
      "Human-like voice conversations powered by advanced LLMs. Candidates often can't tell it's an AI — until you tell them.",
    tag: "Core",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    tagColor: "text-amber-300 bg-amber-500/20 border border-amber-500/30",
  },
  {
    icon: BrainCircuitIcon,
    title: "Intelligent Screening",
    description:
      "Customise screening criteria per role. The AI asks adaptive follow-ups based on candidate answers and scores responses automatically.",
    tag: "AI-Powered",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    tagColor: "text-purple-300 bg-purple-500/20 border border-purple-500/30",
  },
  {
    icon: CalendarDaysIcon,
    title: "Auto Interview Scheduling",
    description:
      "Shortlisted candidates are booked directly into your team's calendar. No back-and-forth emails, no coordinator needed.",
    tag: "Automation",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    tagColor: "text-blue-300 bg-blue-500/20 border border-blue-500/30",
  },
  {
    icon: FileTextIcon,
    title: "Instant Call Reports",
    description:
      "Every call generates a structured summary with transcript, sentiment analysis, scores, and a pass/fail recommendation.",
    tag: "Insights",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    tagColor: "text-green-300 bg-green-500/20 border border-green-500/30",
  },
  {
    icon: DatabaseIcon,
    title: "Bulk Candidate Import",
    description:
      "Upload thousands of candidates at once via CSV or connect directly to Greenhouse, Lever, Workday, or your ATS via API.",
    tag: "Integrations",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    tagColor: "text-orange-300 bg-orange-500/20 border border-orange-500/30",
  },
  {
    icon: ZapIcon,
    title: "Instant Outreach",
    description:
      "Calls begin within minutes of import. No waiting, no batching delays. Every candidate is reached at the right time automatically.",
    tag: "Speed",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    tagColor: "text-yellow-300 bg-yellow-500/20 border border-yellow-500/30",
  },
  {
    icon: ShieldCheckIcon,
    title: "Compliant by Design",
    description:
      "GDPR and CCPA ready. Automatic consent capture, call recordings with opt-out support, and data retention controls built in.",
    tag: "Compliance",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
    tagColor: "text-red-300 bg-red-500/20 border border-red-500/30",
  },
  {
    icon: BarChart3Icon,
    title: "Pipeline Analytics",
    description:
      "Track funnel conversion, avg. screening time, pass rates by role and source, and ROI per hire — all in a live dashboard.",
    tag: "Analytics",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    tagColor: "text-cyan-300 bg-cyan-500/20 border border-cyan-500/30",
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-zinc-900/60 py-28 px-6">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-amber-400">
          Platform Features
        </p>
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Everything You Need to
          <br />
          Hire at Scale
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          A complete AI recruiting stack — not just a dialler.
        </p>
      </div>

      {/* Feature grid */}
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-xl"
            >
              {/* Icon + Tag */}
              <div className="mb-4 flex items-start justify-between">
                <span className={`flex size-10 items-center justify-center rounded-xl ${feature.iconBg}`}>
                  <Icon className={`size-5 ${feature.iconColor}`} />
                </span>
                <span className={`rounded-full px-2 py-0.5 text-[0.55rem] font-bold tracking-widest uppercase ${feature.tagColor}`}>
                  {feature.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-white">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-zinc-300">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
