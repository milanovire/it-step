export interface Teacher {
  name: string
  role: string
  photo: string
  experience: string
}

export const COURSE_TEACHERS: Teacher[] = [
  {
    name: 'Иван Иванов',
    role: 'Ведущий преподаватель',
    experience: '12 лет в разработке',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    name: 'Пётр Петров',
    role: 'Старший ментор',
    experience: '9 лет в IT-образовании',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Сергей Сидоров',
    role: 'Преподаватель практики',
    experience: '7 лет коммерческой разработки',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
  {
    name: 'Алексей Алексеев',
    role: 'Ментор проектов',
    experience: '8 лет в продуктовых командах',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Дмитрий Дмитриев',
    role: 'Преподаватель-методист',
    experience: '10 лет в корпоративном обучении',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
]
