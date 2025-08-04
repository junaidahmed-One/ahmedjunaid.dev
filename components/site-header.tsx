"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="border-b relative z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - clickable on mobile to open menu */}
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 bg-foreground rounded flex items-center justify-center md:pointer-events-none"
            aria-label="Toggle mobile menu"
          >
            <span className="text-background font-bold text-sm">JA</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm hover:text-foreground/80 ${
                isActive("/") ? "font-semibold" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-sm hover:text-foreground/80 ${
                isActive("/projects") ? "font-semibold" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={`text-sm hover:text-foreground/80 ${
                isActive("/blogs") ? "font-semibold" : ""
              }`}
            >
              Blogs
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-background border-r shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-bold text-sm">JA</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-1">
                  <Link
                    href="/#about"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive("/")
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive("/projects")
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/blogs"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive("/blogs")
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    Blogs
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
