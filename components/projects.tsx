"use client"

import { projects, type Project } from "@/data/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Play, Code, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectsProps {
  projectList?: Project[]
  showAll?: boolean
  maxProjects?: number
}

export default function Projects({ projectList = projects, showAll = false, maxProjects = 3 }: ProjectsProps) {
  const displayedProjects = showAll ? projectList : projectList.slice(0, maxProjects)
  const hasMoreProjects = projectList.length > maxProjects

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="bg-card border-border overflow-hidden group">
      <CardContent className="p-0">
        {/* Project Image with Zoom Effect */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} - Project Screenshot`}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>

        {/* Project Details */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech.name} variant="secondary" className={`text-xs ${tech.color}`}>
                {tech.icon} {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {project.liveDemo && (
              <Button size="sm" className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                DEMO
              </Button>
            )}
            {project.sourceCode && (
              <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs bg-transparent">
                <Code className="w-3 h-3" />
                CODE
              </Button>
            )}
            {project.watchVideo && (
              <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs bg-transparent">
                <Play className="w-3 h-3" />
                VIDEO
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">PROJECTS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && hasMoreProjects && (
        <div className="text-center">
          <Link href="/projects">
            <Button variant="outline" className="group bg-transparent">
              Show More Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}
