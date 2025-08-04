import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
            <Link href="/">
              <span className="text-background font-bold text-sm">JA</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-sm hover:text-foreground/80">
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm hover:text-foreground/80 font-semibold"
            >
              Projects
            </Link>
            <Link href="/blogs" className="text-sm hover:text-foreground/80">
              Blogs
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

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

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive collection of my work spanning web development,
              mobile applications, and open-source contributions. Each project
              represents a unique challenge and learning experience.
            </p>
          </div>
        </div>

        {/* All Projects */}
        <Projects showAll={true} />

        {/* Contact Section */}
        <section className="text-center mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and interesting
            projects.
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
            <div>Copyright © Junaid Ahmed 2025. All rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
