'use client'

import { SiteHeader } from '@/components/site-header'
import { Cookie, Info, Settings, ShieldCheck, MousePointer2, HelpCircle } from 'lucide-react'

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="max-w-4xl mx-auto py-20 px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
            <Cookie size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Cookie Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            How we use cookies and similar technologies to improve your experience.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Last Updated: April 28, 2026
          </p>
        </div>

        <div className="space-y-12">
          {/* What are Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">1. What are Cookies?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          {/* Why do we use Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <MousePointer2 className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">2. Why do we use Cookies?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Site to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Sections.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary" />
                  Essential Cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Necessary for the website to function properly, including security and network management.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Settings size={18} className="text-primary" />
                  Performance Cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The specific types of first and third-party cookies served through our Site and the purposes they perform are described below:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Site is being used.</li>
                <li><strong className="text-foreground">Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
                <li><strong className="text-foreground">Social networking cookies:</strong> These cookies are used to enable you to share pages and content that you find interesting on our Site through third-party social networking and other websites.</li>
              </ul>
            </div>
          </section>

          {/* How can I control Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">4. How can I control Cookies?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-muted p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">More Information</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              If you have any questions about our use of cookies or other technologies, please email us at:
            </p>
            <div className="text-foreground font-medium">
              <p>ECKINTOSH</p>
              <p>Email: cookies@eckintosh.com</p>
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
