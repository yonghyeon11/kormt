const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})

/* document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".section__bottom ul li").forEach(li => {
        const bgImage = window.getComputedStyle(li).backgroundImage;
        
        // 배경 이미지가 존재하면 'has-bg' 클래스를 추가
        if (bgImage !== "none") {
            li.classList.add("has-bg");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hospital__bottom ul li").forEach(li => {
        const bgImage = window.getComputedStyle(li).backgroundImage;
        
        // 배경 이미지가 존재하면 'has-bg' 클래스를 추가
        if (bgImage !== "none") {
            li.classList.add("has-bg");
        }
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".section__bottom ul li.img-no").forEach(li => {
        li.classList.add("has-bg");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hospital__bottom ul li.img-no").forEach(li => {
        li.classList.add("has-bg");
    });
});




