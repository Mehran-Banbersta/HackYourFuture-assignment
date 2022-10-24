let modal = document.getElementById('modal')
document.getElementById('mobile-nav').innerHTML = `
<div id="modal">

<nav class="mobile-nav__list">
<button id="close-nav">x</button>
   <ul>
    <li><a href="">Home</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Programs</a></li>
    <li><a href="">More Info</a></li>
    <li><a href="">Contact Us</a></li>
   </ul>
  </nav>
 
</div>

`


document.getElementById('open-nav').addEventListener('click', function(){
 console.log("open")
document.getElementById('modal').style.display = "block"
})

document.getElementById('close-nav').addEventListener('click', function(event){
 console.log("close")
 document.getElementById('modal').style.display = "none"
 if (event.target === modal) {
  modal.style.display = "none";
}
})