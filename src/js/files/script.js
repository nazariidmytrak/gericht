// Подключение функционала "Чертогов Фрилансера"
//import { isMobile } from "./functions.js";
// Подключение списка активных модулей
//import { flsModules } from "./modules.js";

window.addEventListener("load", function (e) {
  const bg = this.document.querySelectorAll('[data-bg]');
  if (bg.length) {
    bg.forEach(bgItem => {
      bgItem.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`);
    });
  }

  if (document.querySelector('.video-module')) {
    document.addEventListener("watcherCallback", function (e) {
      const entry = e.detail.entry;
      const targetElement = entry.target;
      if (targetElement.dataset.watch === 'video' && !targetElement.classList.contains('_init')) {
        if (entry.isIntersecting) {
          // Видим объект
          targetElement.querySelector('video').play();
        } else {
          // Не видим объект
          targetElement.querySelector('video').pause();
        }
      }
    });
    const videoModule = document.querySelector('.video-module');
    videoModule.addEventListener("click", function (e) {
      if (!videoModule.classList.contains('_init')) {
        videoModule.querySelector('video').src = videoModule.querySelector('video').dataset.full;
        videoModule.classList.add('_active');
        videoModule.classList.add('_init');
        videoModule.querySelector('video').play();
        videoModule.querySelector('video').muted = false;
      } else {
        if (videoModule.querySelector('video').paused) {
          videoModule.querySelector('video').play();
        } else {
          videoModule.querySelector('video').pause();
        }
        videoModule.classList.toggle('_active');
      }
    });
  }
  
});
