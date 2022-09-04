function moveShip() {
  window.addEventListener("load", (event) => {
    var animate;
    var move = 100;
    var changeDir = 1;
    let timer = setInterval(() => {
      ship.style.left = move + "px";
      move = move + 1 * changeDir;
      if (move >= 150) {
        changeDir = -1;
      } else if (move <= 100) {
        changeDir = 1;
      }
    }, 20);
  });
}

function appearBG() {
  window.addEventListener("load", (event) => {
    let distance = -200;
    let moveIn = setInterval(() => {
      stones.style.bottom = distance + "px";
      moon.style.top = distance + "px";
      distance += 1;
      if (distance == 0) clearInterval(moveIn);
    }, 5);

    let opacity = 0;
    let fadeIn = setInterval(() => {
      opacity += 0.05;
      command.style.opacity = opacity;
      if (opacity == 1) clearInterval(fadeIn);
    }, 50);
  });
}

// function stop() {
//   clearTimeout(animate);
//   imgObj.style.left = "0px";
//   time = 0;
// }

appearBG();
moveShip();
