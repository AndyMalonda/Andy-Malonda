console.log("script ok");
 
 // apparition du bouton retour en haut
 window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
 })

// ouverture du popup

function popUpCopie() {
var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
    function finPopUp() {
      popup.classList.toggle("hide");
    }
    setTimeout(finPopUp, 2000);
}

// apparition des par dans l'index 

function p1() {
  var par = document.getElementById("par1");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 2000);
}

p1();

function p2() {
  var par = document.getElementById("par2");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 4000);
}

p2();

function p3() {
  var par = document.getElementById("par3");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 6000);
}

p3();

function p4() {
  var par = document.getElementById("par4");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 9000);
}

p4();

function p5() {
  var par = document.getElementById("par5");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 12000);
}

p5();

function p6() {
  var par = document.getElementById("par6");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 15000);
}

p6();

function p7() {
  var par = document.getElementById("par7");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 18000);
}

p7();

function p8() {
  var par = document.getElementById("par8");
  function show() {
    par.classList.toggle("intro");
  }
  setTimeout(show, 21000);
}

p8();