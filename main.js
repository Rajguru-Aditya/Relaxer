const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500; // 7.5 seconds (7500)
const breatheTime = (totalTime / 5) * 2; // 3 seconds (3000)
const holdTime = totalTime / 5; // 1.5 seconds (1500)

breatheAnimation();

// The animation that changes the text in the circle and change circle size
function breatheAnimation() {
  text.innerHTML = "Breathe In!"; // Display breathe in text
  container.className = "container grow"; // Make the circle expand by adding grow class to the container

  setTimeout(() => {
    text.innerText = "Hold"; // Display hold text after timer ends (breatheTime = 3 seconds)

    setTimeout(() => {
      text.innerText = "Breathe Out!"; // Display Breathe out text after timer ends (holdTime = 1.5 seconds)
      container.className = "container shrink"; // Make the circle contractby adding shrink class to the container
    }, holdTime);
  }, breatheTime);
}

// Loop the animation after total time = 7.5 seconds
setInterval(breatheAnimation, totalTime);
