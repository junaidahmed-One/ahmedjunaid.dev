import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Projects from "@/components/projects";
import SiteHeader from "@/components/site-header";

export default function ProjectsPage() {
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
            <div>Junaid Ahmed</div>
          </div>
        </div>
      </footer>
    </>
  );
}
