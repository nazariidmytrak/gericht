import {gallery} from "./gallery.js";

/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Pagination, EffectFade, Lazy, Autoplay, FreeMode} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
import {flsModules} from "./modules.js";
import lightGallery from "lightgallery";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    //Main-slider
    if (document.querySelector('.body-main-slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.body-main-slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, EffectFade, Lazy,],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 1000,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },


            // Эффекты
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.body-main-slider__controll',
                clickable: true,
            },

            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.swiper-button-prev',
            // 	nextEl: '.swiper-button-next',
            // },

            // Брейкпоинты
            breakpoints: {
                320: {
                    autoHeight: true,
                },
                992: {
                    autoHeight: false,
                },
            },

            // События
            on: {
                init: function () {
                    const controll = document.querySelectorAll('.body-main-slider__controll .swiper-pagination-bullet');
                    controll.forEach((el, index) => {
                        let num = index < 10 ? `0` : '';
                        el.innerHTML = `${num}${index + 1}`;
                        //Виводить булети в цифровому вигляді
                    });
                },
                breakpoint: function (swiper, info) {
                    !info.autoHeight ? document.querySelector('.body-main-slider__wrapper').style.height = 'auto' : '';
                    swiper.updateSize(); //Фікс autoheight
                }
            }
        });
    }

    // Gallery Init
    let gallery = lightGallery(document.querySelector('[data-gallery]'), {
        // plugins: [lgZoom, lgThumbnail],
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
    });
    let i = 0;

    //Gallery-slider
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.gallery__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        let gallerySlider = new Swiper('.gallery__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Lazy, Autoplay, FreeMode],
            freeMode: {
                enabled: true,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 32,
            autoHeight: false,
            speed: 1000,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: false,
            resistanceRatio:0,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },


            // Эффекты
            // effect: 'fade',
            autoplay: {
                stopOnLastSlide: false,
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            // pagination: {
            // 	el: '.body-main-slider__controll',
            // 	clickable: true,
            // },

            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.swiper-button-prev',
            // 	nextEl: '.swiper-button-next',
            // },

            // Брейкпоинты
            breakpoints: {},

            // События
            on: {

                slideChange: function (swiper) {
                    i++;


                    /*
                    if (i === 3) {
                        gallery.destroy()
                        gallery = lightGallery(document.querySelector('[data-gallery]'), {
                            // plugins: [lgZoom, lgThumbnail],
                            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
                            speed: 500,
                        })

                        i = 0;
                    }
                    */


                }
            }
        });

        function gallerySliderFix(params) {
            const galleryContainer = document.querySelector('.gallery__container');
            const diff = (window.innerWidth - galleryContainer.offsetWidth) / 2;
            if (diff > 0) {
                document.querySelector('.gallery__slider').style.width = document.querySelector('.gallery__body').offsetWidth + diff + 15 + 'px';
            } else {
                document.querySelector('.gallery__slider').style.width = document.querySelector('.gallery__body').offsetWidth + 15 + 'px';
            }
        }

        window.addEventListener("resize", gallerySliderFix);
        gallerySliderFix();
        gallerySlider.update();
    }

    //Bar-slider
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.body-bar-slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.body-bar-slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Lazy, FreeMode, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 64,
            autoHeight: true,
            speed: 1000,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },


            // Эффекты
            // effect: 'fade',
            autoplay: {
                stopOnLastSlide: false,
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.body-bar-slider__controll',
                clickable: true,
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.swiper-button-prev',
            // 	nextEl: '.swiper-button-next',
            // },

            // Брейкпоинты
            breakpoints: {},

            // События
            on: {
                init: function () {
                    const controllBar = document.querySelectorAll('.body-bar-slider__controll .swiper-pagination-bullet');
                    controllBar.forEach((el, index) => {
                        let num = index < 10 ? `0` : '';
                        el.innerHTML = `${num}${index + 1}`;
                        //Виводить булети в цифровому вигляді
                    });
                },
            }
        });
    }
}


// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});

