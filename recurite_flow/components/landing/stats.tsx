import { PhoneCallIcon, ClockIcon, CheckCircle2Icon, UsersIcon } from "lucide-react"

const stats = [
  {
    icon: PhoneCallIcon,
    value: "500,000+",
    label: "Candidate Calls Placed",
    description: "Automated screening interviews conducted with 98% call completion rate.",
  },
  {
    icon: ClockIcon,
    value: "85%",
    label: "Recruiter Time Saved",
    description: "Hours saved per week on repetitive phone screens and scheduling emails.",
  },
  {
    icon: CheckCircle2Icon,
    value: "94%",
    label: "Candidate Satisfaction",
    description: "Candidates appreciate instant follow-ups and zero calendar friction.",
  },
  {
    icon: UsersIcon,
    value: "3x",
    label: "Faster Time-to-Hire",
    description: "From candidate upload to booked technical interview in under 24 hours.",
  },
]

export function Stats() {
  return (
    <section className="relative border-y border-zinc-800 bg-zinc-900 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/30">
                  <Icon className="size-5 text-amber-400" />
                </div>
                <p className="font-heading text-4xl font-extrabold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest uppercase text-amber-400">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
