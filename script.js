"use strict";

//variables
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");
const letter = document.querySelector(".letter");
const reels = document.querySelector(".reels");

//3 buttons function

//candle blow function
const candle = document.getElementById("candle");
candle.addEventListener("click", function () {
  candle.classList.add("hidden");
});

//cake button function
document.getElementById("cakeBtn").addEventListener("click", function () {
  background.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//letter button function
document.getElementById("letterBtn").addEventListener("click", function () {
  letter.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//reels button function
document.getElementById("reelsBtn").addEventListener("click", function () {
  reels.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//close reels function
const closeReels = function () {
  overlay.classList.add("hidden");
  reels.classList.add("hidden");
};

//close reels with btn
document.querySelector(".closeRl").addEventListener("click", closeReels);
//close reels with overlay
reels.addEventListener("click", closeReels);

//close letter function
const closeLetter = function () {
  overlay.classList.add("hidden");
  letter.classList.add("hidden");
};

//close letter with btn
document.querySelector(".closeLt").addEventListener("click", closeLetter);
//close letter with overlay
letter.addEventListener("click", closeLetter);

//close background function
const closeBack = function () {
  overlay.classList.add("hidden");
  background.classList.add("hidden");
};
//close background with btn
document.querySelector(".closeBg").addEventListener("click", closeBack);
//close background with overlay
overlay.addEventListener("click", closeBack);

//audio
const audio = document.getElementById("alwaysForever");
const musicBtn = document.getElementById("musicBtn");

//music loads as soon as page loads
window.onload = function () {
  audio.play();
};

//music toggle button function
musicBtn.addEventListener("click", function () {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
});
