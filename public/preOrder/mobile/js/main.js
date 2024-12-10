import { initializeTabs } from "./tab.js";
import { initializeNotice } from "./notice.js";
import { initializeSwiper } from "./swiper.js";
import { initializeCountdown } from "./countDown.js";
import { initializeAccordion } from "./accordian.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initializeSwiper();
    initializeTabs();
    initializeNotice();
    initializeCountdown();
    initializeAccordion();
  }, 100);
});
