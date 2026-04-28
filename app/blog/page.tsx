'use client'

import { ArrowRight, Calendar, User, Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')

  const articles = [
    {
      id: 1,
      title: 'The Future of Cloud Architecture in 2024',
      excerpt: 'Exploring emerging trends in cloud infrastructure, including serverless computing, edge computing, and multi-cloud strategies that are reshaping enterprise technology.',
      category: 'Cloud',
      author: 'Sarah Chen',
      date: 'Mar 15, 2024',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Why Digital Transformation Fails (And How to Succeed)',
      excerpt: 'Analysis of common pitfalls in digital transformation initiatives and proven strategies to ensure successful adoption across your organization.',
      category: 'Digital Transformation',
      author: 'Michael Rodriguez',
      date: 'Mar 10, 2024',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'Zero Trust Security: Moving Beyond the Perimeter',
      excerpt: 'Deep dive into Zero Trust architecture principles and how enterprises can implement robust security frameworks in modern cloud-native environments.',
      category: 'Security',
      author: 'Jennifer Park',
      date: 'Mar 5, 2024',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Leveraging AI and Machine Learning for Enterprise Optimization',
      excerpt: 'Practical guide to implementing AI and ML solutions for business intelligence, process automation, and predictive analytics.',
      category: 'AI & Analytics',
      author: 'David Thompson',
      date: 'Feb 28, 2024',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'The Total Cost of Ownership: Beyond Cloud Pricing',
      excerpt: 'Comprehensive analysis of hidden costs in cloud infrastructure, including operational overhead, training, and optimization expenses.',
      category: 'Cost Optimization',
      author: 'Lisa Anderson',
      date: 'Feb 22, 2024',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Enterprise Deployments',
      excerpt: 'Practical guide to implementing modern DevOps practices, CI/CD pipelines, and infrastructure automation at enterprise scale.',
      category: 'DevOps',
      author: 'James Wilson',
      date: 'Feb 15, 2024',
      readTime: '12 min read'
    },
    {
      id: 7,
      title: 'Data-Driven Decision Making in the Modern Enterprise',
      excerpt: 'How enterprises are using advanced analytics and business intelligence to drive strategic decision-making and competitive advantage.',
      category: 'Data Analytics',
      author: 'Rachel Green',
      date: 'Feb 8, 2024',
      readTime: '8 min read'
    },
    {
      id: 8,
      title: 'Navigating Regulatory Compliance in Cloud Infrastructure',
      excerpt: 'Essential guide to managing compliance requirements like GDPR, HIPAA, and SOC 2 while leveraging cloud technology.',
      category: 'Compliance',
      author: 'Mark Johnson',
      date: 'Feb 1, 2024',
      readTime: '11 min read'
    }
  ]

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(articles.map(a => a.category)))

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
            ECKINTOSH <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Insights, best practices, and thought leadership on enterprise technology, digital transformation, and cloud innovation.
          </p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:border-primary transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary transition flex flex-col"
                >
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent bg-blue-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-4 flex-grow">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {article.author}
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <button className="text-primary font-semibold hover:text-secondary transition flex items-center gap-2 group">
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No articles found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary font-semibold hover:text-secondary transition"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights on enterprise technology and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Whitepapers',
                description: 'In-depth technical guides and strategic frameworks for digital transformation.',
                cta: 'Download Now'
              },
              {
                title: 'Case Studies',
                description: 'Real-world examples of successful technology implementations across industries.',
                cta: 'Explore Cases'
              },
              {
                title: 'Webinars',
                description: 'Live expert sessions covering emerging technologies and best practices.',
                cta: 'Register'
              }
            ].map((resource, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-foreground mb-4">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <button className="text-primary font-semibold hover:text-secondary transition flex items-center justify-center gap-2 w-full">
                  {resource.cta} <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply These Insights?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our consultants can help you implement the strategies and technologies discussed in our articles.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
