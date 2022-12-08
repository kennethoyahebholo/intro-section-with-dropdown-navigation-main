const menuOpen = document.querySelector(".menu_icon_open");
const menuClose = document.querySelector(".menu_icon_close");
const modalOut = document.querySelector(".modal_out");
const navModal = document.querySelector(".nav_modal")
const featDrop = document.querySelector(".feat_drop")
const featDetails = document.querySelector(".feat_details")
const compDrop = document.querySelector(".comp_drop")
const compDetails = document.querySelector(".comp_details")
const featHover = document.querySelector(".feat_hover")
const featUl = document.querySelector(".featUl")
const compHover = document.querySelector(".comp_hover")
const compUl = document.querySelector(".compUl")
const dropIcon = document.querySelector(".dropIcon")
const dropIcon2 = document.querySelector(".dropIcon2")
const dropIcon3 = document.querySelector(".dropIcon2")

menuOpen.addEventListener('click' , ()=>{
 navModal.classList.remove("none");
 modalOut.classList.remove("none");
 modalOut.classList.remove("modal_remove");
})

menuClose.addEventListener('click' , ()=>{ 
 modalOut.classList.add("modal_remove");
 navModal.classList.add("none");
 featDetails.classList.toggle("none");
 compDetails.classList.toggle("none");
})

navModal.addEventListener('click', ()=>{
 modalOut.classList.add("modal_remove");
 navModal.classList.add("none");
})

featDrop.addEventListener('click', ()=>{
 featDetails.classList.toggle("none");
})

compDrop.addEventListener('click', ()=>{
 compDetails.classList.toggle("none");
})

featHover.addEventListener( "mouseover", ()=>{
 featUl.classList.remove("none");
 dropIcon.classList.add('rotate')
 
})

featHover.addEventListener( "mouseout", ()=>{
 featUl.classList.add("none");
 dropIcon.classList.remove('rotate')
 
})

featUl.addEventListener( "mouseover", ()=>{
 featUl.classList.remove("none");
})

featUl.addEventListener( "mouseout", ()=>{
 featUl.classList.add("none");
})

compHover.addEventListener( "mouseover", ()=>{
 compUl.classList.remove("none");
 dropIcon2.classList.add('rotate')
})

compHover.addEventListener( "mouseout", ()=>{
 compUl.classList.add("none");
 dropIcon2.classList.remove('rotate')
})

compUl.addEventListener( "mouseover", ()=>{
 compUl.classList.remove("none");
})

compUl.addEventListener( "mouseout", ()=>{
 compUl.classList.add("none");
})