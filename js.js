document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".sword-grid article");

  cards.forEach(card => {
    const img = card.querySelector("img");
    const video = card.querySelector(".sword-video");
    const bgColor = card.getAttribute("data-bg");

    img.addEventListener("click", () => {
      const isVisible = video.style.display === "block";

      if (!isVisible) {
        video.style.display = "block";
        video.play();
        activeColors.set(video, bgColor);
      } else {
        video.pause();
        video.style.display = "none";
        activeColors.delete(video);
      }

      updateBackground();
    });

    video.addEventListener("ended", () => {
      setTimeout(() => {
        video.style.display = "none";
        video.currentTime = 0;
        activeColors.delete(video);
        updateBackground();
      }, 2000);
    });
  });
});