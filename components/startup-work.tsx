"use client";

import { startupWork, type StartupWork } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Users, Lightbulb, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StartupWorkProps {
  startups?: StartupWork[];
}

export default function StartupWorkSection({
  startups = startupWork,
}: StartupWorkProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <Rocket className="w-3 h-3" />;
      case "Advisory":
        return <Users className="w-3 h-3" />;
      case "Stealth":
        return <Eye className="w-3 h-3" />;
      default:
        return <Lightbulb className="w-3 h-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advisory":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Stealth":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Seed Stage":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Pre-Seed":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Stealth Mode":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  const StartupCard = ({
    startup,
    index,
  }: {
    startup: StartupWork;
    index: number;
  }) => (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center mr-6">
        {/* Timeline Dot */}
        <div
          className={`w-4 h-4 bg-gradient-to-br ${startup.color} rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}
        />
        {/* Timeline Line - only show if not the last item */}
        {index < startups.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-border to-transparent mt-2" />
        )}
      </div>

      {/* Startup Content */}
      <div className="flex-1 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group-hover:border-border/60">
          {/* Startup Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-background border-2 border-border rounded-lg flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
              <Image
                src={startup.logoUrl || "/placeholder.svg"}
                alt={`${startup.company} logo`}
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-foreground">
                  {startup.company}
                </h3>
                <Badge
                  variant="secondary"
                  className={`text-xs ${getStatusColor(startup.status)}`}
                >
                  {getStatusIcon(startup.status)}
                  {startup.status}
                </Badge>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <p className="text-sm text-muted-foreground font-medium">
                  {startup.role}
                </p>
                <Badge
                  variant="outline"
                  className={`text-xs ${getStageColor(startup.stage)}`}
                >
                  {startup.stage}
                </Badge>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <p className="text-xs text-muted-foreground">
                  Since <span className="font-medium">{startup.startDate}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            {startup.description}
          </p>

          {/* Focus Areas */}
          <div className="flex flex-wrap gap-1 mb-4">
            {startup.focus.map((area) => (
              <Badge key={area} variant="outline" className="text-xs">
                {area}
              </Badge>
            ))}
          </div>

          {/* Action Button */}
          {startup.website && startup.status !== "Stealth" && (
            <Link href={startup.website}>
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-1 text-xs bg-transparent"
              >
                <ExternalLink className="w-3 h-3" />
                Visit Website
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold">What I'm Building</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          <span>Startup Journey</span>
        </div>
      </div>

      <div className="max-w-4xl relative mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {startups.map((startup, index) => (
            <StartupCard key={startup.id} startup={startup} index={index} />
          ))}
        </div>

        {/* Timeline End Indicator */}
        <div className="flex items-center gap-3 ml-2 mt-4">
          <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-75" />
          <span className="text-xs text-muted-foreground italic">
            Always exploring new opportunities...
          </span>
        </div>
      </div>
    </section>
  );
}
