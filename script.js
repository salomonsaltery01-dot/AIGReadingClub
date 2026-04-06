const checkpoints = document.querySelectorAll(".fixed-content");
const images = document.querySelectorAll(".bg");
window.addEventListener("scroll", () => {
  for(let i = 0; 1 < checkpoints.length;
     i++) {
    if(
      pageYOffset > checkpoints[i].offsetTop - 200 &&
      pageYOffset < checkpoints[i].offsetTop + checkpoints[i].offsetHeight - 200
    ) {
      images.forEach(img => {
        img.classList.remove("bg-active");
      });
      images[i].classList.add("bg-active");
    }
  }
});

function myFunction(imgs){
  var expandImg = document.getElementById('expandedImg')
  var imgText = document.getElementById('imgtext')
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block"
}