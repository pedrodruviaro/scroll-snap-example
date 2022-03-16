const $slider = document.querySelector(".media-scroller");

let isDown = false;
let startX;
let scrollLeft;

$slider.addEventListener("mousedown", (e) => {
    isDown = true;
    $slider.classList.add("active");
    startX = e.pageX - $slider.offsetLeft;
    scrollLeft = $slider.scrollLeft;
});

$slider.addEventListener("mouseleave", () => {
    isDown = false;
    $slider.classList.remove("active");
});

$slider.addEventListener("mouseup", () => {
    isDown = false;
    $slider.classList.remove("active");
});

$slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - $slider.offsetLeft;
    const walk = (x - startX) * 2;
    $slider.scrollLeft = scrollLeft - walk;
});

const $element = document.querySelector(".element");
const $nextButton = document.querySelector('button[data-label="button-next"]');
const $prevButton = document.querySelector('button[data-label="button-prev"]');
const elementWidth = $element.getBoundingClientRect().width;

$nextButton.addEventListener("click", (e) => {
    $slider.scrollBy({
        left: elementWidth,
        behavior: "smooth",
    });
});

$prevButton.addEventListener("click", (e) => {
    $slider.scrollBy({
        left: -elementWidth,
        behavior: "smooth",
    });
});
