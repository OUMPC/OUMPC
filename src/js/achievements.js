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
const containers = document.querySelectorAll(".info_container.change_size")
var index = 1

// iconLeft.addEventListener('click', function(){
//     containers[index].style.animation = ''
//     if(index == 0){
//         index = containers.length - 1
//     } else{
//         index --
//     }
//     var box2 = document.querySelector(".member-container :nth-child(3)")
//     members.removeChild(box2)
//     members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
//     box2 = document.querySelector(".member-container :nth-child(3)")
//     members.removeChild(box2)
//     members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
//     console.log(1)
// })

// iconRight.addEventListener('click', function(){
//     const box1 = document.querySelector(".member-container :nth-child(2)")
//     members.removeChild(box1)
//     members.insertBefore(box1,document.querySelector(".member-container :nth-child(4)"))
// })

// iconRight.addEventListener('click', function(){
//     containers[index].style.animation = ''
//     if(index == containers.length - 1){
//         index = 0
//     } else{
//         index ++
//     }
//     var box2 = document.querySelector(".member-container :nth-child(3)")
//     members.removeChild(box2)
//     members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
//     box2 = document.querySelector(".member-container :nth-child(3)")
//     members.removeChild(box2)
//     members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
//     console.log(2)
// })

iconRight.addEventListener('click', function(){  
    containers[index].style.animation =''
    if(index == containers.length - 1){
        index = 0
    } else{
        index ++
    }
    if (window.innerWidth <= 768){
        const box1 = document.querySelector(".member-container :nth-child(2)")
        members.removeChild(box1)
        members.insertBefore(box1,document.querySelector(".member-container :nth-child(4)"))
        console.log(containers)
        containers[index].style.animation = 'slideRight 0.5s ease-out forwards'
    } else{
        var box2 = document.querySelector(".member-container :nth-child(3)")
        members.removeChild(box2)
        members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
        box2 = document.querySelector(".member-container :nth-child(3)")
        members.removeChild(box2)
        members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
    }
})

iconLeft.addEventListener('click', function(){
    containers[index].style.animation =''
    if(index == 0){
        index = containers.length - 1
    } else{
        index --
    }
    if (window.innerWidth <= 768){
        const box1 = document.querySelector(".member-container :nth-child(4)")
        members.removeChild(box1)
        members.insertBefore(box1,document.querySelector(".member-container :nth-child(2)"))
        console.log(containers)
        containers[index].style.animation = 'slideLeft 0.5s ease-out forwards'
    } else{
        var box2 = document.querySelector(".member-container :nth-child(3)")
        members.removeChild(box2)
        members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
        box2 = document.querySelector(".member-container :nth-child(3)")
        members.removeChild(box2)
        members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
    }
})

// if (window.innerWidth <= 768){

//     iconRight.addEventListener('click', function(){  
//         containers[index].style.animation =''
//         if(index == containers.length - 1){
//             index = 0
//         } else{
//             index ++
//         }
//         const box1 = document.querySelector(".member-container :nth-child(2)")
//         members.removeChild(box1)
//         members.insertBefore(box1,document.querySelector(".member-container :nth-child(4)"))
//         console.log(containers)
//         containers[index].style.animation = 'slideRight 0.5s ease-out forwards'
//         console.log(3)
//     })

//     iconLeft.addEventListener('click', function(){
//         containers[index].style.animation =''
//         if(index == 0){
//             index = containers.length - 1
//         } else{
//             index --
//         }
//         const box1 = document.querySelector(".member-container :nth-child(4)")
//         members.removeChild(box1)
//         members.insertBefore(box1,document.querySelector(".member-container :nth-child(2)"))
//         console.log(containers)
//         containers[index].style.animation = 'slideLeft 0.5s ease-out forwards'
//         console.log(4)
//     })

// } else{
//     iconLeft.addEventListener('click', function(){
//         containers[index].style.animation = ''
//         if(index == 0){
//             index = containers.length - 1
//         } else{
//             index --
//         }
//         var box2 = document.querySelector(".member-container :nth-child(3)")
//         members.removeChild(box2)
//         members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
//         box2 = document.querySelector(".member-container :nth-child(3)")
//         members.removeChild(box2)
//         members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
//         console.log(1)
//     })
    
//     // iconRight.addEventListener('click', function(){
//     //     const box1 = document.querySelector(".member-container :nth-child(2)")
//     //     members.removeChild(box1)
//     //     members.insertBefore(box1,document.querySelector(".member-container :nth-child(4)"))
//     // })
    
//     iconRight.addEventListener('click', function(){
//         containers[index].style.animation = ''
//         if(index == containers.length - 1){
//             index = 0
//         } else{
//             index ++
//         }
//         var box2 = document.querySelector(".member-container :nth-child(3)")
//         members.removeChild(box2)
//         members.insertBefore(box2,document.querySelector(".member-container :nth-child(2)"))
//         box2 = document.querySelector(".member-container :nth-child(3)")
//         members.removeChild(box2)
//         members.insertBefore(box2,document.querySelector(".member-container :nth-child(4)"))
//         console.log(2)
//     })
// }
