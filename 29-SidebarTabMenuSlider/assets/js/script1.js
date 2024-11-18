const sliderContainer = document.querySelector(".sliderContainer");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

sliderContainer.addEventListener("mouseover", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide);
let currentIndex =  0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");


const nextSlide = () => {
currentIndex = (currentIndex + 1) % slide.length;
updateSlider();
}

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);



dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        currentIndex = parseInt(e.target.getAttribute("data-index"));
        updateSlider();
    });
});

function updateSlider() {
    const newTranform = -currentIndex * 100 + "%";
    slides.style.transform = `translateX(${newTranform})`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}


let interval;
function startAutoSlide  () {
   interval = setInterval(nextSlide, 1000);
};


function stopAutoSlide  () {
    clearInterval(interval);

};
startAutoSlide();
stopAutoSlide();