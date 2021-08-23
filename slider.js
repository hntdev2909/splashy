const listNodeSwiperDesktopImage = document.querySelectorAll(".swiper__image");
const listNodeSwiperMobileImage = document.querySelectorAll(".swiper__image");
const desktopSwiperList = document.querySelector(".swiper__list");
const mobileSwiperList = document.querySelector(".swiper__mobile_list");
const backgroundDesktop = document.querySelector(".background__desktop");
const backgroundMobile = document.querySelector(".description__background");

const listPosXOfDesktop = [
  85, -270, -620, -970, -1320, -1670, -2020, -2370, -2720, -3070, -3420, -3770, -4120,
  -4470, -4820, -5170, -5520, -5870, -6220, -6570,
];

const listPosXOfMobile = [
  25, -165, -355, -550, -740, -930, -1120, -1310, -1500, -1690, -1885, -2075,
  -2265, -2455, -2645, -2840, -3030, -3220, -3410, -3600,
];

let currentIndex = 0;
let index = 1;
setInterval(() => {
  desktopSwiperList.style.transform = `translateX(${listPosXOfDesktop[currentIndex]}px)`;
  mobileSwiperList.style.transform = `translateX(${listPosXOfMobile[currentIndex]}px)`;
  const currentBackground = window
    .getComputedStyle(listNodeSwiperDesktopImage[currentIndex])
    .getPropertyValue("background-image");
  backgroundDesktop.style.background = `${currentBackground}`;
  backgroundMobile.style.background = `${currentBackground}`;
  if (index === 20) index = 1;
  else index++;
  if (currentIndex === 19) currentIndex = 0;
  else currentIndex++;
}, 2000);
