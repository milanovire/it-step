import { createHashRouter } from 'react-router-dom'
import { Layout } from '@/widgets/layout'
import { HomePage } from '@/pages/home'
import { ItEducationPage } from '@/pages/it-education'
import { CourseDetailPage } from '@/pages/course-detail'
import { CtPrepPage } from '@/pages/ct-prep'
import { NewsPage } from '@/pages/news'
import { NewsDetailPage } from '@/pages/news-detail'
import { VacanciesPage } from '@/pages/vacancies'
import { VacancyDetailPage } from '@/pages/vacancy-detail'
import { ItStepRbPage } from '@/pages/it-step-rb'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'it-education', element: <ItEducationPage /> },
      { path: 'courses/:slug', element: <CourseDetailPage /> },
      { path: 'ct-prep', element: <CtPrepPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:slug', element: <NewsDetailPage /> },
      { path: 'vacancies', element: <VacanciesPage /> },
      { path: 'vacancies/:slug', element: <VacancyDetailPage /> },
      { path: 'it-step-rb', element: <ItStepRbPage /> },
    ],
  },
])