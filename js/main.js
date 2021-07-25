
/* Animating Tabs */
function aniTabs(){
    let tabs =document.querySelectorAll(".tabs_item");

    for( let tab of tabs){
        if (!tab.classList.contains("tabs_item_active")){
            tab.addEventListener('click', e=>{          
                for (let prevTab of tabs){
                    if (prevTab.classList.contains("tabs_item_active")){
                        prevTab.classList.remove("tabs_item_active");
                    }
                }
                tab.classList.add("tabs_item_active");          
            });
    
        }
      
    }
}

/*  */
let slideIndex=1;
function slideIndexInit(){
    
    showSlides(slideIndex);
}



function plusSlides(n) {
    showSlides(slideIndex += n);
  }
 
function showSlides(n){
    
    let slides = document.getElementsByClassName("worker_card");
    if(n>slides.length) slideIndex=1;
    if (n<1) slideIndex = slides.length;
    for (let slide of slides){
        slide.style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].style.transition = "opacity 0.3s ease 0.3s"; 

}

/* Mediaplayer custom button play */

function customPlay(){
    let playBtn = document.querySelector("#playBtn");
    let video = document.querySelector("#video");
    playBtn.addEventListener("click", ()=>{
        video.play();
        video.setAttribute('controls', 'controls');
        playBtn.style.display="none";
    });
    video.addEventListener("ended", function(){
        /* функция не стрелочная, потому что нет
        контекста вызова, то есть this  не работает */
        this.src=this.src;
        playBtn.style.display="block";
        video.removeAttribute('controls');
    });
}


/* Button "Buy" executing */
function btnBuyDo(){
    let btnBuy=document.querySelector("#btn_buy");
    let tryForBtn=document.querySelector("#try_for_btn");
    let popup = document.querySelector(".popup");
    let popupClose = document.querySelector(".popup_close");

    btnBuy.addEventListener("click",popupOpen);
    tryForBtn.addEventListener("click",popupOpen);

    /* popup form close */
    popupClose.addEventListener("click",()=>{
        popup.classList.remove("popup_active");
        document.querySelector("body").style.overflow="auto";
    });
    function popupOpen(){
        popup.classList.add("popup_active");
        document.querySelector("body").style.overflow="hidden";
    }
}

/* animating smooth scroll */
function smoothScroll(){
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors){
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const blockId = anchor.getAttribute('href').substr(1);
            document.getElementById(blockId).scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });
    }
}




window.addEventListener("DOMContentLoaded", ()=>{
    aniTabs();
    slideIndexInit();
    customPlay();
    btnBuyDo();
    smoothScroll();
});