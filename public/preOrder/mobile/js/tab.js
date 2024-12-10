export function initializeTabs() {
  const tabGroups = document.querySelectorAll(".tab-group");
  if (!tabGroups.length) return;

  tabGroups.forEach((group) => {
    const tabMenu = group.querySelector(".common-tab-menu");
    if (!tabMenu) return;

    const tabItems = tabMenu.querySelectorAll(".common-tab-menu-item");
    const tabContents = group.querySelectorAll(".common-tab-content");

    function switchTab(targetTab) {
      tabItems.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      const activeTab = tabMenu.querySelector(`[data-tab="${targetTab}"]`);
      const activeContent = group.querySelector(`#${targetTab}`);

      if (activeTab && activeContent) {
        activeTab.classList.add("active");
        activeContent.classList.add("active");

        // 하위 탭 그룹이 있다면 첫 번째 탭과 컨텐츠를 활성화
        const subTabGroup = activeContent.querySelector(".tab-group");
        if (subTabGroup) {
          const firstSubTab = subTabGroup.querySelector(
            ".common-tab-menu-item"
          );
          const firstSubContent = subTabGroup.querySelector(
            ".common-tab-content"
          );

          if (firstSubTab && firstSubContent) {
            // 기존 active 클래스 제거
            subTabGroup
              .querySelectorAll(".common-tab-menu-item")
              .forEach((item) => {
                item.classList.remove("active");
              });
            subTabGroup
              .querySelectorAll(".common-tab-content")
              .forEach((content) => {
                content.classList.remove("active");
              });

            // 첫 번째 탭과 컨텐츠 활성화
            firstSubTab.classList.add("active");
            firstSubContent.classList.add("active");
          }
        }
      }
    }

    tabMenu.addEventListener("click", (e) => {
      const targetElement = e.target.closest(".common-tab-menu-item");
      if (targetElement && !e.target.classList.contains("color-btn")) {
        const targetTab = targetElement.getAttribute("data-tab");
        switchTab(targetTab);
      }
    });
  });

  // 초기 로드 시 첫 번째 탭의 하위 탭도 활성화
  const firstActiveContent = document.querySelector(
    ".common-tab-content.active"
  );
  if (firstActiveContent) {
    const subTabGroup = firstActiveContent.querySelector(".tab-group");
    if (subTabGroup) {
      const firstSubTab = subTabGroup.querySelector(".common-tab-menu-item");
      const firstSubContent = subTabGroup.querySelector(".common-tab-content");
      if (firstSubTab && firstSubContent) {
        firstSubTab.classList.add("active");
        firstSubContent.classList.add("active");
      }
    }
  }
}
