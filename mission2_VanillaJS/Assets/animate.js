function moveShip() {
  window.addEventListener("load", (event) => {
    var move = 100;
    var updown = 350;
    var changeDir = 1;
    var changeDirUp = 1;
    setInterval(() => {
      ship.style.left = move + "px";
      ship.style.top = updown + "px";

      move = move + 0.3 * changeDir;
      updown = updown + 0.2 * changeDirUp;

      if (move >= 120) {
        changeDir = -1;
      } else if (move <= 100) {
        changeDir = 1;
      }
      if (updown >= 360) {
        changeDirUp = -1;
      } else if (updown <= 350) {
        changeDirUp = 1;
      }
    }, 20);
  });
}

function moveKinton() {
  window.addEventListener("load", (event) => {
    var move = 60;
    var move2 = 30;
    var move3 = 45;
    var move4 = 80;
    var move5 = 5;
    var move6 = 90;
    var Dir = -1;
    setInterval(() => {
      cloud1.style.left = move + "vw";
      cloud2.style.left = move2 + "vw";
      cloud3.style.left = move3 + "vw";
      cloud4.style.left = move4 + "vw";
      cloud5.style.left = move5 + "vw";
      cloud6.style.left = move6 + "vw";
      move = move + 0.2 * Dir;
      move2 = move2 + 0.225 * Dir;
      move3 = move3 + 0.217 * Dir;
      move4 = move4 + 0.22 * Dir;
      move5 = move5 + 0.2 * Dir;
      move6 = move6 + 0.215 * Dir;
      if (move <= -10) {
        cloud1.style.left = 100 + "vw";
        move = 100;
      }
      if (move2 <= -10) {
        cloud2.style.left = 100 + "vw";
        move2 = 100;
      }
      if (move3 <= -10) {
        cloud3.style.left = 100 + "vw";
        move3 = 100;
      }
      if (move4 <= -10) {
        cloud4.style.left = 100 + "vw";
        move4 = 100;
      }
      if (move5 <= -10) {
        cloud5.style.left = 100 + "vw";
        move5 = 100;
      }
      if (move6 <= -10) {
        cloud6.style.left = 100 + "vw";
        move6 = 100;
      }
    }, 20);
  });
}

function appearText() {
  window.addEventListener("load", (event) => {
    var opacity = 0;
    var fadeIn = setInterval(() => {
      opacity += 0.005;
      content.style.opacity = opacity;
      if (opacity == 1) clearInterval(fadeIn);
    }, 20);
  });
}

function Mountain1() {
  window.addEventListener("load", (event) => {
    var opacity = 0;
    var fadeIn = setInterval(() => {
      opacity += 0.07;
      mountain1.style.opacity = opacity;
      if (opacity == 1) clearInterval(fadeIn);
    }, 20);
  });
}

function Mountain2() {
  window.addEventListener("load", (event) => {
    var distance = 3;
    var moveIn = setInterval(() => {
      mountain2.style.bottom = distance + "vh";
      distance += 1;
      if (distance >= 37) clearInterval(moveIn);
    }, 20);

    var opacity = 0;
    var fadeIn = setInterval(() => {
      opacity += 0.02;
      mountain2.style.opacity = opacity;
      if (opacity == 1) clearInterval(fadeIn);
    }, 20);
  });
}

function Mountain3() {
  window.addEventListener("load", (event) => {
    var distance = 3;
    var moveIn = setInterval(() => {
      mountain3.style.bottom = distance + 4 + "vh";
      distance += 0.6;
      if (distance >= 37) clearInterval(moveIn);
    }, 20);

    let opacity = 0;
    let fadeIn = setInterval(() => {
      opacity += 0.02;
      mountain3.style.opacity = opacity;
      if (opacity == 1) clearInterval(fadeIn);
    }, 20);
  });
}

function moveStripSea() {
  window.addEventListener("load", (event) => {
    var move = 32;
    var changeDir = 1;
    setInterval(() => {
      stripSea.style.left = move + "vw";
      move = move + 0.1 * changeDir;

      if (move >= 40) {
        changeDir = -1;
      } else if (move <= 32) {
        changeDir = 1;
      }
    }, 20);
  });
}

Mountain1();
Mountain2();
Mountain3();
moveShip();
moveKinton();
moveStripSea();
appearText();
