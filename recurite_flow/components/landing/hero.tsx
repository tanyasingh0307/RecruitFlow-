import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon, PhoneCallIcon, SparklesIcon, ClockIcon } from "lucide-react"

const waveHeights = [28, 50, 72, 90, 64, 42, 78, 95, 58, 36, 80, 60, 44, 86, 70]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative mb-6 flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur-sm">
        <SparklesIcon className="size-3.5 text-amber-400" />
        <span className="text-[0.65rem] font-bold tracking-widest uppercase text-amber-300">
          AI-Powered Voice Recruiting Agent
        </span>
      </div>

      <h1 className="relative z-10 max-w-4xl text-center font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
        Your AI Recruiter
        <br />
        <span
          className="text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Calls. Screens. Schedules.
        </span>
      </h1>

      <p className="relative z-10 mt-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-300 sm:text-base">
        Import candidate lists and let our AI voice agent auto-call every applicant, perform initial screening interviews, evaluate qualifications, and schedule top performers automatically.
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="#pricing">
          <Button size="lg" className="gap-2 px-8 bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 border-none shadow-lg shadow-amber-500/20">
            Start Screening Free
            <ArrowRightIcon className="size-3.5" />
          </Button>
        </Link>
        <Link href="#how-it-works">
          <Button size="lg" variant="outline" className="gap-2 border-zinc-700 bg-zinc-900/90 text-white backdrop-blur-sm hover:bg-zinc-800">
            <PhoneCallIcon className="size-3.5 text-amber-400" />
            See How It Works
          </Button>
        </Link>
      </div>

      <div className="relative z-10 mt-12 w-full max-w-3xl">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-md">
          <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-yellow-500" />
              <span className="size-3 rounded-full bg-green-500" />
            </div>
            <span className="text-[0.65rem] font-medium text-zinc-400">RecruitFlow Voice Console v2.4</span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Imported", value: "248 candidates" },
              { label: "Calls Completed", value: "191 calls" },
              { label: "In Progress", value: "4 active" },
              { label: "Scheduled", value: "32 interviews" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-center">
                <p className="text-sm font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-[0.6rem] font-semibold tracking-wider uppercase text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-green-500/40 bg-green-950/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-green-500" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">AI Agent screening Sarah Johnson</p>
                  <p className="text-[0.65rem] text-zinc-300">Role: Senior Full Stack Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <ClockIcon className="size-3" />
                <span>02:45</span>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-center gap-1" style={{ height: "45px" }}>
              {waveHeights.map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-green-400"
                  style={{
                    height: `${h}%`,
                    animation: `wave-bar ${0.6 + (i % 5) * 0.12}s ease-in-out infinite`,
                    animationDelay: `${i * 0.05}s`,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
