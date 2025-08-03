export interface WorkExperience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  logoUrl: string
  color: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: Technology[]
  liveDemo?: string
  sourceCode?: string
  watchVideo?: string
}

export interface StartupWork {
  id: string
  company: string
  role: string
  stage: string
  description: string
  logoUrl: string
  color: string
  focus: string[]
  website?: string
  status: string
  startDate: string
}

export interface Technology {
  name: string
  icon: string
  color: string
}

export interface CurrentProject {
  id: string
  title: string
  description: string
  logoUrl: string
  color: string
  progress: number
  expectedCompletion?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  status: string
}

export const workExperiences: WorkExperience[] = [
  {
    id: "paydestat",
    company: "Paydestat",
    position: "Frontend Developer",
    duration: "SEP 11, 2024 - PRESENT",
    description:
      "At Paydestat, my primary roles involve collaborating with a cross-functional team to develop new fintech products and enhance existing ones. I focus on creating intuitive user interfaces that display business data and transaction analytics, as well as optimizing existing applications to improve user experience and ensure product compliance.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=P",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "optimus-ai",
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    duration: "NOV 25, 2024 - JAN 8, 2025",
    description:
      "At Optimus, my work involves developing and maintaining dynamic, user-centric applications and interfaces for top organizations and government agencies.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=OL",
    color: "from-orange-400 to-red-500",
  },
]

export const startupWork: StartupWork[] = [
  {
    id: "techflow-startup",
    company: "TechFlow",
    role: "Co-Founder & CTO",
    stage: "Seed Stage",
    description:
      "Building a revolutionary workflow automation platform for small to medium businesses. Leading the technical vision and development of our core product while managing a team of 4 developers. We're focused on simplifying complex business processes through intelligent automation.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=TF",
    color: "from-blue-500 to-purple-600",
    focus: ["Product Development", "Team Leadership", "Technical Strategy"],
    website: "#",
    status: "Active",
    startDate: "Jan 2024",
  }
]

export const projects: Project[] = [
  {
    id: "tribe",
    title: "TRIBE",
    description:
      "TRIBE is a community app inspired by Skool, where users can create or join communities, share posts, like them, comment on them, and chat in real time with other users.",
    image: "/images/project-tribe.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Tailwind", icon: "🎨", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
      { name: "Shadcn", icon: "✏️", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
      { name: "Cypress", icon: "🌲", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { name: "Pocketbase", icon: "🗄️", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
      {
        name: "Tanstack Router",
        icon: "🔄",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      {
        name: "Tanstack Query",
        icon: "🔍",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
    ],
    liveDemo: "#",
    sourceCode: "#",
    watchVideo: "#",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Node.js, featuring user authentication, payment processing, and admin dashboard for managing products and orders.",
    image: "/placeholder.svg?height=400&width=800&text=E-Commerce",
    technologies: [
      { name: "Next.js", icon: "⚡", color: "bg-black text-white dark:bg-white dark:text-black" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Stripe", icon: "💳", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
      { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    ],
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Java Spring Boot.",
    image: "/placeholder.svg?height=400&width=800&text=Task+Management",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Java", icon: "☕", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
      { name: "Spring Boot", icon: "🍃", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { name: "WebSocket", icon: "🔌", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
      { name: "MySQL", icon: "🗃️", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
    ],
    liveDemo: "#",
    sourceCode: "#",
    watchVideo: "#",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics built with React and OpenWeather API.",
    image: "/placeholder.svg?height=400&width=800&text=Weather+App",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Chart.js", icon: "📊", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      {
        name: "OpenWeather API",
        icon: "🌤️",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
    ],
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    id: "blog-platform",
    title: "Personal Blog Platform",
    description:
      "A modern blog platform with markdown support, comment system, and SEO optimization built with Next.js and Contentful CMS.",
    image: "/placeholder.svg?height=400&width=800&text=Blog+Platform",
    technologies: [
      { name: "Next.js", icon: "⚡", color: "bg-black text-white dark:bg-white dark:text-black" },
      { name: "Contentful", icon: "📝", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Markdown", icon: "📄", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
      { name: "Vercel", icon: "▲", color: "bg-black text-white dark:bg-white dark:text-black" },
    ],
    liveDemo: "#",
    sourceCode: "#",
  },
]

export const currentProjects: CurrentProject[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "Building a personal portfolio website to showcase my work, skills, and experience. The website will be built with Next.js and Tailwind CSS.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=PW",
    color: "from-green-500 to-blue-500",
    progress: 75,
    expectedCompletion: "Dec 2024",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Development",
  },
  {
    id: "ai-powered-chatbot",
    title: "AI-Powered Chatbot",
    description:
      "Developing an AI-powered chatbot using React and Dialogflow to provide customer support and answer frequently asked questions.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=AI",
    color: "from-purple-500 to-pink-500",
    progress: 50,
    expectedCompletion: "Jan 2025",
    technologies: ["React", "Dialogflow", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Development",
  },
  {
    id: "mobile-app-redesign",
    title: "Mobile App Redesign",
    description:
      "Redesigning a mobile app using React Native to improve the user interface and user experience. The app will be available on iOS and Android.",
    logoUrl: "/placeholder.svg?height=40&width=40&text=MA",
    color: "from-yellow-500 to-orange-500",
    progress: 25,
    expectedCompletion: "Feb 2025",
    technologies: ["React Native", "Firebase", "Expo"],
    githubUrl: "#",
    liveUrl: "#",
    status: "Planning",
  },
]
