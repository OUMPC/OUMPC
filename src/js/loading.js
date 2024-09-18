const overlay_lock =  document.createElement('div');
overlay_lock.id = 'overlay_lock';
const loader = document.createElement('div');
loader.className = 'loader';
overlay_lock.appendChild(loader);
document.body.appendChild(overlay_lock);



document.addEventListener('DOMContentLoaded', () => {
    let t = 1000 +  Math.random() * 1500;
    setTimeout(() => {
        overlay_lock.style.opacity = 0;
    }, t);
    setTimeout(() => {
        overlay_lock.remove();
    }, t+100);
});
