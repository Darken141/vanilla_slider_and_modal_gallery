const bullet = document.getElementById("bullet");
const slider = document.getElementsByClassName("custom-slider");
const spanValue = document.getElementById("value");
const modal = document.getElementById("modal");
const closeSpan = document.getElementById("exit");
const modalImg = document.getElementsByClassName("modal-image");
const leftSpan = document.getElementById("left");
const rightSpan = document.getElementById("right");

const images = document.querySelectorAll(".image");

let maxWidth = slider[0].offsetWidth - bullet.offsetWidth;
let value = 100;

bullet.style.left = maxWidth + "px";
let isDown = false;

let modalGallery = [];
let imgIndex = 0;

slider[0].addEventListener("mousedown", (e) => {
  isDown = true;
});

addEventListener("mouseup", (e) => {
  isDown = false;
});

addEventListener("mousemove", (e) => {
  if (isDown) {
    if (e.clientX - 60 > maxWidth) {
      bullet.style.left = maxWidth + "px";
      value = 100;
    } else if (e.clientX - 60 < 0) {
      bullet.style.left = 0;
      value = 0;
    } else {
      bullet.style.left = e.clientX - 60 + "px";
      value = (e.clientX - 60) / (maxWidth / 100);
    }
    spanValue.innerHTML = Math.round(value);
  }
});

[].forEach.call(images, (img, idx) => {
  modalGallery.push(img);
  img.addEventListener("click", (e) => {
    modalImg[0].style.backgroundImage = `url(${img.currentSrc})`;
    modal.style.display = "flex";
    imgIndex = idx;
  });
});

closeSpan.addEventListener("click", (e) => {
  modal.style.display = "none";
});

leftSpan.addEventListener("click", (e) => {
  if (imgIndex === 0) return;
  modalImg[0].style.backgroundImage = `url(${
    modalGallery[--imgIndex].currentSrc
  })`;
});

rightSpan.addEventListener("click", (e) => {
  if (imgIndex === modalGallery.length - 1) return;
  modalImg[0].style.backgroundImage = `url(${
    modalGallery[++imgIndex].currentSrc
  })`;
});
