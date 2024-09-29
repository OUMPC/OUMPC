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


if (window.innerWidth <= 768) {
    const items = document.querySelectorAll('.item');
    const slider = document.querySelector('.training-slider-inner');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentItem = 0;
    
    nextBtn.addEventListener('click', function() {
        if (currentItem < items.length-1){
            currentItem = (currentItem + 1);
            updateItems();
        }
    });
    prevBtn.addEventListener('click', function() {
        if(currentItem>0){
            currentItem = (currentItem - 1);
            updateItems();
        }
    });
    function updateItems() {
        items.forEach((item) => {
            item.classList.add('active');
        });
        const offset = -currentItem * 100; 
        slider.style.transform = `translateX(${offset}%)`;
    }
    updateItems();

    let startX;
let isSwiping = false; 
const threshold = 50;

const carousel = document.querySelector('.slide-training');

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isSwiping = true; 
}, { passive: false }); 

carousel.addEventListener('touchmove', (event) => {
    if (!isSwiping) return; 

    const moveX = event.touches[0].clientX;
    const diffX = startX - moveX;

   
    // if (Math.abs(diffX) > threshold) {
    //     event.preventDefault(); 
    // }
}, { passive: false }); 



carousel.addEventListener('touchend', (event) => {
    if (!isSwiping) return; 

    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            if (currentItem < items.length - 1) {
                currentItem++;
            }
        } else {
            if (currentItem > 0) {
                currentItem--;
            }
        }
        updateItems(); 
    }

    isSwiping = false;
});

    //=========
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function scaleElementOnScroll() {
        const element = document.querySelectorAll('#projects-container > .project');
        for(e of element)
        {
            if (isElementInViewport(e)) {
                e.classList.add('scale-up');
            } else {
                e.classList.remove('scale-up');
            }
        }
        }
        
    
    // Kiểm tra khi cuộn trang
    window.addEventListener('scroll', scaleElementOnScroll);
    
    // Kiểm tra ngay khi tải trang
    window.addEventListener('load', scaleElementOnScroll);
    
    // Khởi tạo trạng thái ban đầu
    
}
else{
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
}


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

// ============