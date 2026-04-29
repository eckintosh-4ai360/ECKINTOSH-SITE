'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FolderKanban,
  House,
  Menu,
  MessageSquare,
  X,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type NavigationItem = {
  icon: LucideIcon
  label: string
  href: string
}

const navigation: NavigationItem[] = [
  { icon: House, label: 'Home', href: '/' },
  { icon: BriefcaseBusiness, label: 'Services', href: '/#services' },
  { icon: Building2, label: 'About', href: '/about' },
  { icon: FolderKanban, label: 'Work', href: '/portfolio' },
  { icon: MessageSquare, label: 'Contact', href: '/contact' },
]

type SiteHeaderProps = {
  ctaHref?: string
  ctaLabel?: string
}

export function SiteHeader({
  ctaHref = '/schedule-consultation',
  ctaLabel = 'Book a call',
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 rounded-[30px] border border-border/80 bg-white/88 px-3 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-[24px] px-2 py-1.5 transition hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="ECKINTOSH Logo"
              width={90}
              height={90}
              className="object-cover"
            />
          </Link>

          <div className="hidden flex-1 justify-center px-4 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-[linear-gradient(180deg,_rgba(248,250,252,0.96),_rgba(255,255,255,0.92))] p-2 shadow-inner">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-full px-4 py-2.5 transition hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon size={16} />
                  </span>
                  <span className="text-sm font-semibold text-slate-700 transition group-hover:text-primary">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 xl:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </div>
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition hover:bg-secondary"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/85 text-foreground shadow-sm transition hover:border-primary/30 hover:text-primary lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 rounded-[28px] border border-border/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.1)] lg:hidden">
            
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 px-4 py-3 transition hover:border-primary/30 hover:bg-primary/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </Link>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
