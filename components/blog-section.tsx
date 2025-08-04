"use client";

import Image from "next/image";

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  mediaUrl?: string;
  mediaType?: "gif" | "svg" | "image";
  altText?: string;
}

export default function BlogSection({
  title = "cooking...",
  subtitle = "New content coming soon...",
  mediaUrl = "/placeholder.svg?height=200&width=300&text=Cooking+GIF",
  mediaType = "gif",
  altText = "Currently cooking animation",
}: BlogSectionProps) {
  const renderMedia = () => {
    if (!mediaUrl) return null;

    switch (mediaType) {
      case "gif":
        return (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-background rounded-lg overflow-hidden border-2 border-border">
              <Image
                src={mediaUrl || "/placeholder.svg"}
                alt={altText}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
                unoptimized // Important for GIFs to maintain animation
              />
            </div>
          </div>
        );

      case "svg":
        return (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-background rounded-lg overflow-hidden border-2 border-border p-4">
              <Image
                src={mediaUrl || "/placeholder.svg"}
                alt={altText}
                width={300}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-background rounded-lg overflow-hidden border-2 border-border">
              <Image
                src={mediaUrl || "/placeholder.svg"}
                alt={altText}
                width={300}
                height={200}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section className="mb-16">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h1 className="text-3xl font-bold font-rubik-bubbles">{title}</h1>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Blog</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-8 text-lg">{subtitle}</p>

        {/* Media Container */}
        <div className="flex justify-center mb-8">{renderMedia()}</div>

        {/* Coming Soon Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔥</span>
              </div>
              <h3 className="text-xl font-semibold">
                Something Amazing is Brewing
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm working on some exciting blog content covering web
              development, startup insights, and technical deep-dives. Stay
              tuned for articles about React, Next.js, startup building, and my
              journey as a fullstack developer.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="font-medium mb-2">📚 Technical Tutorials</div>
                <div className="text-muted-foreground">
                  Step-by-step guides and best practices
                </div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="font-medium mb-2">🚀 Startup Stories</div>
                <div className="text-muted-foreground">
                  Behind-the-scenes startup building
                </div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="font-medium mb-2">💡 Tech Insights</div>
                <div className="text-muted-foreground">
                  Industry trends and observations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
