const c = +prompt('Введите первое число!');
const d = +prompt('Введите второе число!');
const e = +prompt('Введите третье число!');

if (c > d && e > c || d > c && e < c){
    alert('Среднее число ' + c)
} else if (d > c && d < e || d < c && d > e){
    alert('Среднее число ' + d)
} else if (e > c && e < d || e > d && e < c) {
    alert('Среднее число ' + e)
} else if (c == d == e || c == d || c == e || e == d){
    alert('Пишите разные числа')
} else {
    alert('Что-то пошло не так!')
}