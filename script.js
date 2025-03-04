document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#34BBFF", "#4B5AFF", "#9742FF", "#FF3D91", "#FF3E41", "#FFCC40"];
    let currentIndex = 0;
    let isPrimaryVisible = true;
  
    const background1 = document.createElement("div");
    background1.classList.add("gradient");
    document.body.appendChild(background1);
  
    const background2 = document.createElement("div");
    background2.classList.add("gradient");
    document.body.appendChild(background2);
  
    function changeGradient() {
      const topLayer = isPrimaryVisible ? background2 : background1;
      const bottomLayer = isPrimaryVisible ? background1 : background2;
  
      topLayer.style.background = `radial-gradient(ellipse 100% 100% at top, #FC34FF, ${colors[currentIndex]}, 70%, transparent 100%)`;
      topLayer.style.opacity = "1";
  
      bottomLayer.style.opacity = "0";
  
      currentIndex = (currentIndex + 1) % colors.length;
      isPrimaryVisible = !isPrimaryVisible;
  
      setTimeout(changeGradient, 6000);
    }
  
    changeGradient();
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight && rect.bottom >= 0 // Элемент виден хотя бы частично
    );
}

function handleScroll() {
    const elements = document.querySelectorAll(".animated, .pic-animated");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        setTimeout(() => {
          element.classList.add('visible');
        }, 500); // Задержка 1 секунда
      }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);