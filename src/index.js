// const items = document.querySelectorAll(".item");
// const iconopen = document.getElementById("icon-open");
// const hiddennavbar = document.querySelector(".hiddennavbar");
// const iconclose = document.getElementById("icon-close");
// const fas = document.querySelector(".fas");

// items.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     item.classList.add("active");
//   });
//   item.addEventListener("mouseout", () => {
//     item.classList.remove("active");
//   });
// });

// iconopen.addEventListener("click", () => {
//   hiddennavbar.classList.add("active-navbar");
// });

// iconclose.addEventListener("click", () => {
//   hiddennavbar.classList.remove("active-navbar");
// });

// smoth scroling
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenelemnts = document.querySelectorAll(".hidden");
hiddenelemnts.forEach((el) => observer.observe(el));
