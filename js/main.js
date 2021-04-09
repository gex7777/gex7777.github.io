const hexifyBtn = document.querySelector(".hexify");
const xaviersBtn = document.querySelector(".xaviers");
const upworkBtn = document.querySelector(".upwork");
const hexifyDesc = document.querySelector(".hexify-desc");
const xaviersDesc = document.querySelector(".xaviers-desc");
const upworkDesc = document.querySelector(".upwork-desc");
const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
hexifyDesc.classList.add("active");
hexifyBtn.classList.add("button-clicked");
hexifyBtn.addEventListener("click", () => {
  upworkDesc.classList.remove("active");
  hexifyDesc.classList.add("active");
  hexifyBtn.classList.add("button-clicked");
  upworkBtn.classList.remove("button-clicked");
  xaviersBtn.classList.remove("button-clicked");
  xaviersDesc.classList.remove("active");
});
xaviersBtn.addEventListener("click", () => {
  hexifyDesc.classList.remove("active");
  xaviersDesc.classList.add("active");
  xaviersBtn.classList.add("button-clicked");
  upworkDesc.classList.remove("active");
  upworkBtn.classList.remove("button-clicked");
  hexifyBtn.classList.remove("button-clicked");
});
upworkBtn.addEventListener("click", () => {
  upworkDesc.classList.add("active");
  upworkBtn.classList.add("button-clicked");
  hexifyDesc.classList.remove("active");
  xaviersDesc.classList.remove("active");
  hexifyBtn.classList.remove("button-clicked");
  xaviersBtn.classList.remove("button-clicked");
});
openBtn.addEventListener("click", () => {
  document.querySelector(".nav-links").style.display = "block";
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".nav-links").style.display = "none";
});
