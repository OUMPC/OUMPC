window.onload = ()=>{
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const dotsBox = slider.querySelector('.dots');
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dotsBox.appendChild(dot);
        }
        const dots = slider.querySelectorAll('.dot');

        if (slides.length < 3) {
            return;
        }

        let currentSlide = 0;
        slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('a0');
        slides[currentSlide].classList.add('a1');
        slides[currentSlide +1].classList.add('a2');
        dots[currentSlide].classList.add('active');
        const next = slider.querySelector('.next');
        const prev = slider.querySelector('.prev');
        let f = false
        let wait = false
        next.onclick = (e) => {
            if (f) return
            f = true
            wait=true
            setTimeout(()=>{
                wait = false
            },5000)
            dots[currentSlide].classList.remove('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('a0');
            slides[currentSlide].classList.remove('a1');
            slides[(currentSlide +1)% slides.length].classList.remove('a2');
            currentSlide = (currentSlide + 1) % slides.length;        
            dots[currentSlide].classList.add('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('a0');
            slides[currentSlide].classList.add('a1');
            slides[(currentSlide +1)% slides.length].classList.add('a2');
            setTimeout(() => {
                f = false
            }, 500)
        }

        prev.onclick = () => {
            if (f) return
            f = true
            wait=true
            setTimeout(()=>{
                wait = false
            },5000)
            dots[currentSlide].classList.remove('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('a0');
            slides[currentSlide].classList.remove('a1');
            slides[(currentSlide +1)% slides.length].classList.remove('a2');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;        
            dots[currentSlide].classList.add('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('a0');
            slides[currentSlide].classList.add('a1');
            slides[(currentSlide +1)% slides.length].classList.add('a2');
            setTimeout(() => {
                f = false
            }, 500)
        }

        dots.forEach((dot, index) => {
            dot.onclick = () => {
                if (f) return
                f = true
                wait=true
                setTimeout(()=>{
                    wait = false
                },5000)
                dots[currentSlide].classList.remove('active');
                slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('a0');
                slides[currentSlide].classList.remove('a1');
                slides[(currentSlide +1)% slides.length].classList.remove('a2');
                currentSlide = index;        
                dots[currentSlide].classList.add('active');
                slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('a0');
                slides[currentSlide].classList.add('a1');
                slides[(currentSlide +1)% slides.length].classList.add('a2');
                setTimeout(() => {
                    f = false
                }, 500)
            }
        })

        setInterval(()=>{
            if (wait) return
            dots[currentSlide].classList.remove('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('a0');
            slides[currentSlide].classList.remove('a1');
            slides[(currentSlide +1)% slides.length].classList.remove('a2');
            currentSlide = (currentSlide + 1) % slides.length;        
            dots[currentSlide].classList.add('active');
            slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('a0');
            slides[currentSlide].classList.add('a1');
            slides[(currentSlide +1)% slides.length].classList.add('a2');
        },4000)
    })
}