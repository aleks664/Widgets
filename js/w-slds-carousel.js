const wSldsCarousel = (selector) => {
  const widgets = document.querySelectorAll(selector);
  widgets.forEach($widget=> {
      const $carousel = $widget.querySelector('.swiper');
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
          const countSlides = Math.floor(carouselW/cardW) >= 3 ?
             3: Math.floor(carouselW/cardW) === 0 || Math.floor(carouselW/cardW) ===1 ? 1: 2
          if (countSlides === 1) {
              $widget.classList.add('has-one-slide')
          } else {
              $widget.classList.remove('has-one-slide')
          }
          swiper.params.slidesPerView = countSlides;
          swiper.update();
      }

      const swiper = new Swiper($carousel, optionsCarousel);
      optionsСompute();
      window.addEventListener('resize', function() {
          optionsСompute();
      }, true);
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
    wSldsCarousel('.w-slds-carousel');
    marketingToggle('[data-marketing-toggle]');
});


