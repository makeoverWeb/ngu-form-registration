'use strict'

const btn = document.querySelector('#submit');
const checkField = document.querySelectorAll('.check');
const addText = document.querySelectorAll('.form__group');
const addLabel = document.querySelectorAll('.form__label');

btn.onclick = function () {
  const checkArr = Array.from(checkField);
  const checkControl = checkArr.map(item => item.value);
  const checkGroup = Array.from(addText);
  const checkLabel = Array.from(addLabel);

  for(let i = 0; i < checkArr.length - 1; i++) {
    let result = checkControl[i];
    try {
      if (result === '') {
        checkLabel[i].classList.remove('green');
      throw new Error("Результат неопределён");
    } else {
        checkGroup[i].classList.remove('fz20');
        checkGroup[i].classList.add('fz0');
        checkLabel[i].classList.remove('red');
        checkLabel[i].classList.add('green');
      }
    } catch (e) {
      if (!checkLabel[i].classList.contains('red')) {
        checkGroup[i].append(`Введите ${checkLabel[i].innerHTML}`);
        checkLabel[i].classList.add('red');
        checkGroup[i].classList.remove('fz0');
        checkGroup[i].classList.add('fz20');
      }
    }
  }
}
