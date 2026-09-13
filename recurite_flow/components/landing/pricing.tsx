import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "Forever Free",
    description: "Perfect for testing AI voice screening on your first batch of candidates.",
    features: [
      "50 AI screening calls / month",
      "Standard voice persona",
      "CSV candidate import",
      "Basic transcript summaries",
      "Email notifications",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "per month",
    description: "Designed for scaling recruitment teams with active weekly job openings.",
    features: [
      "1,000 AI screening calls / month",
      "Custom voice persona & agent scripts",
      "ATS integrations (Greenhouse, Lever)",
      "Automated calendar booking",
      "Detailed sentiment & score reports",
      "Priority phone support",
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Billed annually",
    description: "For enterprise talent orgs requiring unlimited calls, compliance & custom workflows.",
    features: [
      "Unlimited AI screening calls",
      "Dedicated custom AI voice model",
      "Custom ATS & CRM integrations",
      "SSO & SOC-2 compliance",
      "Dedicated Customer Success Manager",
      "Custom SLA & onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-zinc-900/60 py-28 px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-amber-400">
          Simple Pricing
        </p>
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Scale Your Screening Pay-As-You-Grow
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          Transparent pricing with no hidden fees. Upgrade or cancel anytime.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl p-6 shadow-xl backdrop-blur-sm ${
              plan.popular
                ? "border-2 border-amber-500 bg-zinc-900 ring-2 ring-amber-500/20"
                : "border border-zinc-800 bg-zinc-900/90"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-[0.6rem] font-extrabold tracking-widest uppercase text-zinc-950 shadow-md">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-extrabold tracking-tight text-white">{plan.price}</span>
                <span className="text-xs font-medium text-zinc-400">{plan.period}</span>
              </div>
            </div>

            <div className="mb-8 flex-1 space-y-3 border-t border-zinc-800 pt-6">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckIcon className="size-4 shrink-0 text-green-400" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full font-bold ${
                plan.popular
                  ? "bg-amber-500 text-zinc-950 hover:bg-amber-400 border-none shadow-md shadow-amber-500/20"
                  : "border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
