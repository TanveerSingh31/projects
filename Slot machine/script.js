let img = document.getElementsByClassName('img');
let up = document.getElementById('up');
let down = document.getElementById('down');
let img1 = img[0];
let img2 = img[1];
let img3 = img[2];


let arr = ['&#127936;', '&#x1f3c8;', '&#9917;', '&#127951;', '&#127952;'];

function random() {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let root = document.documentElement;

let myvar;
down.disabled = true;
up.onclick = () => {
  root.style.setProperty('--speed', 3);

  up.disabled = true;
  down.disabled = false;
  myvar = setInterval(() => {
    img1.innerHTML = random();             // it was not possible by .textContent
    img2.innerHTML = random();
    img3.innerHTML = random();
  }, 500);
};



down.onclick = () => {
  down.disabled = true;
  setTimeout(() => {
    root.style.setProperty('--speed', 0);
    clearInterval(myvar);
    if (img1.innerHTML == img2.innerHTML && img1.innerHTML == img3.innerHTML) {
      setTimeout(() => {
        let val = alert('YOU WON !!');
        if (!val)
          window.location.reload();
      }, 500)
    }
    else {
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }
  }, 1000)
}

/*

down.onclick = () =>{
    clearInterval(myvar);
    up.disabled = false;
    if(img1.textContent==img2.textContent){
        if(img1.textContent==img3.textContent){
            alert("you WON!!");
        }
    }

}
*/
/*
let root = document.documentElement;
down.onclick = () => {
  setTimeout(() => {
    root.style.setProperty('--speed', 3);
    setTimeout(() => {
      root.style.setProperty('--speed', 2);
      setTimeout(() => {
        root.style.setProperty('--speed', 1);
        setTimeout(() => {
          root.style.setProperty('--speed', 0.5);
          setTimeout(() => {
            root.style.setProperty('--speed', 0.2);
            setTimeout(() => {
              root.style.setProperty('--speed', 0);
              clearInterval(myvar);
              up.disabled = false;
              if (img1.textContent == img2.textContent && img1.textContent == img3.textContent) {
                setTimeout(() => {

                  let val = alert('you WON!!');
                  if (!val) {
                    window.location.reload();
                  }

                }, 1000);
              } else {

                setTimeout(() => {
                  window.location.reload();
                }, 1500);

              }
            }, 1000 / 0.2 + 500);
          }, 1000 / 0.5 + 500);
        }, 1000 / 1 + 500);
      }, 1000 / 2 + 500);
    }, (1000 / 3));
  }, 250);
};
*/