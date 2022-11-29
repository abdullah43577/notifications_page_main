"use strict";
const boxes = document.querySelectorAll(".message__Container");

const toggleAllRead = () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "#f3f3f3";
  });
  document.querySelector(".No3").textContent = "0";
  document.querySelector(".notificationSect > button").disabled = true;
  document.querySelector(".notificationSect > button").style.color = "gray";
};
