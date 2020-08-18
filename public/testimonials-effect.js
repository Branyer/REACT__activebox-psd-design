const testimonials = document.querySelectorAll('.testimonial');

let i = 0;

setInterval(() => {

    testimonials.forEach((t) => t.classList.remove('show'))
 
    testimonials[i].classList.add('show');
    
    i++;

    if(i===testimonials.length) i = 0;

}, 3000);