export function initializeSwiper() {
  // 가격 스와이퍼 (price)
  const priceSwipers = document.querySelectorAll(".price-swiper");
  if (priceSwipers.length) {
    priceSwipers.forEach((element) => {
      new Swiper(element, {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        speed: 300,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: [0, "-50%", 0],
            opacity: 0,
          },
          next: {
            translate: [0, "50%", 0],
            opacity: 0,
          },
        },
        grabCursor: false,
        parallax: true,
      });
    });
  }

  // 컬러 스와이퍼 초기화 함수
  function initColorSwiper(element) {
    return new Swiper(element, {
      direction: "horizontal",
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false,
      },
    });
  }

  // 활성화된 탭의 스와이퍼만 초기화
  function initializeActiveSwiper() {
    const activeContent = document.querySelector(".common-tab-content.active");
    if (activeContent) {
      const swipers = activeContent.querySelectorAll(".color-swiper");
      swipers.forEach((element) => {
        // 이미 초기화된 스와이퍼 제거
        if (element.swiper) {
          element.swiper.destroy();
        }
        initColorSwiper(element);
      });
    }
  }

  // 초기 스와이퍼 초기화
  initializeActiveSwiper();

  // 탭 변경 이벤트에 스와이퍼 초기화 연결
  const tabItems = document.querySelectorAll(".common-tab-menu-item");
  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      // 탭 변경 후 약간의 딜레이를 주고 스와이퍼 초기화
      setTimeout(initializeActiveSwiper, 100);
    });
  });
}
