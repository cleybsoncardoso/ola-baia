let trafItaparica = document.getElementById("trafItaparica");
let trafCachaPrego = document.getElementById("trafCachaPrego");
let trafMadre = document.getElementById("trafMadre");
let trafVeraCruz = document.getElementById("trafVeraCruz");
let trafPonta = document.getElementById("trafPonta");

function updateTrafData(time, trafObject, value) {
  setTimeout(function() {
    trafObject.style.width = value;
  }, time);
}

updateTrafData(1500, trafItaparica, "85%");
updateTrafData(2000, trafCachaPrego, "65%");
updateTrafData(2500, trafMadre, "15%");
updateTrafData(3000, trafVeraCruz, "85%");
updateTrafData(3500, trafPonta, "30%");