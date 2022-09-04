function moveShip() {
  window.addEventListener("load", (event) => {
    var animate;
    var move = 100;
    var changeDir = 1;
    let timer = setInterval(() => {
      ship.style.left = move + "px";
      move = move + 1 * changeDir;
      if (move >= 200) {
        changeDir = -1;
      } else if (move <= 100) {
        changeDir = 1;
      }
    }, 20);
  });
}

function moveShip2() {
  window.addEventListener("load", (event) => {
    var animate;
    var move = 100;
    var changeDir = 1;
    let timer = setInterval(() => {
      ship2.style.left = move + "px";
      move = move + 1 * changeDir;
      if (move >= 200) {
        changeDir = -1;
      } else if (move <= 100) {
        changeDir = 1;
      }
    }, 20);
  });
}

// function stop() {
//   clearTimeout(animate);
//   imgObj.style.left = "0px";
//   time = 0;
// }

moveShip();
moveShip2();
