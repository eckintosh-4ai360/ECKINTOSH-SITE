'use client'

import { SiteHeader } from '@/components/site-header'
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="max-w-4xl mx-auto py-20 px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Shield size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Privacy Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your personal information at ECKINTOSH.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Last Updated: April 28, 2026
          </p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">1. Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At ECKINTOSH, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise technology services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Collection of Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">2. Collection of Information</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                </li>
                <li>
                  <strong className="text-foreground">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </li>
                <li>
                  <strong className="text-foreground">Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
                </li>
              </ul>
            </div>
          </section>

          {/* Use of Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">3. Use of Your Information</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send you related information.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Improve our services and website functionality.</li>
              <li>Respond to product and customer service requests.</li>
            </ul>
          </section>

          {/* Disclosure of Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              By Law or to Protect Rights, Business Transfers, Third-Party Service Providers, and Marketing Communications with your consent.
            </p>
          </section>

          {/* Security of Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">5. Security of Your Information</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-muted p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="text-foreground font-medium">
              <p>ECKINTOSH</p>
              <p>Email: privacy@eckintosh.com</p>
              <p>Address: 123 Tech Avenue, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </main>

      {/* Simplified Footer for Legal Pages */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-75">&copy; 2026 ECKINTOSH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
