import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    quote:
      "RecruitFlow transformed our high-volume hiring. We imported 300 candidates on Monday and had 40 pre-screened interviews on our calendars by Tuesday morning.",
    author: "Elena Rostova",
    role: "Head of Talent Acquisition",
    company: "TechScale Global",
    avatar: "ER",
  },
  {
    quote:
      "Candidates actually comment on how natural the voice agent sounds! It asks intelligent follow-ups and saves our team over 25 hours every single week.",
    author: "Marcus Vance",
    role: "Lead Technical Recruiter",
    company: "CloudCore Systems",
    avatar: "MV",
  },
  {
    quote:
      "The automatic screening transcripts and candidate scoring reports are phenomenal. We catch top talent in hours instead of letting candidates sit for weeks.",
    author: "Priya Sharma",
    role: "VP of People Operations",
    company: "Nexus Digital",
    avatar: "PS",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-zinc-950 py-28 px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-amber-400">
          Testimonials
        </p>
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Loved by Talent Leaders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          See how recruiting teams scale screening with RecruitFlow.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.author} className="border-zinc-800 bg-zinc-900/90 shadow-lg backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <CardDescription className="text-xs leading-relaxed text-zinc-200 italic">
                &ldquo;{t.quote}&rdquo;
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex items-center gap-3 border-t border-zinc-800 pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-300 ring-1 ring-amber-500/30">
                  {t.avatar}
                </span>
                <div>
                  <p className="text-xs font-bold text-white">{t.author}</p>
                  <p className="text-[0.65rem] text-zinc-400">
                    {t.role} · <span className="text-amber-400 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
