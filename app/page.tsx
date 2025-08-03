import { Github, X, Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "@/components/theme-toggle"
import WorkExperience from "@/components/work-experience"
import StartupWorkSection from "@/components/startup-work"
import Projects from "@/components/projects"
import ThemeIndicator from "@/components/theme-indicator"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#blog" className="text-sm hover:text-foreground/80">
              Blog
            </Link>
            <Link href="#photos" className="text-sm hover:text-foreground/80">
              Photos
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Software engineer, Web Developer
                <br />& tech enthusiast
              </h1>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm a fullstack developer with 3+ years of experience, passionate about building scalable applications
                and contributing to open-source projects that benefit developers and the world at large.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  <X className="w-4 h-4" />X
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  <Mail className="w-4 h-4" />
                  Steam
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Unsplash
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Youtube
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Daily.dev
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  ProductHunt
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Stackoverflow
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Codewars
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-foreground/80">
                  Gitlab
                </Link>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=280&width=280&text=Profile"
                    alt="Profile picture"
                    width={280}
                    height={280}
                    className="rounded-full object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkExperience />

        <StartupWorkSection />

        <Projects />

        {/* Contact */}
        <section className="text-center">
          <Link
            href="mailto:your.email@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-4 h-4" />
            your.email@gmail.com
          </Link>
        </section>

        {/* Theme Indicator */}
        <ThemeIndicator />
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Built with:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span>Sanity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
                <span>Vercel</span>
              </div>
            </div>
            <div>Copyright © Your Name 2025. All rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
