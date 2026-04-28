'use client'

import { ArrowRight, Check, Shield, Lock, AlertCircle, Zap, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function SecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            ECKINTOSH
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition">Home</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary transition">Portfolio</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Shield size={16} />
              <span className="text-sm font-semibold">Enterprise Security Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Security & Compliance Excellence
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Protect your organization with comprehensive security frameworks, compliance management, and threat mitigation strategies designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-consultation" className="inline-flex bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold gap-2">
                Schedule Consultation <ArrowRight size={20} />
              </Link>
              <Link href="/case-studies" className="inline-flex border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Security Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive penetration testing and vulnerability scanning to identify security gaps before attackers do.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Annual penetration tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Web application security scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Infrastructure vulnerability mapping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Lock className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Compliance Management</h3>
              <p className="text-gray-600 mb-4">
                Navigate complex regulatory requirements with our compliance expertise across HIPAA, GDPR, PCI-DSS, and more.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Multi-framework compliance audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Policy development and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Continuous compliance monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <AlertCircle className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Threat Detection & Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 monitoring and rapid incident response to minimize damage and recovery time from security incidents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>SIEM and threat intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Incident response playbooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Forensic analysis and reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Security Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Design and deploy secure infrastructure with advanced access controls, encryption, and segmentation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Zero-trust architecture implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Encryption and key management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Identity and access management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Choose ECKINTOSH for Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Expertise</h3>
              <p className="text-gray-600">
                Our team holds advanced security certifications including CISSP, OSCP, and compliance auditor credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proactive Approach</h3>
              <p className="text-gray-600">
                We identify and fix vulnerabilities before they can be exploited, not after breaches occur.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock monitoring and support ensures rapid response to any security incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 sm:py-24 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Security Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Vulnerabilities Remediated</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <p className="text-blue-100">Threat Detection Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15 mins</div>
              <p className="text-blue-100">Avg Incident Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Compliance Audit Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our security experts are ready to assess your current infrastructure and develop a comprehensive security strategy.
          </p>
          <Link href="/schedule-consultation" className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition font-semibold gap-2">
            Start Your Security Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/security-compliance" className="hover:text-white transition">Security & Compliance</Link></li>
                <li><Link href="/services/cloud-infrastructure" className="hover:text-white transition">Cloud Infrastructure</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-white transition">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
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
