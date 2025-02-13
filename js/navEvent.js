document.addEventListener("DOMContentLoaded", function() {
    // 현재 URL 경로 가져오기
    const currentPath = window.location.pathname;

    // 모든 메뉴 항목을 가져옴
    const menuItems = document.querySelectorAll("ul li a");

    // 각 메뉴 항목을 반복하며 URL과 비교
    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPath) {
            item.classList.add("active");
        }
    });
});