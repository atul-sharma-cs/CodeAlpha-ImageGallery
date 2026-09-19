const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filter-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;


/* Open Lightbox */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        lightboxImg.src =
            item.querySelector("img").src;

        lightbox.classList.add("show");
    });

});


/* Next Image */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    lightboxImg.src =
        galleryItems[currentIndex]
        .querySelector("img").src;
});


/* Previous Image */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }

    lightboxImg.src =
        galleryItems[currentIndex]
        .querySelector("img").src;
});


/* Close Lightbox */

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});


/* Close by clicking outside image */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }

});


/* Keyboard Navigation */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextBtn.click();
    }

    if (event.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (event.key === "Escape") {
        closeBtn.click();
    }

});


/* Image Filters */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            const category =
                item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});

