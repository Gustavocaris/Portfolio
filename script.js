


let swiper = createSwiper (".mySwiper", ".swiper-pagination",".swiper-button-next",".swiper-button-prev")


function createSwiper (container, pagination, nextButton, prevButton){
  return new Swiper(container, {
    slidesPerView: handlewidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
    nextEl: "nextButton",
    prevEl: "prevButton",
    },
  });
}




let header = document.getElementById('header')

function handlewidth() {
  let getwidth = window.innerWidth || document.documentElement.clientWidth;
  let slideshow = 3;

  if (getwidth < 1001) {
    slideshow = 2;
  }

  if (getwidth < 700) {
    slideshow = 1;
  }

  return slideshow
}


window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handlewidth();
  swiper.update();
})


window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.style.background = '#191919'
    } else {
    header.style.background = 'transparent'
    }

})