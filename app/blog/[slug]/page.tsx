'use client'

import { use } from 'react'
import { articles } from '../page'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
     
      {/* Hero Section */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-sm font-semibold text-accent bg-blue-100 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-t border-border/60 pt-8">
            <div className="flex items-center gap-2">
              <User size={20} className="text-primary" />
              <span className="font-medium text-foreground">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
              {article.excerpt}
            </p>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                In today&apos;s rapidly evolving digital landscape, organizations are facing unprecedented challenges and opportunities. This article explores how {article.category.toLowerCase()} is playing a pivotal role in shaping the future of enterprise technology.
              </p>
              
              <h2 className="text-3xl font-bold text-foreground pt-8">The Shift Towards Modernization</h2>
              <p>
                Legacy systems are no longer sufficient to meet the demands of a globalized, always-on economy. Enterprises that successfully navigate this transition are seeing significant improvements in operational efficiency and customer satisfaction.
              </p>
              
              <div className="bg-card border border-border rounded-2xl p-8 my-12">
                <h3 className="text-xl font-bold text-primary mb-4">Key Insight</h3>
                <p className="text-foreground/90 m-0">
                  Digital excellence is not just about adopting new tools; it&apos;s about fostering a culture of continuous innovation and adaptability.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground pt-8">Strategic Implementation</h2>
              <p>
                Successful {article.category.toLowerCase()} initiatives require a holistic approach that considers technology, people, and processes. By aligning these three pillars, organizations can unlock new levels of value and competitive advantage.
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>Comprehensive assessment of current infrastructure</li>
                <li>Clear definition of success metrics and ROI</li>
                <li>Phased rollout strategy to minimize disruption</li>
                <li>Continuous monitoring and optimization</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground pt-8">Conclusion</h2>
              <p>
                As we look towards the rest of 2024 and beyond, the role of {article.category.toLowerCase()} will only continue to grow. Organizations that embrace these changes today will be the leaders of tomorrow.
              </p>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground flex items-center gap-2">
                <Share2 size={18} /> Share:
              </span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition">
                  <Facebook size={18} />
                </button>
                <button className="p-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition">
                  <Twitter size={18} />
                </button>
                <button className="p-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
            
            <Link 
              href="/blog"
              className="text-primary font-semibold hover:underline"
            >
              More Articles &rarr;
            </Link>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Need expert guidance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team of specialists is ready to help you implement these strategies in your organization.
          </p>
          <Link 
            href="/schedule-consultation"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
