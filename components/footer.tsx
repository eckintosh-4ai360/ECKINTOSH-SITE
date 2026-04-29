import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const companyLinks = [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ]
  const serviceLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/services/cloud-infrastructure', label: 'Cloud Infrastructure' },
    { href: '/services/digital-transformation', label: 'Digital Transformation' },
    { href: '/services/consulting', label: 'Enterprise Consulting' },
  ]
  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookies Policy' },
  ]

  return (
    <footer className="border-t border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(255,255,255,1)_40%,rgba(248,250,252,0.88))]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.8fr))]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 rounded-[26px] border border-border/80 bg-white/90 px-3 py-2 shadow-sm transition hover:border-primary/20 hover:shadow-md">
              <Image
                src="/logo.png"
                alt="ECKINTOSH logo"
                width={56}
                height={56}
                className="rounded-2xl border border-border/70 bg-white object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  ECKINTOSH
                </p>
                <p className="text-sm font-medium text-slate-700">
                  Enterprise technology solutions
                </p>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Strategy, infrastructure, security, and delivery support for teams
              scaling ambitious digital programs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Cloud', 'Security', 'Analytics', 'DevOps'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Legal & Contact</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@eckintosh.com"
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  hello@eckintosh.com
                </a>
              </li>
              <li>
                <Link href="/schedule-consultation" className="text-sm font-semibold text-primary transition hover:text-secondary">
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} ECKINTOSH. All rights reserved.</p>
          <p>Built for modern enterprise teams that need momentum, clarity, and durable systems.</p>
        </div>
      </div>
    </footer>
  )
}
