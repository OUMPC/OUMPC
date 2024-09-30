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

initGyroBGEvent()

// 30/9

const members = document.querySelector(".member-container")
const iconLeft = document.querySelector(".member-container :nth-child(1)")
const iconRight = document.querySelector(".member-container :nth-child(5)")

iconLeft.addEventListener('click', function(){
    var box2 = document.querySelector(".member-container :nth-child(3)")
    members.removeChild(box2)
    members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
    box2 = document.querySelector(".member-container :nth-child(3)")
    members.removeChild(box2)
    members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
})

// iconRight.addEventListener('click', function(){
//     const box1 = document.querySelector(".member-container :nth-child(2)")
//     members.removeChild(box1)
//     members.insertBefore(box1,document.querySelector(".member-container :nth-child(4)"))
// })

iconRight.addEventListener('click', function(){
    var box2 = document.querySelector(".member-container :nth-child(3)")
    members.removeChild(box2)
    members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
    box2 = document.querySelector(".member-container :nth-child(3)")
    members.removeChild(box2)
    members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
})
