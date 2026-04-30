'use client'

import { useState } from 'react'
import { ArrowRight, Filter, TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const sharedCaseStudyImage = '/umat.jpeg'

  const caseStudies = [
    {
      id: 1,
      title: 'Global Banking Digital Transformation',
      industry: 'Financial Services',
      client: 'International Banking Corporation',
      year: 2023,
      duration: '18 months',
      teamSize: '45 engineers',
      image: sharedCaseStudyImage,
      overview: 'Complete digital overhaul of legacy banking systems serving 50+ million customers across 30 countries.',
      challenge: 'The client was operating on systems built in the 1990s, struggling with aging infrastructure, manual processes, and inability to compete with fintech startups. They needed a complete digital transformation without disrupting service to millions of customers.',
      solution: 'We implemented a phased cloud migration strategy, modernizing core banking systems using microservices architecture. Implemented advanced security protocols, regulatory compliance frameworks, and built a modern customer-facing platform.',
      results: [
        { metric: '40%', description: 'Improvement in operational efficiency' },
        { metric: '99.99%', description: 'System uptime achieved' },
        { metric: '3x', description: 'Increase in digital customer adoption' },
        { metric: '$50M', description: 'Cost optimization realized' }
      ],
      services: ['Cloud Migration', 'Digital Transformation', 'Enterprise Consulting', 'Security & Compliance'],
      technologies: ['AWS', 'Kubernetes', 'Microservices', 'PostgreSQL', 'React'],
      testimonial: {
        quote: "ECKINTOSH didn't just migrate our systems—they transformed how we operate. Our customers now enjoy modern digital banking, and our teams are 40% more productive.",
        author: 'David Thompson',
        title: 'CTO, International Banking Corporation'
      }
    },
    {
      id: 2,
      title: 'Healthcare Provider Cloud Migration',
      industry: 'Healthcare',
      client: 'National Health Systems Inc',
      year: 2023,
      duration: '12 months',
      teamSize: '32 engineers',
      image: sharedCaseStudyImage,
      overview: 'Zero-downtime migration of critical patient data systems serving 5 million patients to secure, HIPAA-compliant cloud infrastructure.',
      challenge: 'Critical healthcare systems operating on-premise with limited scalability. Patient records system handling 10,000 concurrent users needed to move to cloud while maintaining HIPAA compliance and achieving zero downtime.',
      solution: 'Implemented an innovative dual-infrastructure approach ensuring seamless transition. Built comprehensive disaster recovery, backup, and compliance monitoring. Trained staff on new systems with minimal disruption to patient care.',
      results: [
        { metric: 'Zero', description: 'Downtime achieved' },
        { metric: '30%', description: 'Cost reduction annually' },
        { metric: '100%', description: 'HIPAA compliance maintained' },
        { metric: '50%', description: 'Faster disaster recovery' }
      ],
      services: ['Cloud Infrastructure', 'Security & Compliance', 'Data Migration'],
      technologies: ['AWS', 'Encryption', 'HIPAA Compliance', 'Disaster Recovery', 'Monitoring'],
      testimonial: {
        quote: 'The migration was flawless. Our patient care systems never skipped a beat. ECKINTOSH truly understands healthcare compliance requirements.',
        author: 'Dr. Jennifer Lee',
        title: 'Chief Medical Officer, National Health Systems'
      }
    },
    {
      id: 3,
      title: 'E-Commerce Platform Scaling',
      industry: 'Retail',
      client: 'Premium Retail Group',
      year: 2022,
      duration: '9 months',
      teamSize: '28 engineers',
      image: sharedCaseStudyImage,
      overview: 'Modernized e-commerce platform to handle exponential growth, supporting peak traffic of 1M+ concurrent users during holiday season.',
      challenge: 'Rapid business growth caused platform instability and poor customer experience. Black Friday/Cyber Monday traffic caused crashes. Needed to handle 10x growth while improving customer experience and conversion rates.',
      solution: 'Architected highly scalable microservices infrastructure using containerization and orchestration. Implemented advanced caching strategies, CDN optimization, and database sharding. Rebuilt frontend for better performance and user experience.',
      results: [
        { metric: '10x', description: 'Traffic increase handled seamlessly' },
        { metric: '98%', description: 'Page load time improvement' },
        { metric: '25%', description: 'Increase in conversion rates' },
        { metric: '99.95%', description: 'Uptime during peak season' }
      ],
      services: ['Cloud Infrastructure', 'DevOps & Automation', 'Performance Optimization'],
      technologies: ['Kubernetes', 'Redis', 'Elasticsearch', 'React', 'Node.js'],
      testimonial: {
        quote: 'This year\'s Black Friday was our best ever. The platform handled incredible traffic without a hiccup. Conversions are up 25%.',
        author: 'Sarah Martinez',
        title: 'VP E-Commerce, Premium Retail Group'
      }
    },
    {
      id: 4,
      title: 'Manufacturing IoT Implementation',
      industry: 'Manufacturing',
      client: 'Global Manufacturing Solutions',
      year: 2023,
      duration: '15 months',
      teamSize: '35 engineers',
      image: sharedCaseStudyImage,
      overview: 'Connected 50,000+ IoT devices across 12 manufacturing facilities with real-time monitoring and predictive analytics platform.',
      challenge: 'Traditional manufacturing operated with manual monitoring and reactive maintenance. Needed to implement Industry 4.0 practices: real-time monitoring, predictive maintenance, and production optimization across global facilities.',
      solution: 'Built comprehensive IoT platform with real-time data ingestion from 50K+ devices. Implemented machine learning for predictive maintenance. Created dashboards providing production insights and optimization recommendations.',
      results: [
        { metric: '25%', description: 'Reduction in production waste' },
        { metric: '15%', description: 'Increase in overall efficiency' },
        { metric: '40%', description: 'Reduction in maintenance costs' },
        { metric: '99.5%', description: 'Asset uptime improved' }
      ],
      services: ['IoT Solutions', 'Data Analytics', 'Cloud Infrastructure'],
      technologies: ['AWS IoT', 'Apache Kafka', 'Machine Learning', 'Python', 'Real-time Analytics'],
      testimonial: {
        quote: 'The IoT platform has completely transformed our operations. Predictive maintenance alone has saved us millions in downtime.',
        author: 'Klaus Schmidt',
        title: 'Operations Director, Global Manufacturing'
      }
    },
    {
      id: 5,
      title: 'Insurance Digital Modernization',
      industry: 'Financial Services',
      client: 'Continental Insurance Group',
      year: 2022,
      duration: '20 months',
      teamSize: '42 engineers',
      image: sharedCaseStudyImage,
      overview: 'Modernization of legacy insurance processing systems with microservices architecture and modern digital-first customer experience.',
      challenge: 'Legacy insurance systems from the 1980s could not support modern customer expectations or new product lines. Claims processing took weeks. Needed to enable rapid product innovation while maintaining backward compatibility.',
      solution: 'Implemented strangler pattern migration, gradually replacing legacy systems. Built modern claims processing engine with workflow automation. Created mobile-first customer portal and agent tools.',
      results: [
        { metric: '50%', description: 'Claims processing time reduced' },
        { metric: '35%', description: 'IT operational costs reduced' },
        { metric: '5', description: 'New products launched quickly' },
        { metric: '42%', description: 'Customer satisfaction increase' }
      ],
      services: ['Digital Transformation', 'Consulting', 'Cloud Infrastructure'],
      technologies: ['Microservices', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka'],
      testimonial: {
        quote: 'We went from processing claims in weeks to days. The new platform is lightning fast, and we can now launch new products in months, not years.',
        author: 'Patricia Johnson',
        title: 'CEO, Continental Insurance Group'
      }
    },
    {
      id: 6,
      title: 'Retail Analytics Platform',
      industry: 'Retail',
      client: 'National Retail Chain',
      year: 2023,
      duration: '8 months',
      teamSize: '22 engineers',
      image: sharedCaseStudyImage,
      overview: 'Built comprehensive data analytics platform providing inventory optimization and customer insights across 500+ retail locations.',
      challenge: 'With 500+ locations generating massive amounts of data, the company lacked visibility into inventory patterns and customer behavior. Stockouts hurt revenue while overstock tied up capital.',
      solution: 'Built end-to-end analytics platform collecting data from all locations in real-time. Implemented ML models for demand forecasting and inventory optimization. Created intuitive dashboards for store managers.',
      results: [
        { metric: '40%', description: 'Reduction in stockouts' },
        { metric: '20%', description: 'Improvement in margins' },
        { metric: '25%', description: 'Better inventory turns' },
        { metric: '18%', description: 'Sales increase per location' }
      ],
      services: ['Data Analytics', 'Cloud Infrastructure', 'Machine Learning'],
      technologies: ['Snowflake', 'Python', 'Tableau', 'Apache Spark', 'Real-time Processing'],
      testimonial: {
        quote: 'The analytics platform gives our store managers visibility they never had before. Inventory is optimized, sales are up, and margins have improved significantly.',
        author: 'Robert Williams',
        title: 'VP Supply Chain, National Retail Chain'
      }
    }
  ]

  const filteredStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

  const industries = ['all', ...new Set(caseStudies.map(s => s.industry))]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <SiteHeader /> */}

      {/* Navigation */}
      <nav className="hidden sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">ECKINTOSH</Link>
            <Link href="/" className="text-primary hover:text-secondary transition">← Back</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-background to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
            <TrendingUp size={16} />
            Proven Success Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Enterprise <span className="text-primary">Transformation</span> Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            See how we&apos;ve helped leading organizations across industries achieve transformative results through strategic technology initiatives.
          </p>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="sticky top-36 z-40 border-b border-border bg-white/95 py-12 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-primary" />
            <span className="font-semibold text-foreground">Filter by Industry:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition capitalize ${
                  selectedIndustry === industry
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {filteredStudies.map((study, idx) => (
              <div key={study.id} className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative min-h-[320px] overflow-hidden p-12 text-white md:col-span-1">
                    <Image
                      src={study.image}
                      alt={`${study.title} case study background`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.26),rgba(15,23,42,0.82))]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="mb-3 text-sm font-semibold opacity-75">{study.industry}</div>
                        <h3 className="mb-4 text-2xl font-bold">{study.title}</h3>
                        <p className="text-sm opacity-90">{study.client}</p>
                      </div>
                      <div className="space-y-3 border-t border-white/20 pt-8">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users size={16} />
                          <span>{study.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:col-span-2">
                    <h4 className="text-lg font-bold text-primary mb-3">Overview</h4>
                    <p className="text-muted-foreground mb-6">{study.overview}</p>

                    <h4 className="text-lg font-bold text-primary mb-3">Challenge</h4>
                    <p className="text-muted-foreground mb-6">{study.challenge}</p>

                    <h4 className="text-lg font-bold text-primary mb-3">Solution</h4>
                    <p className="text-muted-foreground mb-6">{study.solution}</p>

                    {/* Results Grid */}
                    <h4 className="text-lg font-bold text-primary mb-4">Key Results</h4>
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                      {study.results.map((result, ridx) => (
                        <div key={ridx} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Services & Technologies */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-primary" />
                          Services Delivered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, sidx) => (
                            <span
                              key={sidx}
                              className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, tidx) => (
                            <span
                              key={tidx}
                              className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-card border border-border rounded-xl p-6 mb-6">
                      <p className="text-foreground italic mb-4">&quot;{study.testimonial.quote}&quot;</p>
                      <div>
                        <p className="font-bold text-foreground">{study.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{study.testimonial.title}</p>
                      </div>
                    </div>

                    <Link
                      href="/schedule-consultation"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition font-semibold"
                    >
                      Similar Project? Let&apos;s Talk <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '100+', label: 'Projects Delivered' },
              { stat: 'GH₵2500', label: 'Value Created' },
              { stat: '50+', label: 'Countries Served' },
              { stat: '98%', label: 'Client Retention' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Achieve Transformative Results?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can apply our proven methodologies to your business.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Schedule Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
