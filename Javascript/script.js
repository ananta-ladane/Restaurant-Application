AOS.init();



// const openBtn = () => {
//   document.querySelector("#sidebar").classList.add("active");
// }


const obtn = document.querySelector("#openBtn");
const list = document.querySelector("#sidebar");
const clsbtn = document.querySelector("#clsbtn");

obtn.addEventListener("click", () => {
  list.classList.add("active");
});

clsbtn.addEventListener("click", () => {
  list.classList.remove("active")
});