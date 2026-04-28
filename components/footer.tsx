import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4">ECKINTOSH</h4>
            <p className="text-muted-foreground">Enterprise technology solutions for modern businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition">Cookies Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">
              123 Tech Avenue<br />
              San Francisco, CA 94105<br />
              (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 ECKINTOSH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
