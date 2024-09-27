const headerHTML = `
<nav>
    <div class="row-l">
        <a class="logo" href="/">
            <img src="/src/asset/image/logo/logo.png" alt="OUMPC">
            <span>
                OUMPC
            </span>
        </a>
    </div>
    <div class="row-r">
        <div id="nav-toggle" >
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="menu">
            <a class="logo" href="#">
                <img src="/src/asset/image/logo/logo.png" alt="OUMPC">
                <span>
                    OUMPC
                </span>
            </a>
            <ul class="child">
                <li>
                    <a href="/">Trang chủ</a>
                </li>
                <li>
                    <a href="/training.html">Đào tạo</a>
                </li>
                <li class="parent">
                    <a href="/events.html">Sự kiện</a>
                    <i class="fa-solid fa-chevron-up"></i>
                    <ul>
                        <li>
                            <a href="/event/webdesign.html">WebDesign</a>
                        </li>
                        <li>
                            <a href="/event/robocode.html">
                                Robocode
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/achievements.html">Thành tựu</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`
const footerHTML = `
<div class="left">
    <div class="logo">
        <img src="/src/asset/image/logo/logo.png" alt="">
    </div>
    <p>Mobile Programming Club</p>
    
</div>
<div class="mid">
    <p><b>Tìm hiểu thêm</b></p>
    <p>
        <a href="#">Về chúng tôi</a>
    </p>
    <p>
        <a href="#">Liên hệ</a>
    </p>
</div>
<div class="right">
    <p><b>Liên hệ</b></p>
    <p>
        <a href="mailto:it.mpclub@ou.edu.vn">it.mpclub@ou.edu.vn</a>
    </p>
    <p>
        <a href="https://ou.edu.vn/">Trường Đại học Mở Tp.HCM</a>
    </p>
    <p>
        <a href="http://it.ou.edu.vn/">Khoa Công nghệ thông tin</a>
    </p>
</div>
<div class="social">
    <a href="https://www.facebook.com/CLBLapTrinhTrenThietBiDiDong" target="_blank">
        <i class="fab fa-facebook" style="color:#0059ff;"></i>
        CLB - Lập Trình Trên Thiết Bị Di Động
    </a>
    <a href="https://github.com/oumpc" target="_blank">
        <i class="fab fa-github"></i>
        OUMPC
    </a>
</div>
<div class="copy">
    <p>© 2024 Mobile Programming Club</p>
</div>
`


// window.onload = ()=>{
    initCSS()
    initHeader()   
    initFooter() 
    // initUp()
    initWow()
// }

function initWow(){
    const upDiv = document.createElement('div');
    upDiv.id = 'up';
    const upIcon = document.createElement('i');
    upIcon.className = 'fa-solid fa-circle-chevron-up';
    upDiv.appendChild(upIcon);
    document.body.appendChild(upDiv);

    const wows = document.querySelectorAll('.wow');
    // const animated=["animate__bounceInDown", "animate__backInDown", "animate__backInLeft", "animate__backInUp","animate__backInUp" ,"animate__lightSpeedInLeft","animate__rotateInUpRight","animate__rollIn","animate__zoomIn","animate__zoomInDown"]
    const animated=["animate__zoomIn","animate__zoomInDown"]

    wows.forEach((wow) => {
        wow.classList.add(animated[Math.floor(Math.random() * animated.length)]);
    });

    const wow = new WOW({
        boxClass:     ['wow','box'],      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();
}

window.onscroll = (e) => {
    const header = document.querySelector('header');
    const up = document.querySelector('#up')
    if(window.scrollY > 10){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }

    if (window.scrollY > 1000) {
        up.classList.add('active');
    } else {
        up.classList.remove('active');
    }

    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function initCSS(){
    const linkAWS = document.createElement('link');
    linkAWS.rel = 'stylesheet';
    linkAWS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    linkAWS.integrity = 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==';
    linkAWS.crossOrigin = 'anonymous';
    

    const linkInit = document.createElement('link');
    linkInit.rel = 'stylesheet';
    linkInit.href = '/src/css/init.css';

    const style = document.createElement('style');
    style.textContent = "@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');";

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/src/asset/image/logo/logo.png';

    const animateCSS = document.createElement('link');
    animateCSS.rel = 'stylesheet';
    animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    

    document.head.appendChild(favicon);
    document.head.appendChild(style);
    document.head.appendChild(linkAWS);
    document.head.appendChild(linkInit);
    document.head.appendChild(animateCSS);
}

function initHeader(){
    const header = document.querySelector('header');
    header.innerHTML = headerHTML;

    const navToggle = document.getElementById('nav-toggle');
    const menu = document.querySelector('.menu');

    navToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });


    const a = document.querySelectorAll("li a")
    const ref = location.pathname
    if (ref!="/") {
        a.forEach((e,i)=>{
            if (e.href.includes(ref)) {
                e.parentElement.classList.add("active")
            }
            // console.log(e.href)
        })
    }
}

function initFooter(){
    const footer = document.querySelector('footer');
    footer.innerHTML = footerHTML;
}

