const btn1 = document.querySelector(".btn-1");
const mainPanel = document.querySelector(".main-panel");
const btn2 = document.querySelector(".btn-2");
const secondPanel = document.querySelector(".second-panel");
const mainBg = document.querySelector(".main-bg");
const thirdPanel = document.querySelector(".third-panel");
const btn3 = document.querySelector(".btn-3");
const tmPanel = document.querySelector(".tm-panel");
const btn4 = document.querySelector(".btn-4");


btn1.addEventListener('click', () => {
    mainPanel.classList.add("active");
    secondPanel.classList.remove("active");
    thirdPanel.classList.remove("active");
    tmPanel.classList.remove("active");   
}) 

btn2.addEventListener('click', () => {
    secondPanel.classList.add("active");
    mainPanel.classList.remove("active");
    thirdPanel.classList.remove("active");
    tmPanel.classList.remove("active");   
}) 

btn3.addEventListener('click', () => {
    thirdPanel.classList.add("active");
    mainPanel.classList.remove("active");
    secondPanel.classList.remove("active");
    tmPanel.classList.remove("active");   
}) 

btn4.addEventListener('click', () => {
    tmPanel.classList.add("active");
    thirdPanel.classList.remove("active");
    secondPanel.classList.remove("active");
    mainPanel.classList.remove("active");   
}) 

