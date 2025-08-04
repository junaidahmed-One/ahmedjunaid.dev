import { Mail, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import BlogSection from "@/components/blog-section";
import SiteHeader from "@/components/site-header";

export default function BlogsPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-foreground" />
              <h1 className="text-4xl font-bold">Blogs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto"></p>
          </div>
        </div>

        {/* Currently Cooking Section */}
        <BlogSection
          title="cooking..."
          subtitle="New content coming soon..."
          mediaUrl="/images/blog-working.gif"
          mediaType="gif"
          altText="Cooking animation"
        />

        {/* Newsletter Signup */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Stay Updated</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new articles. No spam, just quality
                content about web development and startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Topic Suggestion?</h2>
          <p className="text-muted-foreground mb-6">
            I'd love to hear what you'd like me to write about. Feel free to
            reach out with your ideas!
          </p>
          <Link
            href="mailto:junaidcom0065@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-4 h-4" />
            junaidcom0065@gmail.com
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Junaid Ahmed</div>
          </div>
        </div>
      </footer>
    </>
  );
}
