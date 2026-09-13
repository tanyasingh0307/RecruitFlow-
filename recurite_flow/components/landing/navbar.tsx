import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MicIcon, MenuIcon } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30 p-2 transition-colors group-hover:bg-amber-500/20">
            <MicIcon className="size-4 text-amber-400" />
          </span>
          <span className="font-heading text-lg font-bold tracking-wide text-white uppercase">
            RecruitFlow
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase text-zinc-300 transition-colors hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="#pricing" className="hidden md:inline-flex">
            <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 hover:text-white">
              Sign In
            </Button>
          </Link>
          <Link href="#pricing">
            <Button size="sm" className="bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 border-none shadow-md shadow-amber-500/20">
              Get Started Free
            </Button>
          </Link>
          <button className="flex items-center justify-center rounded-lg border border-zinc-800 p-2 text-zinc-300 md:hidden hover:bg-zinc-900">
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
