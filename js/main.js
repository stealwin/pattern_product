
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
aniTabs();
/*  */
let slideIndex=1;
function slideIndexInit(){
    
    showSlides(slideIndex);
}

slideIndexInit();

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

