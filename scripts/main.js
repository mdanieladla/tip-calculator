'use strict';

const inputBill = document.querySelector('.js-input-bill');
const customTip = document.querySelector('.js-custom');
const inputNumberPeople = document.querySelector('.js-number-people');
const btnTip = document.querySelectorAll('.js-tip-btn');
const total = document.querySelector('.js-total');
const errNPeople = document.querySelector('.err-message');
const resetBtn = document.querySelector('.js-reset-btn');
const tipAmount = document.querySelector('.js-tip-amount');

let bill = 0;
let tip = 0;
let people = 1;

/* **************funcion para coger el valor de bill************** */
inputBill.addEventListener('input', (e) => {
  bill = Number(inputBill.value);
  calc();
});

/* ****************** boton porcentaje **************** */
btnTip.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    tip = btn.value;
    let target = e.currentTarget;
    //quitamos la clase active si el usuario escoge nuevo %
    btnTip.forEach((item) => {
      if (item !== btn) {
        item.classList.remove('active');
      }
    });
    //añadimos la clase active si el usuario coge nuevo %
    btn.classList.toggle('active');

    //para que si está seleccionado un botón no se pueda introducir el % en el input custom
    if (target.classList.contains('active')) {
      customTip.disabled = true;
      customTip.value = '';
      calc();
    } else {
      customTip.disabled = false;
    }
  });
});

/* ****** número de personas. ******* */
inputNumberPeople.addEventListener('input', (e) => {
  people = Number(inputNumberPeople.value);

  if (people <= 0) {
    inputNumberPeople.classList.add('err-message');
    errNPeople.style.visibility = 'visible';
  } else {
    inputNumberPeople.classList.remove('err-message');
    errNPeople.style.visibility = 'hidden';
    calc();
  }
});

/* **************funcion para coger el valor del input del % tip************** */
customTip.addEventListener('input', () => {
  tip = Number(customTip.value);
  calc();
});

/* *****************funcion para calcular ************************ */
function calc() {
  if (bill >= 0 && people >= 1) {
    let amountTip = (bill * tip) / 100;
    let totalInsideCalc = amountTip + bill;
    tipAmount.innerHTML = `$${(amountTip / people).toFixed(2)}`;
    total.innerHTML = `$${(totalInsideCalc / people).toFixed(2)}`;
  }
}

/* **************reset boton************** */
function handleClickResetBtn() {
  location.reload();
}

resetBtn.addEventListener('click', handleClickResetBtn);
