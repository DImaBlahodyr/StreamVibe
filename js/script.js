'use strict'

window.addEventListener('load', windowLoad)
const html = document.documentElement

function windowLoad() {
  html.classList.add('loaded')
  document.addEventListener('click', documentActions)
  scrollActions()
  slidersInit()
}

const logo = document.querySelector('#scroll-up')

logo.addEventListener('click', function (event) {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

function documentActions(e) {
  const type = e.type
  const targetElement = e.target

  if (type === 'click') {
    if (targetElement.closest('.icon-menu')) {
      html.classList.toggle('menu-open')
      bodyLock(html.classList.contains('menu-open'))
    }
    if (
      targetElement.closest('.menu__link') &&
      html.classList.contains('menu-open')
    ) {
      html.classList.remove('menu-open')
      bodyLock(false)
    }
  }
}

function scrollActions() {
  window.addEventListener('scroll', scrollAction)

  function scrollAction() {
    const header = document.querySelector('.header')
    header.classList.toggle('header--scroll', scrollY > 20)
  }
}

// swiper

function slidersInit() {
  const sliderListFiveItems = new Swiper('.slider__list', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls__arrow--left',
      nextEl: '.controls__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls__bullets',
      clickable: true,
      bulletClass: `controls__bullet-item`,
      bulletActiveClass: `controls__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  const sliderPopular = new Swiper('.slider__list-popular', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-popular__arrow--left',
      nextEl: '.controls-popular__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-popular__bullets',
      clickable: true,
      bulletClass: `controls-popular__bullet-item`,
      bulletActiveClass: `controls-popular__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  const sliderTrending = new Swiper('.slider__list-trending', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-trending__arrow--left',
      nextEl: '.controls-trending__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-trending__bullets',
      clickable: true,
      bulletClass: `controls-trending__bullet-item`,
      bulletActiveClass: `controls-trending__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  const sliderNewReleases = new Swiper('.slider__list-new', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-new__arrow--left',
      nextEl: '.controls-new__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-new__bullets',
      clickable: true,
      bulletClass: `controls-new__bullet-item`,
      bulletActiveClass: `controls-new__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  const sliderMustMovies = new Swiper('.slider__list-must-movies', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-must-movies__arrow--left',
      nextEl: '.controls-must-movies__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-must-movies__bullets',
      clickable: true,
      bulletClass: `controls-must-movies__bullet-item`,
      bulletActiveClass: `controls-must-movies__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  })

  const sliderPopularShows = new Swiper('.slider__list-popular-shows', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-popular-shows__arrow--left',
      nextEl: '.controls-popular-shows__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-popular-shows__bullets',
      clickable: true,
      bulletClass: `controls-popular-shows__bullet-item`,
      bulletActiveClass: `controls-popular-shows__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  const sliderTrendingShows = new Swiper('.slider__list-trending-shows', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-trending-shows__arrow--left',
      nextEl: '.controls-trending-shows__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-trending-shows__bullets',
      clickable: true,
      bulletClass: `controls-trending-shows__bullet-item`,
      bulletActiveClass: `controls-trending-shows__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 610px
      610: {
        slidesPerGroup: 3,
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      // when window width is >= 778px
      778: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      900: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  })

  const sliderNewShows = new Swiper('.slider__list-new-shows', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-new-shows__arrow--left',
      nextEl: '.controls-new-shows__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-new-shows__bullets',
      clickable: true,
      bulletClass: `controls-new-shows__bullet-item`,
      bulletActiveClass: `controls-new-shows__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 610px
      610: {
        slidesPerGroup: 3,
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      // when window width is >= 778px
      778: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      900: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  })

  const sliderMustShows = new Swiper('.slider__list-must-shows', {
    // Navigation arrows
    navigation: {
      prevEl: '.controls-must-shows__arrow--left',
      nextEl: '.controls-must-shows__arrow--right',
    },

    // Pagination
    pagination: {
      el: '.controls-must-shows__bullets',
      clickable: true,
      bulletClass: `controls-must-shows__bullet-item`,
      bulletActiveClass: `controls-must-shows__bullet-item--active`,
    },
    scrollbar: {
      snapOnRelease: true,
      dragSize: 20,
      el: '.slider__scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerGroup: 2,
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // when window width is >= 600px
      600: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 850px
      850: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  })
}
