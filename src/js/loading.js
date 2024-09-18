const overlay_lock =  document.createElement('div');
overlay_lock.id = 'overlay_lock';
const loader = document.createElement('div');
loader.className = 'loader';
overlay_lock.appendChild(loader);
document.body.appendChild(overlay_lock);

const style = document.createElement('style');
style.innerHTML = `
#overlay_lock{
    position: fixed;
    top: 0;bottom: 0;left: 0;right: 0;
    z-index: 9999;
    background-color: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .2s ease;
}

/* HTML: <div class="loader"></div> */
.loader {
    height: 60px;
    aspect-ratio: 1;
    --c:no-repeat linear-gradient(#ff8c00 0 0);
    background: 
    var(--c),var(--c),
    var(--c),var(--c),
    var(--c),var(--c);
    animation: 
    l34-1 1.5s infinite alternate,
    l34-2 1.5s infinite alternate;
}
@keyframes l34-1 {
0%,20%   {background-size:20px 20px}
40%,60%  {background-size:100% 20px}
80%,100% {background-size:20px 20px}
}
@keyframes l34-2 {
0%,40%  {background-position: 0   0,100% 0, 50% 50%, 50% 50%, 0   100%,100% 100%}
60%,100%{background-position: 50% 0,50%  0, 0   50%,100% 50%, 50% 100%,50%  100%}
}
`;
document.head.appendChild(style);

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        overlay_lock.style.opacity = 0;
    },1000);
    setTimeout(() => {
        overlay_lock.remove();
    }, 1100);
});
