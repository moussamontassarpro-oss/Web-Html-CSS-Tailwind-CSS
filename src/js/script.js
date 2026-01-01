document.addEventListener('DOMContentLoaded', () => {
    console.log("Le script JS est bien chargé !");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Élément visible détecté !", entry.target); 
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 
    });

    const elements = document.querySelectorAll('.reveal');
    console.log(`Nombre d'éléments à animer trouvés : ${elements.length}`);

    elements.forEach((el) => observer.observe(el));
});
