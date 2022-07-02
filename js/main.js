var elItem =document.querySelectorAll(".features__item");
var elLink=document.querySelectorAll(".features__link");
var elFeaturesItem = document .querySelectorAll(".features__box-inner");

elLink.forEach(function(links){
    
    links.addEventListener("click", function(evt){
        evt.preventDefault();
        
        elItem.forEach(function(item){
            item.classList.remove("features__item--active");
        })
        
        links.parentElement.classList.add("features__item--active");

        elFeaturesItem.forEach(function(featuresItem){
            featuresItem.classList.remove("features__box-inner--active");
        })

        document.querySelector(links.getAttribute("href")).classList.add("features__box-inner--active");
    })
    
    
    
})