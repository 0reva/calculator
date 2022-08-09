const calculator = document.querySelector(".number");
const keys = document.querySelectorAll(".numbers");
const calcField = document.getElementById('calcField');
const equal = document.getElementById("equal");
const del= document.getElementById("del");

keys.forEach(key =>{
    key.addEventListener("click", function() {
        evaluation(key.textContent);
    })
})

equal.addEventListener("click", function(){
    document.getElementById('calcField').value = eval(document.getElementById('calcField').value)
})
function evaluation(val) {
    calcField.value += val
}

function clear() {
    document.getElementById("calcField").value= "";
   }

del.addEventListener("click", function (){clear()});






