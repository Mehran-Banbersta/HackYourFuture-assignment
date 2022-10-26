


///////////////////////
//

const slider = document.getElementById('slider')
const prevSlider = document.getElementById('prev')
const nextSlider = document.getElementById('next')

nextSlider.addEventListener('click', (e) => {
console.log('click')
slider.scrollBy(470, 0)
})

prevSlider.addEventListener('click', (e) => {
 console.log('click')
 slider.scrollBy(-480, 0)
})



let modal = document.getElementById('modal')
document.getElementById('mobile-nav').innerHTML = `
<div id="modal">

<nav class="mobile-nav__list">
<button id="close-nav">x</button>
   <ul>
    <li><a href="#home">HOME</a></li>
    <li><a href="#about-me">ABOUT ME</a></li>
    <li><a href="#recipe">RECIPES</a></li>
    <li><a href="#ingredients">INGREDIENTS</a></li>
    <li><a href="#contact-me">CONTACT ME</a></li>
   </ul>
  </nav>
 
</div>

`
//
//
//

document.getElementById('open-nav').addEventListener('click', function(){
 console.log("open")
document.getElementById('modal').style.display = "block"
})

document.getElementById('close-nav').addEventListener('click', function(event){
 console.log("close")
 document.getElementById('modal').style.display = "none"

})