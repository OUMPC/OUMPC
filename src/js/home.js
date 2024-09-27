const slogans = ["Nơi tình thân và đam mê kết nối", "while (alive) { code(); sleep(); eat();}","Đây không phải là <b>lỗi</b>, đây là một tính năng chưa công bố!","Câu lạc bộ Lập trình trên thiết bị di động (chỉ là một cái tên)","HelloWorld('print')"];
const slogan = document.querySelector('.title p');
document.INTERVAL = {
    caption: null
}

initPage();
initQA();
runCaption();



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
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.chuNhiem[2].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.chuNhiem[2].name || "Thành viên thứ 3"}</h2>
                <p>Phó chủ nhiệm</p>
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
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.lapTrinh[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.lapTrinh[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban lập trình</p>
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
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.hauCan[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.hauCan[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban hậu cần</p>
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
        </div>
        <div class="box">
            <div class="img">
                <img src="${data.truyenThong[1].avatar || "/src/asset/image/members/member.png"}" alt="" srcset="">
            </div>
            <div class="info">
                <h2>${data.truyenThong[1].name || "Thành viên thứ 2"}</h2>
                <p>Phó ban truyền thông</p>
            </div>
        </div>
        `
        

    })
    .catch(err => console.log(err))
}



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