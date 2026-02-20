const text = document.getElementById("color-1");

text.addEventListener("click", function() {
    text.style.color = "orange";
}); 


const title = document.getElementById("color-1");
const momoImage = document.getElementById("momoImage");
const button = document.getElementById("funFactButton");
const momoAudio = document.getElementById("momoAudio");

title.addEventListener("click", () => {
  title.style.color = "orange";
});

function playSound() {
  momoAudio.currentTime = 0;
  momoAudio.play();
}

momoImage.addEventListener("click", playSound);
button.addEventListener("click", playSound);