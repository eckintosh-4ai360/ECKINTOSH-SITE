'use client'

import { SiteHeader } from '@/components/site-header'
import { FileText, Gavel, Scale, AlertTriangle, Copyright, HelpCircle } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="max-w-4xl mx-auto py-20 px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Gavel size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Legal Terms</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            The agreement between you and ECKINTOSH regarding the use of our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Last Updated: April 28, 2026
          </p>
        </div>

        <div className="space-y-12">
          {/* Agreement to Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and ECKINTOSH (“we,” “us” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          {/* Intellectual Property Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Copyright className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">2. Intellectual Property Rights</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
          </section>

          {/* User Representations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">3. User Representations</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">4. Prohibited Activities</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-muted p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Questions?</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <div className="text-foreground font-medium">
              <p>ECKINTOSH</p>
              <p>Email: legal@eckintosh.com</p>
              <p>Address: 123 Tech Avenue, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-75">&copy; 2026 ECKINTOSH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
