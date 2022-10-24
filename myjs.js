let modal = document.getElementById('modal')
document.getElementById('mobile-nav').innerHTML = `
<div id="modal">

<nav class="mobile-nav__list">
<button id="close-nav">x</button>
   <ul>
    <li><a href="">HOME</a></li>
    <li><a href="">GALLERY</a></li>
    <li><a href="">BLOG</a></li>
    <li><a href="">PAGES</a></li>
    <li><a href="">CONTACT</a></li>
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