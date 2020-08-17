const progress1 = document.querySelector('.j-progress1');

// value начальное значение прогресс бара
// increment приращение “+1%”, “+3%” и “+7%”.

function addValueprogress(a, b) {
    let value = a;
    const increment = b;
// стрелочная функция не имеет собственного контекста выполнения.
// значение value и increment проваливается сверху
    return(() => {
        return value = value + increment;
    })
}

let res1 = addValueprogress(0, 7);
console.log(res1())
console.log(res1())
console.log(res1())
console.log(res1())
console.log(res1())
