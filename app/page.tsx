import { Github, X, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import WorkExperience from "@/components/work-experience";
import StartupWorkSection from "@/components/startup-work";
import Projects from "@/components/projects";
import ThemeIndicator from "@/components/theme-indicator";
import { socialLinks } from "@/data/links";
import TypingEffect from "@/components/typing-effect";
import SiteHeader from "@/components/site-header";

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight italic">
                Software engineer,{" "}
                <TypingEffect
                  text="Web Developer & tech enthusiast"
                  speed={80}
                  delay={1000}
                  className="text-primary"
                />
              </h1>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Hi 👋 I’m Junaid Ahmed — a full-stack developer passionate about
                building scalable applications and continually exploring the
                evolving world of technology.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href={socialLinks.githubLink}
                  className="flex items-center gap-2 text-sm hover:text-foreground/80"
                >
                  <Image
                    src="/icons/github.svg"
                    alt="github"
                    width={24}
                    height={24}
                    className="dark:bg-white"
                  />
                  Github
                </Link>
                <Link
                  href={socialLinks.twitterLink}
                  className="flex items-center gap-2 text-sm hover:text-foreground/80"
                >
                  <Image
                    src="/icons/twitter.svg"
                    alt="twitter"
                    width={24}
                    height={24}
                    className="dark:bg-white"
                  />
                  X.com
                </Link>
                <Link
                  href={socialLinks.linkedinLInk}
                  className="flex items-center gap-2 text-sm hover:text-foreground/80"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                  LinkedIn
                </Link>
                <Link
                  href={socialLinks.instagramLink}
                  className="flex items-center gap-2 text-sm hover:text-foreground/80"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="github"
                    width={24}
                    height={24}
                  />
                  Instagram
                </Link>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <Image
                    src="/images/pfprofile_picture.jpeg"
                    alt="Profile picture"
                    width={420}
                    height={420}
                    className="rounded-2xl object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300"
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
            href="mailto:junaidcom0065@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-4 h-4" />
            junaidcom0065@gmail.com
          </Link>
        </section>

        {/* Theme Indicator */}
        <ThemeIndicator />
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
