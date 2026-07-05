import { createBrowserRouter } from 'react-router-dom'
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
import { ROUTES } from '@/shared/config/routes'

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.home,
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ROUTES.itEducation, element: <ItEducationPage /> },
        { path: '/courses/:slug', element: <CourseDetailPage /> },
        { path: ROUTES.ctPrep, element: <CtPrepPage /> },
        { path: ROUTES.news, element: <NewsPage /> },
        { path: '/news/:slug', element: <NewsDetailPage /> },
        { path: ROUTES.vacancies, element: <VacanciesPage /> },
        { path: '/vacancies/:slug', element: <VacancyDetailPage /> },
        { path: ROUTES.itStepRb, element: <ItStepRbPage /> },
      ],
    },
  ],
  {
    basename: '/it-step',
  },
)