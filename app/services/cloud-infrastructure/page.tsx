'use client'

import { ArrowRight, Check, Zap, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CloudInfrastructure() {
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
            Cloud <span className="text-primary">Infrastructure</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Build scalable, secure, and cost-efficient cloud solutions that grow with your business. Our multi-cloud expertise spans AWS, Azure, Google Cloud, and beyond.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold flex items-center gap-2">
            Schedule Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cloud Migration',
                description: 'Seamless migration of legacy systems and data to modern cloud platforms with zero or minimal downtime.',
                features: ['Assessment & planning', 'Data migration', 'Testing & validation', 'Rollback planning']
              },
              {
                title: 'Infrastructure as Code',
                description: 'Automated, repeatable cloud infrastructure deployment using industry-standard tools and practices.',
                features: ['Terraform & CloudFormation', 'Version control integration', 'CI/CD pipelines', 'Infrastructure automation']
              },
              {
                title: 'Cloud Optimization',
                description: 'Right-size your cloud resources and reduce costs without sacrificing performance.',
                features: ['Cost analysis', 'Resource optimization', 'Reserved instance strategy', 'Continuous monitoring']
              },
              {
                title: 'Multi-Cloud Management',
                description: 'Manage applications across multiple cloud providers with unified monitoring and governance.',
                features: ['Multi-cloud architecture', 'Workload orchestration', 'Unified dashboards', 'Cost allocation']
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
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Choose ECKINTOSH?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={32} />,
                title: 'Performance',
                description: 'Optimize latency, throughput, and availability with cloud-native architecture patterns.'
              },
              {
                icon: <Globe className="text-primary" size={32} />,
                title: 'Global Reach',
                description: 'Deploy applications closer to your users with multi-region and edge computing strategies.'
              },
              {
                icon: <Shield className="text-primary" size={32} />,
                title: 'Security First',
                description: 'Enterprise-grade security, compliance, and governance across all cloud platforms.'
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Global Tech Company Cloud Transformation</h3>
                <p className="text-muted-foreground mb-6">
                  A Fortune 500 tech company needed to migrate their legacy on-premises infrastructure to the cloud while maintaining 99.99% uptime.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Challenge</div>
                    <p className="text-foreground">Complex legacy systems, regulatory compliance requirements, zero downtime requirement</p>
                  </div>
                  <div>
                    <div className="text-sm text-accent font-semibold mb-1">Solution</div>
                    <p className="text-foreground">Phased multi-region AWS migration with infrastructure as code, automated failover systems</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">99.99%</div>
                      <p className="text-blue-100">Uptime Achieved</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">45%</div>
                      <p className="text-blue-100">Cost Reduction</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">90 Days</div>
                      <p className="text-blue-100">Migration Timeline</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can modernize your cloud architecture and optimize your operations.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Schedule Your Cloud Assessment
          </button>
        </div>
      </section>
    </div>
  )
}
