'use strict';

const inputBill = document.querySelector('.js-input-bill');
const customTip = document.querySelector('.js-custom');
const inputNumberPeople = document.querySelector('.js-number-people');
const btnTip = document.querySelectorAll('.js-tip-btn');

//funcion para coger el valor del input de la cuenta.
function handleInputBill() {
  let inputValue = inputBill.value;
  //   console.log(inputValue);
}

inputBill.addEventListener('keyup', handleInputBill);

//funcion para coger el valor del input del numero de personas
function handleInputPeople() {
  let inputPeopleValue = inputNumberPeople.value;
  //   console.log(inputPeopleValue);
}

inputNumberPeople.addEventListener('keyup', handleInputPeople);

//funcion para coger el valor del input del % tip
function handleCustomTip() {
  let inputCustom = customTip.value;
  //   console.log(inputCustom);
}

customTip.addEventListener('keyup', handleCustomTip);

//funcion para que al clickar sobre cada boton de la propina le cambie el estilo
btnTip.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
);
