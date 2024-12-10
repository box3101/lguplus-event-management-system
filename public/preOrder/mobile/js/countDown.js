export function initializeCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;
  const toast = document.querySelector(".toast-message");

  // 고정된 종료 시간 설정
  const endDate = new Date("2024-12-31T23:59:00");

  function updateCountdown() {
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      toast.style.display = "none";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.textContent = `${days}일 ${hours}시간 ${minutes}분`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  const closeButton = toast.querySelector(".toast-message-close");
  closeButton.addEventListener("click", () => {
    toast.style.display = "none";
  });
}
