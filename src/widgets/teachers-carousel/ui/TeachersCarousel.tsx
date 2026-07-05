import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { COURSE_TEACHERS } from '@/entities/course/model/teachers'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './TeachersCarousel.module.scss'

export function TeachersCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateNavState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <p className={styles.subtitle}>
          Практикующие специалисты с реальным опытом в индустрии
        </p>
        <div className={styles.navControls}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Предыдущий преподаватель"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Следующий преподаватель"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className={styles.swiperWrap}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
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
          {COURSE_TEACHERS.map((teacher) => (
            <SwiperSlide key={teacher.name} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.photoWrap}>
                  <img src={teacher.photo} alt={teacher.name} loading="lazy" />
                </div>
                <h4 className={styles.name}>{teacher.name}</h4>
                <p className={styles.role}>{teacher.role}</p>
                <span className={styles.experience}>{teacher.experience}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
