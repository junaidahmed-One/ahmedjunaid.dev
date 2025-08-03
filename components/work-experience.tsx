"use client"

import { workExperiences, type WorkExperience } from "@/data/portfolio-data"
import Image from "next/image"

interface WorkExperienceProps {
  experiences?: WorkExperience[]
}

export default function PortfolioWorkExperience({ experiences = workExperiences }: WorkExperienceProps) {
  const ExperienceCard = ({ experience, index }: { experience: WorkExperience; index: number }) => (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center mr-6">
        {/* Timeline Dot */}
        <div
          className={`w-4 h-4 bg-gradient-to-br ${experience.color} rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}
        />
        {/* Timeline Line - only show if not the last item */}
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-border to-transparent mt-2" />
        )}
      </div>

      {/* Experience Content */}
      <div className="flex-1 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group-hover:border-border/60">
          {/* Company Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-background border-2 border-border rounded-lg flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
              <Image
                src={experience.logoUrl || "/placeholder.svg"}
                alt={`${experience.company} logo`}
                width={40}
                height={40}
                className="w-8 h-8 object-contain dark:invert-0"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground">{experience.company}</h3>
              <p className="text-sm text-muted-foreground font-medium">{experience.position}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-xs text-muted-foreground">
                  {experience.duration.includes("PRESENT") ? (
                    <>
                      {experience.duration.split(" - ")[0]} -{" "}
                      <span className="text-green-600 font-semibold">PRESENT</span>
                    </>
                  ) : (
                    experience.duration
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">{experience.description}</p>

          {/* Timeline Badge */}
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
            {experience.duration.includes("PRESENT") ? "Current Role" : "Previous Role"}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <span>Career Timeline</span>
        </div>
      </div>

      <div className="max-w-4xl relative mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Timeline Start Indicator */}
        <div className="flex items-center gap-3 ml-2 mt-4">
          <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-50" />
          <span className="text-xs text-muted-foreground italic">Career Journey Started</span>
        </div>
      </div>
    </section>
  )
}
