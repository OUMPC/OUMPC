const cursor = document.querySelector('#cursor');

// document.body.addEventListener('mousemove', (e) => {
    
// });

const links = document.querySelectorAll('.stage2 .container a');
links.forEach((link) => {
    link.addEventListener('mousemove', (e) => {
        cursor.classList.add('show');
        cursor.style.left = e.clientX +10 + 'px';
        cursor.style.top = e.clientY + window.scrollY + 'px';
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('show');
    });
});