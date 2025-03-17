document.addEventListener("DOMContentLoaded", function () {
    const programItems = document.querySelectorAll(".our-program-item");

    document.addEventListener("click", function (event) {
        let isClickInsideAccordion = false;

        programItems.forEach(item => {
            if (item.contains(event.target)) {
                isClickInsideAccordion = true;

                // Toggle active class
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                } else {
                    // Xóa active của các mục khác
                    programItems.forEach(i => i.classList.remove("active"));
                    item.classList.add("active");
                }
            }
        });

        // Nếu click ra ngoài accordion thì xóa tất cả active
        if (!isClickInsideAccordion) {
            programItems.forEach(item => item.classList.remove("active"));
        }
    });
});
