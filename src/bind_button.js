"use strict";

const allButtons = () => {
  return Array.from(document.getElementsByClassName("btn"));
}

const bindButtons = () => {
  allButtons().forEach(button => {
    button.addEventListener("click", e => {
      const audio = document.getElementById(`audio-${e.target.id}`);
      audio.currentTime = 0;
      audio.play();
    });
  });
}

const bindEverythingButton = () => {
  document.getElementById("everything").addEventListener("click", e => {
    allButtons().forEach(button => {
      button.click();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindButtons();
  bindEverythingButton();
});
