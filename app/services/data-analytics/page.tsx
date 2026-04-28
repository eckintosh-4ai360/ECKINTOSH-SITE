'use client'

import { ArrowRight, Check, BarChart3, Zap, TrendingUp, Users, Award, Database } from 'lucide-react'
import Link from 'next/link'

export default function DataAnalyticsPage() {
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
              <BarChart3 size={16} />
              <span className="text-sm font-semibold">Data-Driven Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform Data Into Actionable Insights
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Leverage advanced analytics, machine learning, and business intelligence to unlock hidden opportunities and drive strategic decision-making.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Database className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">
                Build robust data pipelines and infrastructure to handle massive volumes of structured and unstructured data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>ETL/ELT pipeline design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Data warehouse architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Real-time streaming infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <BarChart3 className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Create intuitive dashboards and reports that enable stakeholders to understand complex data at a glance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Interactive dashboard development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>KPI tracking and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Self-service analytics platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Use machine learning to forecast trends, identify opportunities, and anticipate customer behavior.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Demand forecasting models</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Customer behavior prediction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Anomaly detection systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Unlock sophisticated insights with statistical analysis, optimization, and complex data modeling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Statistical modeling and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Optimization algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>NLP and computer vision applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Choose ECKINTOSH for Analytics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Our data scientists have deep experience across finance, retail, healthcare, and manufacturing sectors.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ROI Focused</h3>
              <p className="text-gray-600">
                We measure success by business impact: increased revenue, reduced costs, and improved efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Your analytics team gets dedicated scientists and engineers who understand your business deeply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 sm:py-24 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Analytics Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-blue-100">Models Deployed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">GH₵2500</div>
              <p className="text-blue-100">Value Generated</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Model Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25x</div>
              <p className="text-blue-100">Avg ROI Multiple</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Leverage Data as Your Competitive Advantage?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's explore how advanced analytics can transform your business decisions and drive measurable growth.
          </p>
          <Link href="/schedule-consultation" className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition font-semibold gap-2">
            Start Your Analytics Journey <ArrowRight size={20} />
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
                <li><Link href="/services/data-analytics" className="hover:text-white transition">Data Analytics</Link></li>
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
