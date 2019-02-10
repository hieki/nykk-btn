"use strict";

const sleep = (num) => {
  return new Promise(resolve => setTimeout(resolve, num));
};

const allButtons = () => {
  return Array.from(document.getElementsByClassName("btn"));
};

const bindButtons = () => {
  allButtons().forEach(button => {
    button.addEventListener("click", e => {
      const audio = document.getElementById(`audio-${e.target.id}`);
      audio.currentTime = 0;
      audio.play();
    });
  });
};

const bindFlashBackgButton = () => {
  document
    .getElementById("flashback-btn")
    .addEventListener("click", async () => {
      const buttons = allButtons().sort(() => Math.random() - Math.random());
      for (const button of buttons) {
        await sleep(1000);
        button.click();
      }
    });
};

document.addEventListener("DOMContentLoaded", () => {
  bindButtons();
  bindFlashBackgButton();
});
