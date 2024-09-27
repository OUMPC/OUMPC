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

initCommonSlider()