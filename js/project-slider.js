document.addEventListener("DOMContentLoaded", () => {
    let eventsSlider = new Swiper(".swiper-project", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 20,
      pagination: {
        el: ".test-section .test-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".project-btn-next",
        prevEl: ".project-btn-prev"
      },
  
      breakpoints: {
        550: {
          slidesPerView: 1,
          spaceBetween: 30
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
  
        1200: {
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