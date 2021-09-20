const firstSpeed = 20;
const secondSpeed = 40;
const thirdSpeed = 90;

var elForm = document.querySelector('.form-js');
var elInput = document.querySelector('.input-js');
var elButton = document.querySelector('.button-js');

var elFirstResult = document.querySelector('.result-p');
var elSecondResult = document.querySelector('.result-v');
var elThirdResult = document.querySelector('.result-m');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var inputNum = parseInt(elInput.value.trim(), 10);

    var first = inputNum / firstSpeed;
    var second = inputNum / secondSpeed;
    var third = inputNum / thirdSpeed;

    elFirstResult.textContent = `Piyoda: ${first} soat`;
    elSecondResult.textContent = `Velosiped: ${second} soat`;
    elThirdResult.textContent = `Avtomobilda: ${third} soat`;
});