// Importlar en üstte olmalı
import Swiper, { Navigation, Pagination } from 'swiper';
import '/src/sass/style.scss';
import '../sass/style.scss';

// Ana swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// Menü açma-kapama
const burger = document.querySelector(".burger"),
      close = document.querySelector(".header__menu-close"),
      menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu__active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu__active");
    document.body.style.overflow = "";
});

// works__slider swiper'ı (try-catch ile hata önlemek için)
try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            1920: {
                spaceBetween: 35
            },
        },
        modules: [Navigation, Pagination],
    });
} catch (e) {
    // Hata varsa sessizce yut
}

// Katalog tab sistemi
try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    // İlk içerik gösterimi
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {
    // Hata varsa sessizce yut
}

// Not: "display: block" olan yerleri ihtiyacına göre "flex" yapabilirsin.
