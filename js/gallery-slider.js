document.addEventListener("DOMContentLoaded", () => {
    let gallerySlider = new Swiper(".slides-container", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 20,
      pagination: {
        el: ".swiper-gallery .gallery-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev"
      },
  
      breakpoints: {

        440: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30
        },

        500: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30
        },

        576: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30
        },

        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },

        1000: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
  
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },

        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },

      },
  
      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }, // можно управлять с клавиатуры стрелками влево/вправо
  
      // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "slide-visible",
  
      on: {
        init: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        },
        slideChange: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        }
      }
  
      // on: {
      //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
      //   beforeResize: function () {
      //     this.slides.forEach((el) => {
      //       el.style.marginTop = "";
      //     });
      //   }
      // }
    });
  });
  