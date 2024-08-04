document.addEventListener('DOMContentLoaded', function() {
    let gradientSection = document.querySelector('.gradient-section');
    let gradientContent = document.querySelector('.gradient-content');

    function handleScroll() {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight / 2) {
            let opacity = (scrollPosition - windowHeight / 2) / (windowHeight / 2);
            gradientSection.style.opacity = Math.min(opacity, 1);

            if (opacity > 0.5) {
                gradientContent.style.opacity = (opacity - 0.5) * 2;
                gradientContent.style.transform = `translate(-50%, -50%) scale(${1 + (opacity - 0.5)})`;
            }
        } else {
            gradientSection.style.opacity = 0;
            gradientContent.style.opacity = 0;
            gradientContent.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
