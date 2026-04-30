'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Menu, Sparkles, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal, StaggerContainer, StaggerItem, FadeIn } from '@/components/motion-wrapper'

const navigation = [
  { label: 'Overview', href: '#overview' },
  { label: 'Industries', href: '#industries' },
  { label: 'Featured Work', href: '#featured-work' },
  { label: 'Impact', href: '#impact' },
]

const filters = [
  'All',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Technology',
]

const headerStats = [
  { value: '100+', label: 'Programs delivered' },
  { value: 'GH₵2500', label: 'Business value created' },
  { value: '50+', label: 'Countries supported' },
]

const projects = [
  {
    title: 'Global Banking Digital Transformation',
    industry: 'Financial Services',
    description:
      'Complete digital overhaul of legacy banking systems for a major international bank.',
    results: [
      '40% improvement in operational efficiency',
      '99.99% system uptime achieved',
      '3x increase in digital customer adoption',
      'GH₵2500 in cost optimization',
    ],
    services: ['Cloud Migration', 'Digital Transformation', 'Consulting'],
  },
  {
    title: 'Healthcare Provider Cloud Migration',
    industry: 'Healthcare',
    description:
      'Zero-downtime migration of critical patient data systems to secure cloud infrastructure.',
    results: [
      'Zero downtime achieved',
      '30% cost reduction',
      'HIPAA compliance maintained',
      'Enhanced disaster recovery capabilities',
    ],
    services: ['Cloud Infrastructure', 'Security & Compliance'],
  },
  {
    title: 'E-Commerce Platform Scaling',
    industry: 'Retail',
    description:
      'Modernized e-commerce platform to handle exponential growth and traffic spikes.',
    results: [
      'Handled 10x traffic increase',
      '98% page load time improvement',
      'Seamless holiday season scaling',
      '25% increase in conversion rates',
    ],
    services: ['Cloud Infrastructure', 'DevOps & Automation'],
  },
  {
    title: 'Manufacturing IoT Implementation',
    industry: 'Manufacturing',
    description:
      'Connected thousands of devices with real-time monitoring and analytics platform.',
    results: [
      '25% reduction in production waste',
      'Real-time equipment monitoring',
      'Predictive maintenance implementation',
      '15% increase in efficiency',
    ],
    services: ['Digital Transformation', 'Data Analytics'],
  },
  {
    title: 'Insurance Company Digital Modernization',
    industry: 'Financial Services',
    description:
      'Modernization of legacy insurance processing systems with microservices architecture.',
    results: [
      'Claims processing time reduced by 50%',
      'Improved customer experience with mobile app',
      '35% reduction in IT operational costs',
      'Enabled new insurance product offerings',
    ],
    services: ['Digital Transformation', 'Consulting'],
  },
  {
    title: 'Retail Chain Data Analytics Platform',
    industry: 'Retail',
    description:
      'Built comprehensive data analytics platform for inventory and customer insights.',
    results: [
      'Inventory optimization achieved',
      'Reduced stockouts by 40%',
      'Customer insights improved targeting',
      '20% improvement in margins',
    ],
    services: ['Data Analytics', 'Cloud Infrastructure'],
  },
]

const impactStats = [
  { stat: '100+', label: 'Projects Delivered' },
  { stat: 'GH₵2500', label: 'Value Created' },
  { stat: '50+', label: 'Countries Served' },
  { stat: '98%', label: 'Client Retention' },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.industry === activeFilter)

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7fbfb_0%,#ffffff_34%,#f7fbfb_68%,#f9fbfd_100%)] text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] opacity-50" />
        <div className="absolute -left-32 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(2,141,163,0.16)_0%,rgba(2,141,163,0)_72%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.1)_0%,rgba(15,23,42,0)_76%)] blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,rgba(6,182,212,0)_74%)] blur-3xl" />
      </div>

     

      {/* Hero Section */}
      <section
        id="overview"
        className="scroll-mt-28 border-b border-border/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up" className="rounded-[32px] border border-white/80 bg-white/54 p-8 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
               
                <span className="text-sm text-muted-foreground">
                  Strategy, delivery, and measurable results at enterprise scale.
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight text-foreground md:text-6xl">
                A portfolio shaped by decisive outcomes, not just launches.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Explore how ECKINTOSH helps leadership teams modernize platforms,
                simplify operations, and create durable business value across
                regulated, high-growth, and complex global environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#featured-work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(37,99,235,0.22)] transition hover:bg-secondary"
                >
                  Explore featured work
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                >
                  Talk to our team
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {headerStats.map((item, idx) => (
                <FadeIn key={item.label} delay={0.2 + idx * 0.1}>
                  <div
                    className="rounded-2xl border border-white/85 bg-white/78 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <div className="text-3xl font-bold text-primary">{item.value}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section
        id="industries"
        className="scroll-mt-28 border-b border-border/60 bg-white/42 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-8"
      >
        <FadeIn direction="none" delay={0.3}>
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:bg-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Portfolio Grid */}
      <section id="featured-work" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem
                key={project.title}
                className="overflow-hidden rounded-[28px] border border-white/85 bg-white/72 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.09)]"
              >
                <div className="flex h-36 items-end border-b border-border/60 bg-[radial-gradient(circle_at_top_left,rgba(2,141,163,0.22),transparent_52%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(241,245,249,0.82))] p-6">
                  <div className="text-foreground">
                    <div className="text-sm font-semibold text-primary/80">{project.industry}</div>
                    <div className="text-2xl font-bold mt-2">{project.title}</div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-start gap-3 text-sm text-foreground">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/case-studies"
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-secondary transition font-semibold flex items-center justify-center gap-2"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found for the selected industry.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="border-y border-border/60 bg-white/34 py-20 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Looking for Similar Success?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s discuss how we can apply our proven methodologies to your business challenges.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold gap-2"
          >
            Schedule Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Impact Across Industries</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/85 bg-white/70 p-8 text-center shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60 bg-[radial-gradient(circle_at_top,rgba(2,141,163,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(240,249,255,0.94))] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team of experts is ready to help you achieve transformative results.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:bg-secondary"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  )
}
