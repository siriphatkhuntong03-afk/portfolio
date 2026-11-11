
document.addEventListener("DOMContentLoaded", function () {

    // แสดงปีปัจจุบัน
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ปุ่มกลับไปด้านบน
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // เลื่อนหน้าอย่างนุ่มนวลเมื่อกดเมนู
    document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });

});
