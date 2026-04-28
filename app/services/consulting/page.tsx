'use client'

import { ArrowRight, Check, Briefcase, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Consulting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">ECKINTOSH</Link>
            <Link href="/" className="text-primary hover:text-secondary transition">← Back</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Enterprise <span className="text-primary">Consulting</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Strategic guidance from industry experts with deep experience transforming enterprises across multiple sectors.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold flex items-center gap-2">
            Schedule Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Consulting Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Technology Strategy',
                description: 'Develop comprehensive technology strategies aligned with your business objectives.',
                features: ['Technology roadmap planning', 'Architecture assessment', 'Investment prioritization', 'Risk management']
              },
              {
                title: 'IT Operations',
                description: 'Optimize your IT operations for efficiency, reliability, and cost-effectiveness.',
                features: ['Service desk transformation', 'ITSM framework implementation', 'SLA optimization', 'Cost reduction']
              },
              {
                title: 'Cybersecurity',
                description: 'Comprehensive cybersecurity consulting to protect your critical assets.',
                features: ['Security assessments', 'Risk management', 'Incident response', 'Compliance consulting']
              },
              {
                title: 'Innovation Consulting',
                description: 'Drive innovation through emerging technologies and business model transformation.',
                features: ['AI/ML strategy', 'IoT implementation', 'Blockchain evaluation', 'Digital products']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-foreground">
                      <Check className="text-primary" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="text-primary" size={32} />,
                title: 'Certified Experts',
                description: 'Team of industry-certified consultants with diverse sector experience.'
              },
              {
                icon: <Target className="text-primary" size={32} />,
                title: 'Business Focused',
                description: 'Solutions driven by business objectives, not technology for its own sake.'
              },
              {
                icon: <TrendingUp className="text-primary" size={32} />,
                title: 'Proven Track Record',
                description: 'Demonstrated results across Fortune 500 companies and emerging enterprises.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Case Study</h2>
          <div className="bg-card border border-border rounded-xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise Technology Strategy Development</h3>
                <p className="text-muted-foreground mb-6">
                  A large manufacturing company needed guidance on their technology investments to support growth while managing legacy systems.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Challenge</div>
                    <p className="text-foreground">Unclear technology direction, competing priorities, legacy system burden</p>
                  </div>
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Solution</div>
                    <p className="text-foreground">Comprehensive technology strategy assessment and 5-year roadmap with prioritized initiatives</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">50M+</div>
                      <p className="text-blue-100">Technology Investment Optimized</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">35%</div>
                      <p className="text-blue-100">Cost Reduction Identified</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">8 Weeks</div>
                      <p className="text-blue-100">Strategy Development Timeline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get Expert Guidance for Your Enterprise</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our consultants are ready to help you navigate complex technology decisions and achieve your business goals.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Book a Consulting Session
          </button>
        </div>
      </section>
    </div>
  )
}
