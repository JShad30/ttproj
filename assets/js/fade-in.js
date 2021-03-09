const fadeIn = document.querySelectorAll('.fade-in');

const options = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }        
    });
}, options);

fadeIn.forEach(fadeItem => {
    appearOnScroll.observe(fadeItem);
});

