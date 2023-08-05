"use client"
import { Navigation, Pagination, A11y, Zoom, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/zoom';
import Image from 'next/image';


export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title section__title">
        Testimonials 
      </h2>
    
      <div className="sliderContainer">
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={50}
        effect={'coverflow'}
        centeredSlides={true}
        grabCursor={true}
        navigation={
          {
            prevEl: '.prevBtn',
            nextEl: '.nextBtn',
          }
        }
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={
          { 
            clickable: true,
            dynamicBullets: true,
          }
        }
      >
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Image src="/testimonials/person.png" className="slide__img" alt="Пользователь" width={49} height={50}/>
          <p className='slide__text'>Очень хороший отзыв, который оставил довольный клиент. А тут я ещё не придумал что написать, поэтому просто добавил это предложение.</p>
        </SwiperSlide>
       </Swiper>
          <div className='sliderBtns__wrapper'>
            <div className='prevBtn sliderBtn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
      <g filter="url(#filter0_b_256_22)">
      <rect x="47.3513" width="66.9648" height="66.9648" rx="20" transform="rotate(45 47.3513 0)" fill="white" fillOpacity="0.1"/>
      </g>
      <path d="M29.2173 46.5908L40.3428 56.9974C40.6326 57.2684 41.1019 57.2684 41.3916 56.9974C41.6813 56.7264 41.6813 56.2874 41.3916 56.0164L31.5322 46.7941L63.8598 46.7941C64.2698 46.7941 64.6016 46.4838 64.6016 46.1003C64.6016 45.7168 64.2698 45.4065 63.8598 45.4065L31.5322 45.4065L41.3916 36.1843C41.6813 35.9132 41.6813 35.4742 41.3916 35.2033C41.2467 35.0678 41.0569 35 40.8672 35C40.6774 35 40.4876 35.0678 40.3427 35.2033L29.2173 45.6098C28.9276 45.8808 28.9276 46.3198 29.2173 46.5908Z" fill="white"/>
      <defs>
      <filter id="filter0_b_256_22" x="-31.7157" y="-31.7158" width="158.134" height="158.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_256_22"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_256_22" result="shape"/>
      </filter>
      </defs>
              </svg>
            </div>
            <div className='nextBtn sliderBtn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                <g filter="url(#filter0_b_256_22)">
                  <rect x="47.3513" width="66.9648" height="66.9648" rx="20" transform="rotate(45 47.3513 0)" fill="white" fillOpacity="0.1"/>
                </g>
                <path d="M65.7827 48.4092L54.6572 38.0026C54.3674 37.7316 53.8981 37.7316 53.6084 38.0026C53.3187 38.2736 53.3187 38.7126 53.6084 38.9836L63.4678 48.2059L31.1402 48.2059C30.7302 48.2059 30.3984 48.5162 30.3984 48.8997C30.3984 49.2832 30.7302 49.5935 31.1402 49.5935L63.4678 49.5935L53.6084 58.8157C53.3187 59.0868 53.3187 59.5258 53.6084 59.7967C53.7533 59.9322 53.9431 60 54.1328 60C54.3226 60 54.5124 59.9322 54.6573 59.7967L65.7827 49.3902C66.0724 49.1192 66.0724 48.6802 65.7827 48.4092Z" fill="white"/>
                <defs>
                  <filter id="filter0_b_256_22" x="-31.7157" y="-31.7158" width="158.134" height="158.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_256_22"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_256_22" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
      </div>
    </section>
  )
}