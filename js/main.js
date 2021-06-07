
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