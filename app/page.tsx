'use client'

import {
  ArrowRight,
  BarChart3,
  Check,
  BriefcaseBusiness,
  Cloud,
  Cog,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  ImageIcon,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { HeroCarousel } from '@/components/hero-carousel'

type RecentProject = {
  title: string
  industry: string
  visualLabel: string
  icon: LucideIcon
  accent: string
  imageSrc?: string
  featured?: boolean
}

const sharedRecentProjectImage = '/umat.jpeg'

const recentProjects: RecentProject[] = [
  {
    title: 'Global Banking Digital Transformation',
    industry: 'Financial Services',
    visualLabel: 'Global operations command center',
    icon: Landmark,
    accent: 'from-slate-950 via-primary to-cyan-500',
    imageSrc: sharedRecentProjectImage,
    featured: true,
  },
  {
    title: 'Cloud Migration for Healthcare Provider',
    industry: 'Healthcare',
    visualLabel: 'Clinical systems experience',
    icon: HeartPulse,
    accent: 'from-cyan-950 via-sky-700 to-teal-400',
    imageSrc: sharedRecentProjectImage,
  },
  {
    title: 'E-Commerce Platform Scaling',
    industry: 'Retail',
    visualLabel: 'High-volume storefront preview',
    icon: ShoppingBag,
    accent: 'from-fuchsia-950 via-violet-700 to-amber-300',
    imageSrc: sharedRecentProjectImage,
  },
  {
    title: 'Manufacturing IoT Implementation',
    industry: 'Manufacturing',
    visualLabel: 'Connected plant intelligence',
    icon: Factory,
    accent: 'from-slate-900 via-emerald-700 to-lime-400',
    imageSrc: sharedRecentProjectImage,
  },
]

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('/mainbg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-3xl font-semi-bold text-primary  mb-2">
                We Transform with
              </h1>
               <span className="text-6xl md:text-6xl font-bold text-foreground uppercase ">Technology</span>
              <p className="text-xl text-muted-foreground font-normal mb-8 leading-relaxed">
                ECKINTOSH delivers cutting-edge consulting, cloud infrastructure, and digital transformation services to drive innovation and growth across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/schedule-consultation" className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition font-semibold flex items-center justify-center gap-2 text-lg">
                  Schedule Consultation <ArrowRight size={20} />
                </Link>
                <Link href="/case-studies" className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold text-lg text-center">
                  View Case Studies
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Trusted by 100+ enterprises worldwide • Industry-leading expertise • 24/7 support
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive technology solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Infrastructure',
                description: 'Scalable, secure, and cost-efficient cloud solutions built on industry-leading platforms.',
                icon: Cloud,
                href: '/services/cloud-infrastructure'
              },
              {
                title: 'Digital Transformation',
                description: 'Modernize your operations and accelerate digital adoption across your organization.',
                icon: RefreshCw,
                href: '/services/digital-transformation'
              },
              {
                title: 'Enterprise Consulting',
                description: 'Strategic guidance and expert consulting to optimize your technology investments.',
                icon: BriefcaseBusiness,
                href: '/services/consulting'
              },
              {
                title: 'Security & Compliance',
                description: 'Comprehensive security solutions ensuring your data is protected and compliant.',
                icon: ShieldCheck,
                href: '/services/security-compliance'
              },
              {
                title: 'Data Analytics',
                description: 'Transform raw data into actionable insights to drive better business decisions.',
                icon: BarChart3,
                href: '/services/data-analytics'
              },
              {
                title: 'DevOps & Automation',
                description: 'Streamline your development pipeline with modern DevOps practices and automation.',
                icon: Cog,
                href: '/services/devops-automation'
              }
            ].map((service, idx) => {
              const ServiceIcon = service.icon

              return (
                <div key={idx} className="group overflow-hidden rounded-xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-lg">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/umat.jpeg"
                      alt={`${service.title} service preview`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-primary shadow-lg backdrop-blur-sm">
                      <ServiceIcon size={28} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href={service.href} className="text-primary font-semibold hover:gap-2 flex items-center gap-1 group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[url('/umat.jpeg')] bg-cover bg-center rounded-2xl h-96 flex items-center justify-center">    
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About <span className='text-primary'>ECKINTOSH</span></h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                For over 15 years, ECKINTOSH has been at the forefront of enterprise technology innovation. Our team of certified experts brings deep industry knowledge and proven methodologies to every engagement.
              </p>
              <div className="space-y-4">
                {[
                  'Industry-leading expertise and certifications',
                  'Proven track record with Fortune 500 companies',
                  'Agile and responsive to your business needs',
                  'Committed to long-term partnership and success'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-primary" size={20} />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="overflow-hidden border-y border-border/60 bg-foreground py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary ">
                <h2 className='text-4xl font-bold'>Recent Projects</h2>
              </span>
            </div>
            
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {recentProjects.map((project) => {
              const ProjectIcon = project.icon
              return (
                <article
                  key={project.title}
                  className="group isolate overflow-hidden rounded-sm border border-border/70 bg-white/88 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
                >
                  <div className="grid">
                    <div className="relative min-w-0 overflow-hidden">
                      <div className="relative aspect-[16/11] w-full overflow-hidden">
                        {project.imageSrc ? (
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <>
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_32%,rgba(15,23,42,0.26))]" />
                            <div className="absolute right-6 top-6 h-28 w-40 rounded-[26px] border border-white/20 bg-white/12 backdrop-blur-md" />
                            <div className="absolute left-8 top-14 h-28 w-28 rounded-full bg-white/14 blur-2xl" />
                            <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                                <ImageIcon size={13} />
                                Project Preview
                              </span>
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur">
                                <ProjectIcon size={22} />
                              </div>
                            </div>
                            <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/15 bg-black/15 p-5 backdrop-blur-md">
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                                {project.industry}
                              </p>
                              <p className="mt-2 text-2xl font-semibold text-white">
                                {project.visualLabel}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 min-w-0 flex flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                            {project.industry}
                          </p>
                          <h3 className="mt-2 text-xl font-bold text-foreground sm:text-[1rem]">
                            {project.title}
                          </h3>
                        </div>
                        <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:flex">
                          <ProjectIcon size={20} />
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/case-studies"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                        >
                          Explore case study details
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let&apos;s discuss how ECKINTOSH can help you achieve your technology goals and drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-lg border text-foreground focus:outline-none focus:ring-2 focus:ring-white flex-1 sm:max-w-xs"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg">
              Schedule Call
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Get a response within 2 business hours • No commitment required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-2">ECKINTOSH</h4>
              <p className="text-sm opacity-75">Engineering Digital Solutions</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="text-sm space-y-2 opacity-75">
                <li><a href="#services" className="hover:opacity-100">Cloud Infrastructure</a></li>
                <li><a href="#services" className="hover:opacity-100">Digital Transformation</a></li>
                <li><a href="#services" className="hover:opacity-100">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-sm space-y-2 opacity-75">
                <li><a href="#about" className="hover:opacity-100">About</a></li>
                <li><a href="#portfolio" className="hover:opacity-100">Portfolio</a></li>
                <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-sm space-y-2 opacity-75">
                <li><Link href="/privacy-policy" className="hover:opacity-100">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:opacity-100">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:opacity-100">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2022 ECKINTOSH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
