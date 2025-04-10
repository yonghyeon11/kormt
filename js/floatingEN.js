/* // 플로팅 배너를 동적으로 로드
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
            const newSrc = isMobile ? "/img/floating/전화_pc_03.png" : "/img/floating/전화_pc_02.png";
            if (whatsappImg.src !== window.location.origin + newSrc) {
                whatsappImg.src = newSrc;
            }
        }

        if (arrowImg) {
            const newSrc = isMobile ? "/img/floating/화살표_m.png" : "/img/floating/화살표_pc.png";
            if (arrowImg.src !== window.location.origin + newSrc) {
                arrowImg.src = newSrc;
            }
        }
    }

    // ✅ 최초 로드시 즉시 적용
    updateImages();

    // ✅ 창 크기가 변경될 때 적용
    window.addEventListener("resize", updateImages);
});

 */

/* document.addEventListener("DOMContentLoaded", () => {
    fetch("/floating-bannerKR.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("floatingBannerContainer").innerHTML = html;
            document.getElementById("scrollToTop")?.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
            updateImages(); // 배너 로드 후 이미지 업데이트
        });

    const updateImages = () => {
        const isMobile = window.innerWidth <= 768;
        const images = [
            { selector: ".floating-container img", mobile: "/img/floating/전화_pc_03.png", pc: "/img/floating/전화_pc_02.png" },
            { selector: ".floating-button img", mobile: "/img/floating/화살표_m.png", pc: "/img/floating/화살표_pc.png" }
        ];

        images.forEach(({ selector, mobile, pc }) => {
            const img = document.querySelector(selector);
            if (img) {
                const newSrc = isMobile ? mobile : pc;
                if (img.src !== window.location.origin + newSrc) img.src = newSrc;
            }
        });
    };

    updateImages();
    window.addEventListener("resize", updateImages);
});
 */

/* document.addEventListener("DOMContentLoaded", () => {
    fetch("/floating-bannerEN.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("floatingBannerContainer").innerHTML = html;

            // TOP 버튼 클릭 시 스크롤
            document.getElementById("scrollToTop")?.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });

            // 이미지 업데이트 실행
            updateImages();
        });

    const updateImages = () => {
        const isMobile = window.innerWidth <= 768;

        const images = [
            {
                selector: ".floating-container img",
                mobile: "/img/floating/전화_pc_03.png",
                pc: "/img/floating/전화_pc_02.png"
            },
            {
                selector: ".floating-button img",
                mobile: "/img/floating/화살표_m.png",
                pc: "/img/floating/화살표_pc.png"
            }
        ];

        images.forEach(({ selector, mobile, pc }) => {
            const img = document.querySelector(selector);
            if (img) {
                const newSrc = isMobile ? mobile : pc;
                if (img.src !== window.location.origin + newSrc) {
                    img.src = newSrc;
                }
            }
        });
    };

    // 초기 실행 및 반응형 대응
    updateImages();
    window.addEventListener("resize", updateImages);
}); */

document.addEventListener("DOMContentLoaded", () => {
    fetch("/floating-bannerEN.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("floatingBannerContainer").innerHTML = html;
            document.getElementById("scrollToTop")?.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
            updateImages(); // 배너 로드 후 이미지 업데이트
        });

    const updateImages = () => {
        const isMobile = window.innerWidth <= 768;
        const images = [
            {
                selector: '.floating-container a[href="http://pf.kakao.com/_IExdwn/chat"] img',
                mobile: "/img/floating/카톡상담_pc_03.png",
                pc: "/img/floating/카톡상담_pc_02.png"
            },
            {
                selector: '.floating-container a[href="https://wa.me/message/P7TEF3GFZ7NDG1"] img',
                mobile: "/img/floating/전화_pc_03.png",
                pc: "/img/floating/전화_pc_02.png"
            },
            {
                selector: ".floating-button .arrow-img",
                mobile: "/img/floating/화살표_m.png",
                pc: "/img/floating/화살표_pc.png"
            }
        ];

        images.forEach(({ selector, mobile, pc }) => {
            const img = document.querySelector(selector);
            if (img && img.tagName === 'IMG') {
                const newSrc = isMobile ? mobile : pc;
                if (img.src !== window.location.origin + newSrc) img.src = newSrc;
            } else if (img && img.tagName !== 'IMG') {
                // arrow-img는 배경 이미지로 처리되어 있을 경우
                const newSrc = `url('${isMobile ? mobile : pc}')`;
                img.style.backgroundImage = newSrc;
            }
        });
    };

    updateImages();
    window.addEventListener("resize", updateImages);
});

