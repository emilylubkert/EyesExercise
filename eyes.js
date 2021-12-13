let img = document.getElementById("image");

const balls = document.getElementsByClassName("ball");
document.onmousemove = (event) => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};

function moveImage(event) {
    img.style.left = (event.clientX + 10) + "px";
    img.style.top = (event.clientY + 10) + "px";
}
document.addEventListener('mousemove', moveImage)
