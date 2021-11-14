
/* Animating Tabs */
function aniTabs(){
    let tabs =document.querySelectorAll(".service-tabs__item");

    for( let tab of tabs){
        if (!tab.classList.contains("service-tabs__item--active")){
            tab.addEventListener('click', e=>{          
                for (let prevTab of tabs){
                    if (prevTab.classList.contains("service-tabs__item--active")){
                        prevTab.classList.remove("service-tabs__item--active");
                    }
                }
                tab.classList.add("service-tabs__item--active");          
            });
    
        }
      
    }
}

/* slides   */

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.team-crew__arrows .arrow__prev');
		this.btnNext = this.root.querySelector('.team-crew__arrows .arrow__next');
	
		this.images = this.root.querySelectorAll('.worker-card');
		this.i = 0;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });

		this.leftAnim = [ {transform: 'translateX(100%)'}, 
		{transform: 'translateX(0)'} ];
		this.rightAnim = [ {transform: 'translateX(-100%)'}, 
		{transform: 'translateX(0)'} ];

	}

	prev(){
		
		if(!this.animated){
			
			let imgHide = this.images[this.i];
			
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i]);
		}
		
		
	}

	next(){
		if(!this.animated){
			
			let imgHide = this.images[this.i];
		
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toogleSlides(imgHide, this.images[this.i],true);
			
		}
	}

	toogleSlides(imgHide, showImg,isNext=false){
	
		this.animated = true;
       
		showImg.classList.add('worker-card--showed');
		
		showImg.animate( isNext ? this.rightAnim :this.leftAnim, {duration:500} );
		let hideAnimate = imgHide.animate(isNext ? this.leftAnim : this.rightAnim,
			{
				duration:500,
				direction:'reverse'
			});
		hideAnimate.addEventListener("finish",()=>{
			imgHide.classList.remove('worker-card--showed');
			this.animated = false;
		});

		

	}
}

/*  let slideIndex=1;
function slideIndexInit(){
    
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
 
function showSlides(n){
    
    let slides = document.getElementsByClassName("worker-cards");
    if(n>slides.length) slideIndex=1;
    if (n<1) slideIndex = slides.length;
    for (let slide of slides){
        slide.style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].style.transition = "opacity 0.3s ease 0.3s"; 

}  */

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
    let popupClose = document.querySelector(".popup__close");

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
    /*  slideIndexInit(); */
 let slider =new Slider('.team-crew');
 setInterval(function(){
    slider.next();
}, 3000);
    customPlay();
    btnBuyDo();
    smoothScroll();
});