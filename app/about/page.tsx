'use client'

import { ArrowRight, Check, Award, Users, Globe, Target } from 'lucide-react'

export default function About() {
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
            About <span className="text-primary">ECKINTOSH</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Pioneering digital transformation since 2009. We&apos;ve helped hundreds of enterprises navigate technology change and achieve their business goals.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                ECKINTOSH was founded with a simple belief: technology should empower businesses, not complicate them. For over 15 years, we&apos;ve remained dedicated to this mission.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                What started as a small consulting firm has grown into a trusted partner for enterprise technology transformation. Our success is built on the success of our clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we work with organizations across finance, healthcare, manufacturing, retail, and technology sectors, helping them leverage technology to achieve competitive advantage.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">15+</div>
                <p className="text-white text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '100+', label: 'Clients Served' },
              { stat: '$500M+', label: 'Technology Invested' },
              { stat: '150+', label: 'Team Members' },
              { stat: '99.9%', label: 'Customer Satisfaction' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower enterprises with transformative technology solutions that drive innovation, efficiency, and growth while creating lasting partnerships built on trust and mutual success.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the most trusted technology partner for enterprises seeking to navigate digital transformation and achieve sustained competitive advantage in their industries.
              </p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="text-primary" size={32} />,
                title: 'Excellence',
                description: 'Commitment to exceptional quality in everything we do'
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: 'Integrity',
                description: 'Honest, transparent relationships with all stakeholders'
              },
              {
                icon: <Globe className="text-primary" size={32} />,
                title: 'Innovation',
                description: 'Continuous learning and embracing emerging technologies'
              },
              {
                icon: <Award className="text-primary" size={32} />,
                title: 'Partnership',
                description: 'Long-term focus on mutual growth and success'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Leadership Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Industry veterans and thought leaders committed to your success
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                title: 'Chief Executive Officer',
                background: 'Former VP Technology at Fortune 500 tech company'
              },
              {
                name: 'Michael Rodriguez',
                title: 'Chief Technology Officer',
                background: '20+ years enterprise architecture and cloud solutions'
              },
              {
                name: 'Jennifer Park',
                title: 'Chief Delivery Officer',
                background: 'Leading transformation programs across multiple sectors'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-border hover:shadow-lg transition">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Clients Choose ECKINTOSH</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Proven expertise across multiple industries and technologies',
              'Dedicated account teams focused on your success',
              'Agile methodologies and flexible engagement models',
              'Commitment to measurable business outcomes',
              ' Available around the clock for critical projects',
              'Investment in continuous training and certifications'
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-foreground text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how ECKINTOSH can be your trusted partner in digital transformation.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}
