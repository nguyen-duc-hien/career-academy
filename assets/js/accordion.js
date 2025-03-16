document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-item").forEach(item => {
        item.addEventListener("click", function () {
            const title = this.querySelector(".accordion-title");
            const img = this.querySelector(".accordion-show-more img");

            // Đóng tất cả accordion trước khi mở cái được click
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".accordion-title").classList.remove("text-neutralc-800");
                    otherItem.querySelector(".accordion-show-more img").src = "/assets/image/icon/plus-round-white.svg";
                }
            });

            // Toggle trạng thái active
            this.classList.toggle("active");

            // Kiểm tra nếu active thì đổi class & icon
            if (this.classList.contains("active")) {
                // title.classList.remove("text-white");
                title.classList.add("!text-neutralc-800");
                img.src = "/assets/image/icon/minus-round-primary.svg";
            } else {
                title.classList.remove("!text-neutralc-800");
                // title.classList.add("text-white");
                img.src = "/assets/image/icon/plus-round-white.svg";
            }
        });
    });

    const programItems = document.querySelectorAll(".our-program-item");
    programItems.forEach(item => {
        if (item.contains(event.target)) {
            isClickInsideAccordion = true;

            // Toggle active class
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                // Xóa active của các mục khác
                accordionItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            }
        }
    });

    // Nếu click ra ngoài accordion thì xóa tất cả active
    if (!isClickInsideAccordion) {
        accordionItems.forEach(item => item.classList.remove("active"));
        programItems.forEach(item => item.classList.remove("active"));
    }
});