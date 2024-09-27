const img_number = 10;

function initCommonSlider() {
    const commonSlider = document.querySelector('#wd_common');
    if (!commonSlider) return;
    for (let i = 0; i < img_number; i++) {
        const imgPath = `/src/asset/image/wd/slide_${i}.jpg`;
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide can_open';
        const img = document.createElement('img');
        img.src = imgPath;
        slideDiv.appendChild(img);
        commonSlider.appendChild(slideDiv);
        
    }
}

function initEvent() {
    const bg = document.querySelector('.bg_gyro');
    const img = bg.querySelector('img');
    const text = bg.querySelector('.ov');
    bg.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        text.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
        img.style.transform = `translate(${x * 50}px, ${y * 50}px) rotateX(${10 * y}deg) rotateY(${10 * x}deg)`;
    });
}

function initEffect(class_name) {
    const effect_boxs = document.querySelectorAll(`.${class_name}`)
    effect_boxs.forEach((e,i)=>{
        const items = e.querySelectorAll("div")
        const n = items.length
        let index = 0
        items[index].classList.add("active")
        setInterval(()=>{
            items[index].classList.remove("active")
            index = (index+1)%n
            items[index].classList.add("active")
        },1500)
    })
}

initCommonSlider()
initEvent()
initEffect("effect")