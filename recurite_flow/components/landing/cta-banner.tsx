import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 px-6 text-center">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-12 shadow-2xl">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Ready to Automate Candidate Screening?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          Join hundreds of innovative recruiting teams using RecruitFlow to interview candidates faster and book top talent automatically.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="#pricing">
            <Button size="lg" className="gap-2 px-8 bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 border-none shadow-lg shadow-amber-500/20">
              Start Screening Free
              <ArrowRightIcon className="size-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
