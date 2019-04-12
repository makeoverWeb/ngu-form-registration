'use strict'

const btn = document.querySelector('.form__link');
const searchField = document.querySelectorAll('.check');
const searchText = document.querySelectorAll('.form__text');
const searchLabel = document.querySelectorAll('.form__label');
const searchLink = document.querySelector('.form__link');

btn.onclick = function () {
  const arrField = Array.from(searchField);
  const fieldValue = arrField.map(item => item.value);
  const arrText = Array.from(searchText);
  const arrLabel = Array.from(searchLabel);

  const patternDate = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
  const patternMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let iter = 0;

  for(let i = 0; i < arrField.length - 1; i++) {
    let result = fieldValue[i];

    try {
      if (arrField[i].name === 'date' || arrField[i].name === 'mail') {
        if (result === '') {
          arrText[i].innerHTML = 'Введите корректное значение';
          arrLabel[i].classList.remove('green');
          arrField[i].classList.remove('green__bg');
          arrLabel[i].classList.add('red');
          arrField[i].classList.add('red__bg');
          throw new Error("Результат неопределён");
        } else  {
            if (patternDate.test(result)) {
              arrText[i].innerHTML = '';
              arrLabel[i].classList.remove('red');
              arrField[i].classList.remove('red__bg');
              arrLabel[i].classList.add('green');
              arrField[i].classList.add('green__bg');
              iter += 1;
            }
            else if (patternMail.test(result)) {
              arrText[i].innerHTML = '';
              arrLabel[i].classList.remove('red');
              arrField[i].classList.remove('red__bg');
              arrLabel[i].classList.add('green');
              arrField[i].classList.add('green__bg');
              iter += 1;
            } else {
                arrText[i].innerHTML = `Введите ${arrLabel[i].innerHTML}`;
                arrLabel[i].classList.remove('green');
                arrField[i].classList.remove('green__bg');
                arrLabel[i].classList.add('red');
                arrField[i].classList.add('red__bg');
                throw new Error("Результат неопределён");
            }
        }
      }
      if (result === '') {
        arrLabel[i].classList.remove('green');
        arrField[i].classList.remove('green__bg');
      throw new Error("Результат неопределён");
    } else {
        arrText[i].innerHTML = '';
        arrLabel[i].classList.remove('red');
        arrField[i].classList.remove('red__bg');
        arrLabel[i].classList.add('green');
        arrField[i].classList.add('green__bg');
        iter += 1;
      }
    } catch (e) {
      if (!arrLabel[i].classList.contains('red')) {
        arrText[i].innerHTML = 'Введите корректное значение';
        arrLabel[i].classList.add('red');
        arrField[i].classList.add('red__bg');
      }
    }
    if (iter > arrField.length) {
      searchLink.classList.add('very-green__bg');
      alert("Спасибо, форма принята");
      for(let j = 0; j < arrField.length - 1; j++) {
        arrField[j].setAttribute("disabled", "disabled");
      }
    }
  }
}
