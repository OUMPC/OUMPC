function initGyroBGEvent() {
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
initGyroBGEvent();
// =============================

const items = document.querySelectorAll('.item');
const slider = document.querySelector('.training-slider-inner');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentItem = -1;

nextBtn.addEventListener('click', function() {
    if (currentItem < items.length - 2){
        currentItem = (currentItem + 1);
        updateItems();
    }
    
});
document.addEventListener('keydown', function(event) {
    if (prevBtn.getBoundingClientRect().top >= 0 && prevBtn.getBoundingClientRect().bottom <= window.innerHeight){
        if (event.key === 'ArrowRight') {
            if (currentItem < items.length - 2){
                currentItem = (currentItem + 1);
                updateItems();
            }
        }
    }
});

prevBtn.addEventListener('click', function() {
    if(currentItem>-1){
        currentItem = (currentItem - 1);
        updateItems();
    }
});

document.addEventListener('keydown', function(event) {
    if (prevBtn.getBoundingClientRect().top >= 0 && prevBtn.getBoundingClientRect().bottom <= window.innerHeight){
        if (event.key === 'ArrowLeft') {
            if(currentItem>-1){
                currentItem = (currentItem - 1);
                updateItems();
            }
        }
    }
});



function updateItems() {
    items.forEach((item, index) => {
        item.classList.remove('active');
    
        if (index === currentItem+1) {
            item.classList.add('active');
        } 
    });
    const offset = -currentItem/3 * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}

// Khởi tạo trạng thái ban đầu
updateItems();

//==================json=======
fetch('src/data/projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = `
                <div>
                    <img src="${project.image}" alt="${project.description}"/>
                    <div>
                        <h3>${project.author}</h3>
                        <p>${project.description}</p>
                        <a href="${project.url}" target="_blank">Xem thêm</a>
                    </div>
                </div>
                `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
