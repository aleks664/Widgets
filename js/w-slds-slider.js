const wSldsSlider = (selector) => {
  const widgets = document.querySelectorAll(selector);
  widgets.forEach($widget=> {
      const $carousel = $widget.querySelector('.swiper');
      const $carouselCards = $widget.querySelector('.swiper');
      const $prev = $widget.querySelector('.w-slds-prev');
      const $next = $widget.querySelector('.w-slds-next');
      const $pagination = $widget.querySelector('.swiper-pagination');
      const optionsCarousel = {
          spaceBetween: 0,
          slidesPerView: 1
      }
      if ($next && $prev && !optionsCarousel.navigation) {
          optionsCarousel.navigation =  {
              nextEl: $prev,
              prevEl: $next,
          }
      }
      if ($pagination && !optionsCarousel.pagination) {
          optionsCarousel.pagination =  {
              el: $pagination,
              type: 'bullets',
              clickable: true
          }
      }
      const optionsСompute = () => {
          const carouselW = $carousel.offsetWidth;
          const cardW = 300;
          console.log(carouselW)
          if (carouselW < 680) {
              $widget.classList.add('carousel-phone')
              $widget.classList.remove('carousel-tablet')
          } else if (carouselW  > 571 && carouselW < 992 ) {
              $widget.classList.add('carousel-tablet')
              $widget.classList.remove('carousel-phone')
          } else {
              $widget.classList.remove('carousel-phone')
              $widget.classList.remove('carousel-tablet')
          }
      }

      const swiper = new Swiper($carousel, optionsCarousel);
      optionsСompute();
      window.addEventListener('resize', function() {
          optionsСompute();
      }, true);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
    wSldsSlider('.w-slds-slider');
    marketingToggle('[data-marketing-toggle]');
});


