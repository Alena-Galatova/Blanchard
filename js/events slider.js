document.addEventListener("DOMContentLoaded", () => {
    let eventsSlider = new Swiper(".swiper-events", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      },

      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination__events',
        type: "bullets",
        // dynamicBullets: true,img
        // dynamicMainBullets: 3
      },

      navigation: {
        nextEl: ".events-btn-next",
        prevEl: ".events-btn-prev"
      },
  
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20
        },

        576: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },

        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },
  
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },

        1400: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        1600: {
          slidesPerView: 3,
          spaceBetween: 50
        },

        1920: {
          slidesPerView: 3,
          spaceBetween: 50
        }
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

