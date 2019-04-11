'use strict'

const btn = document.querySelector('.form__link');
const checkField = document.querySelectorAll('.check');
const addText = document.querySelectorAll('.form__text');
const addLabel = document.querySelectorAll('.form__label');
const link = document.querySelector('.form__link');

btn.onclick = function () {
  const checkArr = Array.from(checkField);
  const checkControl = checkArr.map(item => item.value);
  const checkText = Array.from(addText);
  const checkLabel = Array.from(addLabel);

  const patternDate = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
  const patternMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let iter = 0;

  for(let i = 0; i < checkArr.length - 1; i++) {
    let result = checkControl[i];

    try {
      if (checkArr[i].name === 'date' || checkArr[i].name === 'mail') {
        if (result === '') {
          checkText[i].innerHTML = `Введите ${checkLabel[i].innerHTML}`;
          checkLabel[i].classList.remove('green');
          checkArr[i].classList.remove('green__bg');
          checkLabel[i].classList.add('red');
          checkArr[i].classList.add('red__bg');
          throw new Error("Результат неопределён");
        } else  {
            if (patternDate.test(result)) {
              checkText[i].innerHTML = '';
              checkLabel[i].classList.remove('red');
              checkArr[i].classList.remove('red__bg');
              checkLabel[i].classList.add('green');
              checkArr[i].classList.add('green__bg');
              iter += 1;
            }
            else if (patternMail.test(result)) {
              checkText[i].innerHTML = '';
              checkLabel[i].classList.remove('red');
              checkArr[i].classList.remove('red__bg');
              checkLabel[i].classList.add('green');
              checkArr[i].classList.add('green__bg');
              iter += 1;
            } else {
                checkText[i].innerHTML = `Введите ${checkLabel[i].innerHTML}`;
                checkLabel[i].classList.remove('green');
                checkArr[i].classList.remove('green__bg');
                checkLabel[i].classList.add('red');
                checkArr[i].classList.add('red__bg');
                throw new Error("Результат неопределён");
            }
        }
      }
      if (result === '') {
        checkLabel[i].classList.remove('green');
        checkArr[i].classList.remove('green__bg');
      throw new Error("Результат неопределён");
    } else {
        checkText[i].innerHTML = '';
        checkLabel[i].classList.remove('red');
        checkArr[i].classList.remove('red__bg');
        checkLabel[i].classList.add('green');
        checkArr[i].classList.add('green__bg');
        iter += 1;
      }
    } catch (e) {
      if (!checkLabel[i].classList.contains('red')) {
        checkText[i].innerHTML = `Введите ${checkLabel[i].innerHTML}`;
        checkLabel[i].classList.add('red');
        checkArr[i].classList.add('red__bg');
      }
    }
    if (iter > checkArr.length) {
      link.classList.add('very-green__bg');
      alert("Спасибо, форма принята");
    }
  }
}
