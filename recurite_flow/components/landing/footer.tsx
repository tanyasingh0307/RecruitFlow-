import Link from "next/link"
import { MicIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/10 p-1 ring-1 ring-amber-500/30">
            <MicIcon className="size-4 text-amber-400" />
          </span>
          <span className="font-heading text-sm font-bold tracking-wider text-white uppercase">
            RecruitFlow
          </span>
        </div>
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} RecruitFlow Inc. All rights reserved. AI Voice Recruiting Agent Platform.
        </p>
        <div className="flex gap-6 text-xs text-zinc-400">
          <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  )
}
