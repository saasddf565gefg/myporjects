const items = document.querySelectorAll(".item");
// const iconopen = document.getElementById("icon-open");
// const hiddennavbar = document.querySelector(".hiddennavbar");
// const iconclose = document.getElementById("icon-close");
// const fas = document.querySelector(".fas");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("active");
  });
});

// iconopen.addEventListener("click", () => {
//   hiddennavbar.classList.add("active-navbar");
// });

// iconclose.addEventListener("click", () => {
//   hiddennavbar.classList.remove("active-navbar");
// });
