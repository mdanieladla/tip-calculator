'use strict';

const inputBill = document.querySelector('.js-input-bill');
const customTip = document.querySelector('.js-custom');
const inputNumberPeople = document.querySelector('.js-number-people');
const btnTip = document.querySelectorAll('.js-tip-btn');
const total = document.querySelector('.js-total');
const errNPeople = document.querySelector('.err-message');
const resetBtn = document.querySelector('.js-reset-btn');
const tipAmount = document.querySelector('.js-tip-amount');

/* **************funcion para calcular el total por persona************** */
function handleInputBill() {
  let inputValue = inputBill.value;
  let inputPeopleValue = inputNumberPeople.value;
  let totalF = inputValue / inputPeopleValue;
  total.innerHTML = '$' + totalF.toFixed(2);
}

inputNumberPeople.addEventListener('keyup', handleInputBill);

//no termina de funcionar :(((((((((((((
// function handleTips() {
//   btnTip.forEach((btn) =>
//     btn.addEventListener('click', () => {
//       let value = btn.value;
//       // console.log(value);
//       let inputValue = inputBill.value;
//       let inputPeopleValue = inputNumberPeople.value;
//       let total = (inputValue * value) / 100 / inputPeopleValue;
//       tipAmount.innerHTML = '$' + total.toFixed(2);
//     })
//   );
// }
// inputNumberPeople.addEventListener('keyup', handleTips);

/* ******funcion para que se ponga en el total/persona el total de la cuenta nada mas introducir el valor en el input bill.******* */
function testBill() {
  let inputValue = Number(inputBill.value);
  total.innerHTML = `$ ${inputValue}`;
  validateNPeople();
}

inputBill.addEventListener('keyup', testBill);

/* ***********funcion para que al clickar sobre cada boton de la propina le cambie el estilo ************** */
btnTip.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
);
/* ***********funcion para que al clickar sobre cada boton de la propina coja el valor de cada uno ************** */
btnTip.forEach((btn) =>
  btn.addEventListener('click', () => {
    let getValue = btn.value;
    console.log(getValue);
  })
);

/* **************funcion para coger el valor del input del % tip************** */
function handleCustomTip() {
  let inputCustom = customTip.value;
  console.log(inputCustom);
}

customTip.addEventListener('keyup', handleCustomTip);

/* **************reset boton************** */
function handleClickResetBtn() {
  location.reload();
}

resetBtn.addEventListener('click', handleClickResetBtn);
