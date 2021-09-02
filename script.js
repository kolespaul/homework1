// 1) Task #1

let a = parseInt(prompt('Number one', ''));
let b = parseInt(prompt('Number two', ''));

if (b < 2 || b > 36 || isNaN(a) || isNaN(b)){
    console.log('Некорректный ввод!');
} else {
    let c = a.toString(b);
    console.log(c);
}


// 2) Task #2

let d = parseInt(prompt('Number one', ''));

if (isNaN(d)) {
    console.log('Некорректный ввод!');
} else {
    let e = parseInt(prompt('Number two', ''));

    if (isNaN(e)) {
        console.log('Некорректный ввод!');
    } else {
        let f = d + e;
        let g = d / e;
        console.log(`Ответ: ${f}, ${g}.`);
    }
}



