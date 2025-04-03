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



document.addEventListener("DOMContentLoaded", function () {
    function updateImages() {
        const isMobile = window.innerWidth <= 768; // 현재 화면 너비 확인

        // 이미지 요소 가져오기
        const whatsappImg = document.querySelector(".floating-container img");
        const arrowImg = document.querySelector(".floating-button img");

        if (whatsappImg) {
            whatsappImg.src = isMobile 
                ? "/img/floating/전화_pc_03.png" 
                : "/img/floating/전화_pc_02.png";
        }

        if (arrowImg) {
            arrowImg.src = isMobile 
                ? "/img/floating/화살표_m.png" 
                : "/img/floating/화살표_pc.png";
        }
    }

    // 초기 로드 시 실행
    updateImages();

    // 화면 크기 변경 시 실행
    window.addEventListener("resize", updateImages);
});



