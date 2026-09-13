import { UploadIcon, PhoneCallIcon, CalendarCheckIcon, ArrowRightIcon } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UploadIcon,
    title: "Import Your Candidates",
    description:
      "Upload a CSV or connect your ATS. RecruitFlow ingests candidate names, phone numbers, and role context in seconds. No manual setup, no API gymnastics.",
    detail: "Supports CSV, Excel, Greenhouse, Lever & more",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 ring-1 ring-amber-500/30",
  },
  {
    step: "02",
    icon: PhoneCallIcon,
    title: "AI Agent Auto-Calls & Screens",
    description:
      "Our conversational AI voice agent calls every candidate, introduces itself naturally, asks tailored screening questions, and evaluates answers in real-time — no human needed.",
    detail: "Handles objections, follow-ups & language variations",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10 ring-1 ring-green-500/30",
  },
  {
    step: "03",
    icon: CalendarCheckIcon,
    title: "Top Candidates Get Scheduled",
    description:
      "Based on screening scores and your criteria, the agent automatically books qualified candidates into your team's calendar and sends confirmation emails — all before you finish your coffee.",
    detail: "Syncs with Google Calendar, Outlook & Calendly",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 ring-1 ring-blue-500/30",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-zinc-950 py-28 px-6">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-amber-400">
          How It Works
        </p>
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Three Steps to a Full
          <br />
          Interview Pipeline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          From a spreadsheet to a booked calendar — entirely automated.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative flex flex-col">
                {/* Connector arrow (hidden on last) */}
                {idx < steps.length - 1 && (
                  <div className="absolute -right-3 top-14 z-10 hidden items-center md:flex">
                    <ArrowRightIcon className="size-5 text-zinc-600" />
                  </div>
                )}

                <div className="flex flex-1 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900">
                  {/* Step number */}
                  <p className="mb-4 font-heading text-[2.5rem] font-bold leading-none tracking-tighter text-amber-400/30 select-none">
                    {step.step}
                  </p>

                  {/* Icon */}
                  <span className={`mb-5 flex size-12 items-center justify-center rounded-xl ${step.iconBg}`}>
                    <Icon className={`size-5 ${step.iconColor}`} />
                  </span>

                  {/* Content */}
                  <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-xs leading-relaxed text-zinc-300">
                    {step.description}
                  </p>

                  {/* Detail pill */}
                  <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2">
                    <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-zinc-400">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
