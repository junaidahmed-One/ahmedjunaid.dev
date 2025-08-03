"use client"

import { currentProjects, type CurrentProject } from "@/data/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Github, ExternalLink, Clock, Zap } from "lucide-react"
import Image from "next/image"

interface CurrentProjectsProps {
  projects?: CurrentProject[]
}

export default function CurrentProjects({ projects = currentProjects }: CurrentProjectsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Development":
        return <Zap className="w-3 h-3" />
      case "Planning":
        return <Clock className="w-3 h-3" />
      case "Beta Testing":
        return <ExternalLink className="w-3 h-3" />
      default:
        return <Zap className="w-3 h-3" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Beta Testing":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const ProjectCard = ({ project, index }: { project: CurrentProject; index: number }) => (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center mr-6">
        {/* Timeline Dot */}
        <div
          className={`w-4 h-4 bg-gradient-to-br ${project.color} rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}
        />
        {/* Timeline Line - only show if not the last item */}
        {index < projects.length - 1 && <div className="w-0.5 h-20 bg-gradient-to-b from-border to-transparent mt-2" />}
      </div>

      {/* Project Content */}
      <div className="flex-1 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group-hover:border-border/60">
          {/* Project Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-background border-2 border-border rounded-lg flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
              <Image
                src={project.logoUrl || "/placeholder.svg"}
                alt={`${project.title} logo`}
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <Badge variant="secondary" className={`text-xs ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {project.expectedCompletion && (
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Expected completion: <span className="font-medium">{project.expectedCompletion}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs bg-transparent">
                <Github className="w-3 h-3" />
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" className="flex items-center gap-1 text-xs">
                <ExternalLink className="w-3 h-3" />
                Preview
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold">What I'm Building</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse" />
          <span>Current Projects</span>
        </div>
      </div>

      <div className="max-w-4xl relative mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Timeline End Indicator */}
        <div className="flex items-center gap-3 ml-2 mt-4">
          <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-75" />
          <span className="text-xs text-muted-foreground italic">More projects in the pipeline...</span>
        </div>
      </div>
    </section>
  )
}
