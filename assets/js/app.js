const botonArriba = document.getElementById("btn-arriba");

botonArriba.addEventListener("click", function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});