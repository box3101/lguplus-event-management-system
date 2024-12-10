export function initializeAccordion() {
  const accordions = document.querySelectorAll(".accordion"); // 모든 아코디언 선택
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    const content = accordion.querySelector(".accordion-content");
    if (!content) return;

    // 초기 상태 설정
    content.style.display = "none";

    // 각 아코디언에 클릭 이벤트 추가
    accordion.addEventListener("click", () => {
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
      accordion.classList.toggle("active");
    });
  });
}
