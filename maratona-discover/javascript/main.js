// eventos
function print() {
    console.log("print");
}

const input = document.querySelector("input");

// eventos via teclado
input.onkeydown = function() {
    console.log("rodei");
}

// adicionando eventos via js
const li = document.querySelector("li");

li.addEventListener('mouseover', print);

/* li.onclick = function() {
    console.log("Hey you!");
} */

li.addEventListener('dblclick', function() {
    console.log("Outro momento!");
})

// argumento event
input.onkeydown = function(event) {
    console.log(event.key);
}