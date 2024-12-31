document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcome-message");
  const countdownContainer = document.getElementById("countdown-container");
  const countdown = document.getElementById("countdown");
  const message = document.getElementById("message");

  // Function to update the countdown
  function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);
    const diff = nextYear - now;

    if (diff <= 0) {
      countdown.style.display = "none";
      message.classList.remove("hidden");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }

  // Show countdown with fade-in and fade-out transitions
  setTimeout(() => {
    welcomeMessage.classList.add("fade-out");
    setTimeout(() => {
      welcomeMessage.classList.add("hidden");
      countdownContainer.classList.remove("hidden");
      countdownContainer.classList.remove("fade-out");
      countdownContainer.classList.add("fade-in");

      setInterval(updateCountdown, 1000);
      updateCountdown();
    }, 2000); // Wait for fade-out to complete before showing the countdown
  }, 5000); // Display welcome message for 5 seconds
});
