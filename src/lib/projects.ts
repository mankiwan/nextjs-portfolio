import { Project } from '@/components/ProjectCard'

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies. This project demonstrates full-stack development skills, including frontend user interface design, backend API development, database management, and third-party integrations.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    category: 'Web Application',
    status: 'completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    liveUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    startDate: '2023-06',
    endDate: '2023-09',
    teamSize: 1,
    myRole: 'Full-Stack Developer',
    challenges: [
      'Implementing secure payment processing',
      'Optimizing database queries for large product catalogs',
      'Building responsive design for mobile users'
    ],
    achievements: [
      'Reduced page load time by 40%',
      'Implemented comprehensive testing suite',
      'Successfully processed $10k+ in demo transactions'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Team Task Management App',
    description: 'Collaborative task management application with real-time updates, file sharing, and team communication features.',
    longDescription: 'A powerful task management application designed for teams. Built with React and Firebase, it features real-time collaboration, drag-and-drop task boards, file attachments, and integrated team chat.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io', 'JavaScript'],
    category: 'Productivity',
    status: 'completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    liveUrl: 'https://taskmanager-demo.example.com',
    githubUrl: 'https://github.com/username/task-manager',
    startDate: '2023-03',
    endDate: '2023-05',
    teamSize: 2,
    myRole: 'Lead Frontend Developer',
    challenges: [
      'Implementing real-time synchronization',
      'Managing complex state with multiple users',
      'Optimizing performance with large datasets'
    ],
    achievements: [
      'Built scalable real-time architecture',
      'Achieved 99.9% uptime',
      'Positive user feedback from beta testing'
    ]
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'Interactive weather dashboard with data visualization, forecasting, and location-based weather alerts.',
    longDescription: 'An advanced weather analytics platform that provides detailed weather information, forecasts, and historical data analysis. Features interactive maps, customizable charts, and intelligent alert systems.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Flask', 'MongoDB', 'Chart.js'],
    category: 'Data Visualization',
    status: 'completed',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    liveUrl: 'https://weather-dashboard.example.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    startDate: '2023-01',
    endDate: '2023-02',
    teamSize: 1,
    myRole: 'Full-Stack Developer',
    challenges: [
      'Processing large datasets efficiently',
      'Creating intuitive data visualizations',
      'Integrating multiple weather APIs'
    ],
    achievements: [
      'Processed 1M+ data points daily',
      'Created responsive design for all devices',
      'Implemented caching for improved performance'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, featuring dark mode, internationalization, and optimized performance.',
    longDescription: 'A showcase of modern web development practices, this portfolio demonstrates skills in React, Next.js, TypeScript, and modern CSS. Features include server-side rendering, internationalization, and performance optimization.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Portfolio',
    status: 'completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: 'https://portfolio.example.com',
    githubUrl: 'https://github.com/username/portfolio',
    startDate: '2023-10',
    endDate: '2023-11',
    teamSize: 1,
    myRole: 'Frontend Developer',
    challenges: [
      'Achieving perfect Lighthouse scores',
      'Implementing smooth animations',
      'Creating accessible user interface'
    ],
    achievements: [
      '100/100 Lighthouse performance score',
      'WCAG 2.1 AA compliance',
      'Sub-second page load times'
    ]
  },
  {
    id: 'blog-platform',
    title: 'Content Management Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comment system, and SEO optimization.',
    longDescription: 'A comprehensive blogging platform that supports markdown writing, user comments, category management, and advanced SEO features. Built with focus on performance and user experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS S3'],
    category: 'Content Management',
    status: 'in-progress',
    featured: false,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    githubUrl: 'https://github.com/username/blog-platform',
    startDate: '2023-12',
    teamSize: 1,
    myRole: 'Full-Stack Developer',
    challenges: [
      'Building efficient content delivery',
      'Implementing SEO best practices',
      'Creating intuitive editor interface'
    ],
    achievements: [
      'Markdown editor with live preview',
      'Automated image optimization',
      'Advanced caching strategies'
    ]
  },
  {
    id: 'mobile-fitness-app',
    title: 'Mobile Fitness Tracking App',
    description: 'Cross-platform mobile app for fitness tracking, workout planning, and progress monitoring.',
    longDescription: 'A comprehensive fitness application that helps users track workouts, plan routines, and monitor their fitness progress. Features social sharing, progress analytics, and personalized recommendations.',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'GraphQL'],
    category: 'Mobile App',
    status: 'archived',
    featured: false,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    githubUrl: 'https://github.com/username/fitness-app',
    startDate: '2022-08',
    endDate: '2022-12',
    teamSize: 3,
    myRole: 'Mobile Developer',
    challenges: [
      'Optimizing performance on mobile devices',
      'Implementing offline functionality',
      'Creating intuitive user workflows'
    ],
    achievements: [
      'Published on both iOS and Android',
      '500+ downloads in first month',
      'Featured in local tech showcase'
    ]
  }
]

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category)
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status)
}

export const projectCategories = [
  'All',
  'Web Application',
  'Mobile App', 
  'Data Visualization',
  'Portfolio',
  'Content Management',
  'Productivity'
]