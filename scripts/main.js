'use strict';

const inputBill = document.querySelector('.js-input-bill');
const customTip = document.querySelector('.js-custom');
const inputNumberPeople = document.querySelector('.js-number-people');
const btnTip = document.querySelectorAll('.js-tip-btn');
const total = document.querySelector('.js-total');
const errNPeople = document.querySelector('.err-message');
const resetBtn = document.querySelector('.js-reset-btn');

/* **************funcion para calcular el total por persona************** */
function handleInputBill() {
  let inputValue = inputBill.value;
  let inputPeopleValue = inputNumberPeople.value;
  let totalF = inputValue / inputPeopleValue;
  total.innerHTML = '$' + totalF.toFixed(2);
}

inputNumberPeople.addEventListener('keyup', handleInputBill);

/* ******funcion para que se ponga en el total/persona el total de la cuenta nada mas introducir el valor en el input bill.******* */
function testBill() {
  let inputValue = Number(inputBill.value);
  total.innerHTML = `$ ${inputValue}`;
  validateNPeople();
}

inputBill.addEventListener('keyup', testBill);

/* **************funcion para validar number of people************** */
const validateNPeople = () => {
  let valueInputPeople = inputNumberPeople.value;
  if (valueInputPeople <= 0) {
    return (errNPeople.innerHTML = "Can't be zero");
  }
};
//funcion para coger el valor del input del numero de personas
// function handleInputPeople() {
//   let inputPeopleValue = inputNumberPeople.value;
//   //   console.log(inputPeopleValue);
// }

// inputNumberPeople.addEventListener('keyup', handleInputPeople);

console.log(btnTip.value);

/* ***********funcion para que al clickar sobre cada boton de la propina le cambie el estilo ************** */
btnTip.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
);

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
