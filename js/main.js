let profile = document.querySelector(".profile");
let stories = document.querySelectorAll(".storie-content .stories");
let arrowRight = document.querySelector(".arrow-right");
let arrowLeft = document.querySelector(".arrow-left");
let move = 100;
console.log(stories);

arrowRight.addEventListener("click", (e) => {
  move += 100;
  for (let index = 0; index < stories.length; index++) {
    stories[index].style.transform = `translateX(${-move + "px"})`;
    stories[index].style.transition = "0.5s linear";
  }
  document.querySelector(".arrow-left").style.opacity = "1";
});

arrowLeft.addEventListener("click", () => {
  if (move !== 0 || move > 0) {
    move -= 100;

    for (let index = 0; index < stories.length; index++) {
      stories[index].style.transform = `translateX(${-move + "px"})`;
      stories[index].style.transition = "0.3s linear";
    }
  } else {
    document.querySelector(".arrow-left").style.opacity = "0";
  }
});

profile.addEventListener("click", showCardProfile);

function showCardProfile() {
  document.querySelector(".card-profile").classList.toggle("hidden");
}
