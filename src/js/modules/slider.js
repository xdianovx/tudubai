import Swiper, { Pagination, Navigation } from 'swiper'
Swiper.use([Pagination, Navigation])

const slider = (selector, config) => {
  const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    pagination: {
      el: '.reviews-slider-pagination',
    },
    breakpoints: {
      621: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1430: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  })

  const upsellSlider = new Swiper('.catalog-upsell-slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.catalog-upsell-arrows .swiper-button-next',
      prevEl: '.catalog-upsell-arrows .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      621: {
        slidesPerView: 2,
        spaceBetween: 16
      },

      1025: {
        slidesPerView: 3,
      },
      1441: {
        slidesPerView: 4,
      },
    },
  })

  const heroCardsSlider = new Swiper('.hero-cards-slider', {
    loop: true,
    breakpoints: {
      621: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1430: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  })
}

export default slider
