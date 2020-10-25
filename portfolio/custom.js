

// linking html custom classes with a variable in javascript
const cards = document.querySelector(".cards");
const popup = document.querySelector(".popup-box");
const popupClose = popup.querySelector(".popup-close")


// if a button is clicked from the card, open pop up
cards.addEventListener("click", function(event){

    if(event.target.tagName.toLowerCase() == "button"){

        //linking custom classes to variables
        const frame = event.target.parentElement;
        const h3 = frame.querySelector("h3").innerHTML;
        const more = frame.querySelector(".more").innerHTML;

        //linking custom classes to template classes
        popup.querySelector("h3").innerHTML= h3;
        popup.querySelector(".popup-body").innerHTML= more;
        popupBox();
    }
})

//if a button is click from the popup window, close pop up
popupClose.addEventListener("click",popupBox);


//popup function
function popupBox(){
    popup.classList.toggle("open");
}