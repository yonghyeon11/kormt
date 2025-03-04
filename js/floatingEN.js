// 플로팅 배너를 동적으로 로드
fetch("/floating-bannerEN.html")
.then(response => response.text())
.then(html => {
    document.getElementById("floatingBannerContainer").innerHTML = html;
    
    // 플로팅 배너가 로드된 후 이벤트 리스너 추가
    const scrollButton = document.getElementById("scrollToTop");
    const imageElement = document.getElementById("floatingImage");

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


