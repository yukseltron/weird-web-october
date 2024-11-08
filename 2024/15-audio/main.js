document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("audio");
  const circle = document.querySelector(".circle");

  audio.addEventListener("play", function() {
    circle.classList.add("spin-active");
    circle.style.animationPlayState = "running";
  });

  audio.addEventListener("pause", function() {
    circle.style.animationPlayState = "paused";
  });
});

const recordArm = document.querySelector(".record-arm");
recordArm.addEventListener("click", function() {
  if (recordArm.classList.contains("record-arm-active")) {
    recordArm.classList.remove("record-arm-active");
    recordArm.style.transform = "rotate(0deg)";
    audio.pause();
  } else {
    recordArm.classList.add("record-arm-active");
    recordArm.style.transform = "rotate(-90deg)";
    audio.play();
  }
});

