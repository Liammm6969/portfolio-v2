export type TechCategory = {
  id: string
  title: string
  items: string[]
}

export const TECH_STACK: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Vercel'],
  },
]
