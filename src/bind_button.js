document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.getElementsByClassName("btn"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const audio = document.getElementById(`audio-${e.target.id}`);
      audio.currentTime = 0;
      audio.play();
    });
  });
});
