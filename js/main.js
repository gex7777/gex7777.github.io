const hexifyBtn = document.querySelector(".hexify");
const xaviersBtn = document.querySelector(".xaviers");
const upworkBtn = document.querySelector(".upwork");
document.querySelector(".hexify-desc").classList.add("active");
hexifyBtn.classList.add("button-clicked");
hexifyBtn.addEventListener("click", () => {
  document.querySelector(".upwork-desc").classList.remove("active");
  document.querySelector(".hexify-desc").classList.add("active");
  hexifyBtn.classList.add("button-clicked");
  upworkBtn.classList.remove("button-clicked");
  xaviersBtn.classList.remove("button-clicked");
  document.querySelector(".xaviers-desc").classList.remove("active");
});
xaviersBtn.addEventListener("click", () => {
  document.querySelector(".hexify-desc").classList.remove("active");
  document.querySelector(".xaviers-desc").classList.add("active");
  xaviersBtn.classList.add("button-clicked");
  document.querySelector(".upwork-desc").classList.remove("active");
  upworkBtn.classList.remove("button-clicked");
  hexifyBtn.classList.remove("button-clicked");
});
upworkBtn.addEventListener("click", () => {
  document.querySelector(".upwork-desc").classList.add("active");
  upworkBtn.classList.add("button-clicked");
  document.querySelector(".hexify-desc").classList.remove("active");
  document.querySelector(".xaviers-desc").classList.remove("active");
  hexifyBtn.classList.remove("button-clicked");
  xaviersBtn.classList.remove("button-clicked");
});
