export type EducationItem = {
  id: string
  school: string
  program: string
  years: string
  location?: string
  achievements?: string[]
  coursework?: string[]
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'college',
    school: "Saint Mary's University",
    program: 'BS Information Technology',
    years: '2022 — 2026',
    location: 'Bayombong, Philippines',
    achievements: [
      "Graduated with Academic Distinction",
      "Dean's List (2022-2023), First Semester",
      'Bronze Merit (2023-2024), Second Semester',
      "Dean's List (2024-2025), Second Semester",
      "Dean's List (2025-2026), First Semester",
    ],
    coursework: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Database Systems',
      'Software Engineering',
    ],
  },
  {
    id: 'senior-high',
    school: 'Saint Vincent School',
    program: 'ABM',
    years: '2020 — 2022',
    location: 'Maddela, Philippines',
    achievements: [
      'Graduated with Distincion',
    ],
    coursework: [
    ],
  },
]
