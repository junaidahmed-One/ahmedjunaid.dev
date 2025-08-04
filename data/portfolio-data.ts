export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  logoUrl: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveDemo?: string;
  sourceCode?: string;
  watchVideo?: string;
}

export interface StartupWork {
  id: string;
  company: string;
  role: string;
  stage: string;
  description: string;
  logoUrl: string;
  color: string;
  focus: string[];
  website?: string;
  status: string;
  startDate: string;
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface CurrentProject {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
  color: string;
  progress: number;
  expectedCompletion?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: "accenture",
    company: "Accenture",
    position: "FullStack Developer",
    duration: "SEP 2024 - PRESENT",
    description:
      "At Paydestat, as Full Stack Developer responsible for designing, developing, and maintaining scalable web applications across both frontend and backend systems.",
    logoUrl: "/icons/accenture_logo.svg",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "bristlecone",
    company: "Bristlecone",
    position: "Software Developer",
    duration: "JULY 2022 - SEP 2024",
    description:
      "At Bristlecone, as Software Developer Built and maintained integration adapters and REST APIs for Oracle Integration Cloud, enhancing connectivity and critical bug fixes",
    logoUrl: "/icons/bristlecone_logo.svg",
    color: "from-orange-400 to-red-500",
  },
];

export const startupWork: StartupWork[] = [
  {
    id: "mgc",
    company: "Mouthguard Company",
    role: "Co-Founder & CTO",
    stage: "Pre-Seed",
    description:
      "Managing digital infrastructure and ensuring seamless customer experience.",
    logoUrl: "/icons/MGC-Logo.svg",
    color: "from-blue-500 to-purple-600",
    focus: [
      "Product Development",
      "Cross-Functional Collaboration",
      "Technical Strategy",
    ],
    website: "https://mouthguardcompany.com/",
    status: "Active",
    startDate: "Jan 2025",
  },
];

export const projects: Project[] = [
  {
    id: "ai-learning-companion",
    title: "AI Learning Companion",
    description:
      "Converso is a real-time, voice-first AI teaching platform built with Next.js. It allows users to create personalized learning Companions—AI tutors tailored to specific subjects and topics. Engage in natural, interactive voice conversations to master new concepts in a fun and effective way.",
    image: "/images/ai-project.svg",
    technologies: [
      {
        name: "Next.js",
        icon: "⚡",
        color: "bg-black text-white dark:bg-white dark:text-black",
      },
      {
        name: "TypeScript",
        icon: "📘",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
      {
        name: "Vapi AI",
        icon: "🤖",
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      {
        name: "Supabase",
        icon: "⚡",
        color: "bg-black-800 text-green-800 dark:bg-white dark:text-green-700",
      },
      {
        name: "Tanstack Router",
        icon: "🔄",
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      {
        name: "Tanstack Query",
        icon: "🔍",
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
    ],
    liveDemo: "https://ai-learning-companion-nine.vercel.app/",
    sourceCode: "https://github.com/junaidahmed-One/ai-learning-companion",
  },
  {
    id: "mgc",
    title: "Mouthguard Company",
    description:
      "Developed a fully responsive e-commerce website for MouthGuard Company, enabling customers to browse, customize, and purchase dental protection products online.",
    image: "/images/mgc_web.svg",
    technologies: [
      {
        name: "Next.js",
        icon: "⚡",
        color: "bg-black text-white dark:bg-white dark:text-black",
      },
      {
        name: "Node.js",
        icon: "🟢",
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
      {
        name: "Stripe",
        icon: "💳",
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
    ],
    liveDemo: "https://mouthguardcompany.com",
    watchVideo: "https://www.instagram.com/mouthguard_company",
  },
  {
    id: "petcare",
    title: "Pet care",
    description:
      "Discover the ultimate pet care platform that combines top-notch services and premium pet food.",
    image: "/images/petcare_project.svg",
    technologies: [
      {
        name: "Next.js",
        icon: "⚡",
        color: "bg-black text-white dark:bg-white dark:text-black",
      },
      {
        name: "Node.js",
        icon: "🟢",
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        color:
          "bg-green-100 text-green-800 dark:bg-blue-900 dark:text-blue-200",
      },
      {
        name: "Stripe",
        icon: "💳",
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
    ],
    liveDemo: "#",
    sourceCode: "#",
    watchVideo: "#",
  },
  {
    id: "wc-tool",
    title: "Command-Line WC tool",
    description:
      "The wc (word count) tool reads a file and counts the number of lines, words, and bytes in the file. This project involves creating a custom version of the wc tool using Node.js.",
    image: "/images/wc_tool_project.svg",
    technologies: [
      {
        name: "Node.js",
        icon: "🟢",
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      {
        name: "JavaScript",
        icon: "📜",
        color:
          "bg-white-100 text-yellow-800 dark:bg-white dark:text-yellow-800",
      },
    ],
    liveDemo: "#",
    sourceCode: "#",
  },
];

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
];
