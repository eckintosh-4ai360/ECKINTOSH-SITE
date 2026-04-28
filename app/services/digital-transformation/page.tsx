'use client'

import { ArrowRight, Check, Lightbulb, Users, Gauge } from 'lucide-react'
import Link from 'next/link'

export default function DigitalTransformation() {
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
            Digital <span className="text-primary">Transformation</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Reimagine your business processes and customer experiences through strategic technology adoption and organizational change management.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold flex items-center gap-2">
            Schedule Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strategy & Assessment',
                description: 'Comprehensive evaluation of your current state and roadmap for digital maturity.',
                features: ['Digital maturity assessment', 'Competitive analysis', 'Technology roadmap', 'Business case development']
              },
              {
                title: 'Process Modernization',
                description: 'Reimagine and optimize business processes leveraging automation and digital tools.',
                features: ['Process mapping', 'Workflow automation', 'Business intelligence', 'Performance metrics']
              },
              {
                title: 'Change Management',
                description: 'Ensure successful adoption through organizational change management and training programs.',
                features: ['Change strategy', 'Training programs', 'Stakeholder engagement', 'Impact measurement']
              },
              {
                title: 'Technology Implementation',
                description: 'Deploy modern platforms and solutions that enable digital capabilities.',
                features: ['ERP implementation', 'CRM systems', 'Analytics platforms', 'Integration services']
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
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="text-primary" size={32} />,
                title: 'Innovation Focus',
                description: 'Stay ahead with emerging technologies and industry best practices.'
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: 'People First',
                description: 'Success requires organizational alignment and stakeholder buy-in.'
              },
              {
                icon: <Gauge className="text-primary" size={32} />,
                title: 'Measurable Results',
                description: 'Drive quantifiable business outcomes and ROI from digital investments.'
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Banking Sector Digital Overhaul</h3>
                <p className="text-muted-foreground mb-6">
                  A regional bank needed to modernize their operations to compete with digital-first competitors while maintaining regulatory compliance.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Challenge</div>
                    <p className="text-foreground">Legacy systems, traditional customer experience, high operational costs</p>
                  </div>
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Solution</div>
                    <p className="text-foreground">Complete digital transformation with cloud migration, modern CRM, mobile banking platform</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">40%</div>
                      <p className="text-blue-100">Operational Efficiency Gain</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">3x</div>
                      <p className="text-blue-100">Digital Customer Growth</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">12 Months</div>
                      <p className="text-blue-100">Full Transformation Timeline</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Digital Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s create a comprehensive digital transformation strategy tailored to your business.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Start Your Assessment
          </button>
        </div>
      </section>
    </div>
  )
}
