const css = document.createElement('style');
css.textContent = 
`
    .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s;
    }

    .fullscreen .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .fullscreen .content {
        position: relative;
        padding: 40px 10px;
        border-radius: 8px;
        max-width: 95%;
        max-height: 100%;
        overflow: auto;
        z-index: 1001;
    }

    .fullscreen .close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: white;
    }

    .fullscreen .img-container {
        text-align: center;
        height: calc(100vh - 150px);
        width: 100%;
        position: relative;
        overflow: hidden;
        cursor: grab;
    }

    .fullscreen .img-container img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
        transform-origin: center center;
    }

    .fullscreen .img-container .title {
        height: auto;
        margin-top: 10px;
        font-size: 18px;
    }
`
document.head.appendChild(css);

const view = document.createElement('div');
view.id = 'view';
view.className = 'fullscreen';
view.innerHTML = `
    <div class="overlay"></div>
    <div class="content">
        <button class="close">&times;</button>
        <div class="img-container">
            <img src="" alt="">
            <div class="title"></div>
        </div>
    </div>
`;
document.body.appendChild(view);

document.querySelectorAll('.can_open').forEach(img => {
    img.addEventListener('click', () => {
        const view = document.getElementById('view');
        view.querySelector('.img-container img').src = img.querySelector('img').src;    
        view.querySelector('.img-container .title').textContent = img.alt;
        view.style.visibility = 'visible';
        view.style.opacity = '1';
    });
});

document.querySelector('.fullscreen .close').addEventListener('click', () => {
    const view = document.getElementById('view');
    view.style.visibility = 'hidden';
    view.style.opacity = '0';
});

document.querySelector('.fullscreen .overlay').addEventListener('click', () => {
    const view = document.getElementById('view');
    view.style.visibility = 'hidden';
    view.style.opacity = '0';
});

const imgContainer = document.querySelector('.img-container');
const img = imgContainer.querySelector('img');
let scale = 1;
let isDragging = false;
let startX, startY;

imgContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = img.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;

    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(1, scale), 4);

    img.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
    img.style.transform = `scale(${scale})`;
});



imgContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

imgContainer.addEventListener('drop', (e) => {
    e.preventDefault();
});