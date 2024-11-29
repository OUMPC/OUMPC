const slogans = ["Nơi tình thân và đam mê kết nối", "while (alive) { code(); sleep(); eat();}","Đây không phải là <b>lỗi</b>, đây là một tính năng chưa công bố!","Câu lạc bộ Lập trình trên thiết bị di động (chỉ là một cái tên)","HelloWorld('print')"];
const slogan = document.querySelector('.title p');
document.INTERVAL = {
    caption: null
}



async function initQA(){
    await fetch('/src/data/qa.json')
    .then(res => res.json()).then(data => {
        const questions = document.querySelector('.questions');
        questions.innerHTML = ""
        data.forEach((e,i)=>{
            questions.innerHTML += `
            <li>
                <div class="ask">
                <span>${i+1 +". "+e.Q}</span>
                <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div class="reply">
                    <p>${e.A}</p>
                </div>
            </li>
            `
        })
    })
    .catch(err => console.log(err))
    const ask = document.querySelectorAll('.questions li');

    ask.forEach((item) => {
        item.addEventListener('click', () => {            
            ask.forEach((i) => {
                if(i !== item) {
                    i.classList.remove('active');
                }
            })
            item.classList.toggle('active');
        })
    })
}

async function initPage(){
    fetch('/src/data/infoMember.json').then(res => res.json())
    .then(data => {
        const coVan = document.querySelector('#coVan');
        coVan.innerHTML = ""
        data.coVan.forEach((e,i)=>{
            coVan.innerHTML += `
            <li class="">
                <div class="img">
                    <img src="${e.avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
                </div>
                <div class="info">
                    <span>${e.call}</span>
                    <h2>${e.name}</h2>
                    <p>${e.bio}</p>
                </div>
            </li>
            `
        })
        

        const chuNhiem = document.querySelector('#chuNhiem');
        chuNhiem.innerHTML= `
        <div class="box">
            <div class="img">
                <img src="${data.chuNhiem[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.chuNhiem[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó chủ nhiệm</p>
                <div class="social">                    
                    <a target="_blank" rel="noopener noreferrer" href="${data.chuNhiem[1].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:${data.chuNhiem[1].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.chuNhiem[0].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.chuNhiem[0].name || "Thành viên thứ 1"}</h2>
                <p>Chủ nhiệm</p>
            </div>
            <div class="social">                    
                <a target="_blank" rel="noopener noreferrer" href="${data.chuNhiem[0].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.chuNhiem[0].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.chuNhiem[2].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.chuNhiem[2].name || "Thành viên thứ 3"}</h2>
                <p>Phó chủ nhiệm</p>
            </div>
            <div class="social">                    
                <a target="_blank" rel="noopener noreferrer" href="${data.chuNhiem[2].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.chuNhiem[2].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        `
        const banLT = document.querySelector('#banLT');
        banLT.innerHTML= `
        <div class="box">
            <div class="img">
                <img src="${data.lapTrinh[0].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.lapTrinh[0].name || "Thành viên thứ 1"}</h2>
                <p>Trưởng ban lập trình</p>
            </div>
            <div class="social">                    
                <a target="_blank" rel="noopener noreferrer" href="${data.lapTrinh[0].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.lapTrinh[0].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.lapTrinh[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.lapTrinh[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban lập trình</p>
            </div>
            <div class="social">
                <a target="_blank" rel="noopener noreferrer" href="${data.lapTrinh[1].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.lapTrinh[1].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        `

        const banHC = document.querySelector('#banHC');
        banHC.innerHTML= `
        <div class="box">
            <div class="img">
                <img src="${data.hauCan[0].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.hauCan[0].name || "Thành viên thứ 1"}</h2>
                <p>Trưởng ban hậu cần</p>
            </div>
            <div class="social">
                <a target="_blank" rel="noopener noreferrer" href="${data.hauCan[0].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.hauCan[0].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.hauCan[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.hauCan[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban hậu cần</p>
            </div>
            <div class="social">
                <a target="_blank" rel="noopener noreferrer" href="${data.hauCan[1].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.hauCan[1].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        `

        const banTT = document.querySelector('#banTT');
        banTT.innerHTML= `
        <div class="box">
            <div class="img">
                <img src="${data.truyenThong[0].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.truyenThong[0].name || "Thành viên thứ 1"}</h2>
                <p>Trưởng ban truyền thông</p>
            </div>
            <div class="social">
                <a target="_blank" rel="noopener noreferrer" href="${data.truyenThong[0].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.truyenThong[0].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.truyenThong[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.truyenThong[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban truyền thông</p>
            </div>
            <div class="social">
            
                <a target="_blank" rel="noopener noreferrer" href="${data.truyenThong[1].fb || "#"}"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:${data.truyenThong[1].email || "#"}"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        `
        

    })
    .catch(err => console.log(err))
}

function initGyroEvent() {
    const bg_ov = document.querySelector('.stage1');
    const img = document.querySelector('.bg_gyro img');
    const text = document.querySelector('.bg_gyro .box');
    bg_ov.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        text.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
        img.style.transform = `translate(${x * 30}px, ${y * 50}px) rotateX(${10 * y}deg) rotateY(${10 * x}deg)`;
    });
}

// Code cũ của Riikon team
function runCaption() {
    let time = 0
    let title = ""
    const caption = slogans[Math.floor(Math.random() * slogans.length)]
    const captionSliced = chunkString(caption,parseInt(caption.length / 10))
    document.INTERVAL.caption  = setInterval(()=>{
        if (captionSliced.length!=0) {
            title = title + captionSliced[0]
            captionSliced.shift()
            slogan.innerText = (title + "_")
            return 
        }
        time+=80
        if (time >= 5000) {
            if (title=="") {
                clearInterval(document.INTERVAL.caption)
                runCaption()
            }
            title = title.substring(0,title.length - 2 <0?0:title.length - 5)
            slogan.innerText = (title + "_")
        }
        if (time % 320 == 0) {
            slogan.innerText = (title + " ")
            return
        }

        if (time % 160 == 0) {
            slogan.innerText = (title + "_")
        }
        
    },80)
}

function chunkString(str, chunkSize) {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
      result.push(str.slice(i, i + chunkSize));
    }
    return result;
}

// Slide

const img_number = 15;

function initCommonSlider() {
    const commonSlider = document.querySelector('#wd_common');
    if (!commonSlider) return;
    for (let i = 0; i < img_number; i++) {
        const imgPath = `/src/asset/image/common/slide_${i}.jpg`;
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide can_open';
        const img = document.createElement('img');
        img.src = imgPath;
        slideDiv.appendChild(img);
        commonSlider.appendChild(slideDiv);
        
    }
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


initPage();
initQA();
runCaption();
initGyroEvent()
initCommonSlider()
initEffect("effect")