 var icon = document.getElementById("night-mode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./images/brightness.png";
    }
    else{
        icon.src = "./images/Vector.png";
    }
} 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navabarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
    navabarLinks.classList.toggle('active')
})