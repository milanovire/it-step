import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from 'lucide-react'

import { StarIcon } from '@/shared/ui/StarIcon'
import { Container } from '@/shared/ui/Container'
import { reviews } from '../model/reviews'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './ReviewsSection.module.scss'

export function ReviewsSection() {
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
              <span className={styles.eyebrow}>
                Отзывы слушателей
              </span>

              <h2 className={styles.title}>
                Что говорят наши выпускники
              </h2>

              <p className={styles.subtitle}>
                Более 100 слушателей уже начали карьеру в IT благодаря нашим программам обучения.
              </p>
            </div>

            <div className={styles.navControls}>
              <button type="button"className={styles.navBtn} onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning}>
                <ChevronLeft size={18} strokeWidth={2.2} />
              </button>

              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
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
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
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
              {reviews.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className={styles.slide}
                >
                  <article className={styles.card}>
                    <div className={styles.rating}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                    <StarIcon
                        key={index}
                        className={styles.star}
                    />
                    ))}
                    </div>

                    <p className={styles.text}>
                      {review.text}
                    </p>

                    <div className={styles.author}>
                      <strong>{review.author}</strong>
                      <span>{review.course}</span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.footer}>
            <div className={styles.platforms}>
              <a href="https://www.google.com/search?sca_esv=630f4fbcc449dd86&sxsrf=APpeQnuLuNlfAqf1Gg0IzkJpOBvRgcufkg:1784485554331&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3iMWapDC1zyq-OEOmbr-zoEVBR0bD30ZOTH_fLjMWHy2BXO_TcDpSnzwr76Y0UIBALWXDKM7TR2FpENqT9JbHoZpPx2muw73IYVy1NeoCVOJz006r2t9mb8GgqbcXhPKzVQQkkGPqA8qQn_BPziNNR4i7hsCXj2rnPezZrW5lhpIqj9cZ8NiL0YPXtXEr9nL-brY8Y%3D&q=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F+%D0%A8%D0%90%D0%93,+%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B5+%D0%BA%D1%83%D1%80%D1%81%D1%8B+%D0%B2+%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%B5+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwi__8ncrt-VAxUxQvEDHYWiPGcQ0bkNegQIPhAH&biw=1536&bih=730&dpr=1.25"  
              target ="_blank" className={styles.platform} >
                <span>Google</span>
                <small>★ 4.9 • 240 отзывов</small>
              </a>

              <a href="https://yandex.by/maps/org/kompyuternaya_akademiya_shag/32271056665/reviews/?ll=30.222974%2C55.178500&z=4" target="_blank" className={styles.platform} >
                <span>Яндекс</span>
                <small>★ 4.7 • 28 отзывов</small>
              </a>
            </div>

            <a
              href="https://yandex.by/maps/org/kompyuternaya_akademiya_shag/32271056665/reviews/?ll=30.222974%2C55.178500&z=4"
              target="_blank" className={styles.allReviews}
            >
              Все отзывы
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}