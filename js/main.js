const progressClass  = '.j-progress1'

const progressObj = {
// value  значение прогресс бара
// increment приращение.
    bar: document.querySelector(progressClass),
    increment: null,
    value() {
        return parseInt(this.bar.style.width, 10);
    },
    append() {
        value = this.value() + this.increment;
        if (value <= 100) {
            this.bar.style.width = `${value}%`;
            this.bar.textContent = `${value}%`;
        };
    },
    reset() {
        this.bar.style.width = `0%`;
        this.bar.textContent = `0%`;
    },
}

// кнопки
const btn1 = document.querySelector('.j-btn1');
const btn3 = document.querySelector('.j-btn3');
const btn7 = document.querySelector('.j-btn7');
const btnReset = document.querySelector('.j-btn-reset');



btn1.addEventListener('click', () => {
    progressObj.increment = 1;
    progressObj.append();
  });

btn3.addEventListener('click', () => {
    progressObj.increment = 3;
    progressObj.append();
  });

btn7.addEventListener('click', () => {
    progressObj.increment = 7;
    progressObj.append();
  });

btnReset.addEventListener('click', () => {
    progressObj.reset();
  });

document.addEventListener("DOMContentLoaded", function(event) { 
    // а тут нужно ждать когда загрузится весь код? вот эту часть можно убрать?
  });