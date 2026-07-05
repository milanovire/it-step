import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { CourseCard } from '@/entities/course'
import { getPopularCourses } from '@/entities/course/model/courses'
import { ROUTES } from '@/shared/config/routes'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './PopularCoursesSection.module.scss'

export function PopularCoursesSection() {
  const courses = getPopularCourses()
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateNavState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className={styles.section}>
      <div className={styles.bgDecor} aria-hidden>
        <span className={styles.orb1} />
        <span className={styles.orb2} />
        <span className={styles.grid} />
      </div>

      <Container>
        <div className={styles.panel}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionHeadText}>
              <span className={styles.eyebrow}>Программы обучения</span>
              <h2 className={styles.title}>Популярные направления</h2>
              <p className={styles.subtitle}>
                Выберите программу обучения и начните путь в IT уже сегодня
              </p>
            </div>
            <div className={styles.navControls}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft size={18} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                aria-label="Следующий слайд"
              >
                <ChevronRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className={styles.swiperWrap}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className={styles.swiper}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                updateNavState(swiper)
              }}
              onSlideChange={updateNavState}
              onBreakpoint={updateNavState}
              onResize={updateNavState}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.slug} className={styles.slide}>
                  <CourseCard course={course} inCarousel />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.footer}>
            <Button to={ROUTES.itEducation} variant="secondary" size="lg">
              Все направления
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
