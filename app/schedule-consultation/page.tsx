'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clock, Users, MessageSquare, Zap, CheckCircle, Star, Phone } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export default function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: 'general',
    preferredDate: '',
    preferredTime: '',
    challenges: '',
    budget: ''
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
    
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        consultationType: 'general',
        preferredDate: '',
        preferredTime: '',
        challenges: '',
        budget: ''
      })
      setTimeout(() => setSubmitted(false), 6000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-12 sm:pt-6 bg-gradient-to-r from-bg-primary to-bg-primary text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-xl">
              Connect with our experts to discuss your technology challenges and discover how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-4 sm:mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    We&apos;ve received your consultation request. Our team will review your information and contact you within 24 hours to confirm your appointment and discuss your specific needs.
                  </p>
                  <div className="space-y-4 text-left bg-white rounded-lg p-6 mb-8">
                    <p className="text-gray-700">
                      <strong>What happens next:</strong>
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Initial confirmation call within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Expert assessment of your challenges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Custom recommendations and roadmap</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>No obligation to proceed</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/" className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold gap-2">
                    Back to Home <ArrowRight size={20} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Tell Us About Your Project</h2>

                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="mb-6">
                    <label htmlFor="consultationType" className="block text-sm font-semibold text-gray-700 mb-2">
                      What can we help you with? *
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="general">General Consultation</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="consulting">Enterprise Consulting</option>
                      <option value="security">Security & Compliance</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="devops">DevOps & Automation</option>
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="">Select a time</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="1pm">1:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select a range</option>
                      <option value="under50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="above500k">$500,000+</option>
                    </select>
                  </div>

                  {/* Challenges */}
                  <div className="mb-8">
                    <label htmlFor="challenges" className="block text-sm font-semibold text-gray-700 mb-2">
                      Describe your main challenges or goals
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 resize-none"
                      placeholder="Tell us about the challenges you&apos;re facing and what you hope to achieve..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-foreground text-white py-4 rounded-lg hover:shadow-lg transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? 'Scheduling...' : (
                      <>
                        Schedule Consultation <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-6">
                    We respect your privacy. We&apos;ll only use your information to contact you about your consultation.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar - Benefits & Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">30-45 Minutes</h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive consultation with one of our experts
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Assessment</h4>
                      <p className="text-gray-600 text-sm">
                        Understand your current state and opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Actionable Roadmap</h4>
                      <p className="text-gray-600 text-sm">
                        Receive recommendations tailored to your goals
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Check className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">No Obligation</h4>
                      <p className="text-gray-600 text-sm">
                        Free consultation, no pressure to commit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The consultation was incredibly valuable. They took time to understand our business and provided a clear roadmap for our digital transformation."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">CTO, Tech Innovations Inc.</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h4 className="text-lg font-bold mb-6">Quick Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <a href="tel:+233531152121" className="text-blue-100 hover:text-white transition">
                        +233 (0) 53 115 2121
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare size={20} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:hello@eckintosh.com" className="text-blue-100 hover:text-white transition">
                        eckintosh@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 hover:text-primary transition">
                How long does a consultation take?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Our consultations typically take 30-45 minutes. This gives us enough time to understand your challenges, discuss your goals, and provide thoughtful recommendations.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 hover:text-primary transition">
                Is the consultation really free?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, completely free. We offer consultations to understand your needs and provide genuine value, regardless of whether you decide to work with us.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 hover:text-primary transition">
                What if I need to reschedule?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                No problem! You can reschedule any time by calling us or replying to your confirmation email. We&apos;ll work with your availability.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 hover:text-primary transition">
                What&apos;s the best way to prepare for the call?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Have a list of your main challenges, goals for the next 12 months, and any current technology stack information handy. But don&apos;t worry—we can guide you through it.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 hover:text-primary transition">
                Can multiple people from our team join?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Absolutely. We welcome participation from different departments. Multiple perspectives help us provide more comprehensive recommendations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Cloud Infrastructure</Link></li>
                <li><Link href="/" className="hover:text-white transition">Digital Transformation</Link></li>
                <li><Link href="/" className="hover:text-white transition">Security & Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 ECKINTOSH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
