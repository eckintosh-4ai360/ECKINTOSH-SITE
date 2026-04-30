'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceInterest: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
    

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ready to transform your enterprise? Our team is here to help. Contact us today to discuss your technology goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Phone className="text-primary" size={32} />,
                title: 'Phone',
                details: '+233 (0) 53 115 2121',
                additional: 'Available 24/7 for urgent matters'
              },
              {
                icon: <Mail className="text-primary" size={32} />,
                title: 'Email',
                details: 'eckintosh@gmail.com',
                additional: 'Response within 2 business hours'
              },
              {
                icon: <MapPin className="text-primary" size={32} />,
                title: 'Office',
                details: '123 Tech Street, Mumford, CA',
                additional: 'Multiple locations worldwide'
              }
            ].map((contact, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  {contact.icon}
                  <h3 className="text-2xl font-bold text-foreground">{contact.title}</h3>
                </div>
                <p className="text-foreground font-semibold mb-2">{contact.details}</p>
                <p className="text-muted-foreground text-sm">{contact.additional}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                {submitted && (
                  <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-green-900">Message Sent Successfully!</h3>
                      <p className="text-green-800 text-sm">We&apos;ll be in touch within 2 business hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service...</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="transformation">Digital Transformation</option>
                      <option value="consulting">Enterprise Consulting</option>
                      <option value="security">Security & Compliance</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="devops">DevOps & Automation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or challenge..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-secondary transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    We respect your privacy. Your information will be handled securely.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar - Quick Links */}
            <div>
              <div className="bg-card border border-border rounded-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-6">Need Help?</h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-accent font-semibold mb-1">Response Time</p>
                    <p className="text-foreground">2 business hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-semibold mb-1">Availability</p>
                    <p className="text-foreground">24/7 for emergencies</p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-semibold mb-1">Support</p>
                    <p className="text-foreground">Phone, email, chat</p>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/cloud-infrastructure" className="text-primary hover:text-secondary transition text-sm">
                        Cloud Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digital-transformation" className="text-primary hover:text-secondary transition text-sm">
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/consulting" className="text-primary hover:text-secondary transition text-sm">
                        Consulting Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio" className="text-primary hover:text-secondary transition text-sm">
                        View Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-primary hover:text-secondary transition text-sm">
                        Read Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                city: 'Mumford',
                region: 'Headquarters',
                address: '123 Tech Street, Mumford, CA 94102'
              },
              {
                city: 'New York',
                region: 'East Coast',
                address: '456 Enterprise Ave, New York, NY 10001'
              },
              {
                city: 'London',
                region: 'Europe',
                address: '789 Innovation Road, London, UK W1A 1AA'
              },
              {
                city: 'Singapore',
                region: 'Asia Pacific',
                address: '321 Digital Way, Singapore 048934'
              }
            ].map((location, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{location.city}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{location.region}</p>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'How long does an initial consultation take?',
                answer: 'Most initial consultations take 30-45 minutes. This gives us time to understand your needs and discuss potential solutions. There&apos;s no obligation, and we always provide specific next steps.'
              },
              {
                question: 'Do you offer free assessments?',
                answer: 'Yes, we offer complimentary technology assessments for enterprise clients. This helps us understand your current state and develop a tailored roadmap for your organization.'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. We work with you to develop realistic schedules and maintain regular communication throughout implementation.'
              },
              {
                question: 'How do you ensure security and compliance?',
                answer: 'Security and compliance are built into every engagement. We follow industry best practices, maintain appropriate certifications, and work within your regulatory requirements.'
              },
              {
                question: 'What industries do you serve?',
                answer: 'We have expertise across financial services, healthcare, manufacturing, retail, technology, and many other sectors. Our team brings specialized knowledge to your industry.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Absolutely. We offer various support models including managed services, staff augmentation, and ongoing advisory to ensure your solutions continue to deliver value.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help. Choose the best way to reach us above or schedule a call.
          </p>
          <Link href="/schedule-consultation" className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  )
}
