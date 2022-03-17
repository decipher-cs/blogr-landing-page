

/////////////////////////////////////////////////////
// NAVBAR - DESKTOP - AUTOCLOSE DROPDOWN ON UNFOCUS//
////////////////////////////////////////////////////

const navItemCheckbox = document.querySelectorAll(".nav-input");
const navItemLabel = document.querySelectorAll(".nav-list-wrapper-label")


navItemLabel.forEach((e)=>{
    e.setAttribute("tabindex", "0")
})

navItemLabel.forEach((label)=>{
    label.addEventListener("blur", (e)=>{
        let navCheckbox = document.getElementById(label.getAttribute("for"));
        navCheckbox.checked = false;

    })
})

////////////////////////////////////////////////
/////////  Auto close hamburger menu  /////////
//////////////////////////////////////////////

const hamburgerCheckbox = document.getElementById("menu-btn-checkbox")

window.addEventListener("resize", (btn)=>{
    if (window.innerWidth > 700){
        hamburgerCheckbox.checked = false
    }
})

window.onscroll = function(){
    if (window.pageYOffset > 371){
        hamburgerCheckbox.checked = false
    }
}