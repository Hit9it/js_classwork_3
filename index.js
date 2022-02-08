let line = "_________________________";
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let arrWhile = 0;
while (arrWhile < 10) {
    console.log(arr[arrWhile]);
    arrWhile++;
}
console.log(line);

// 2. перебрати його циклом for
for (let i = 0; i < 10; i++) {
    console.log(arr[i])
}
console.log(line);

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arrWhile2 = 0;
while (arrWhile2 < 10) {
    if (arrWhile2 % 2 === 0) {
        console.log(arr[arrWhile2]);
    }
    arrWhile2++;
}
console.log(line);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(line);

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let arrWhile3 = 0;
while (arrWhile3 < 10) {
    if (arr[arrWhile3] % 2 === 0) {
        console.log(arr[arrWhile3]);
    }
    arrWhile3++;
}
console.log(line);

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < 10; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(line);

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < 10; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten'
    }
    console.log(arr[i]);
}
console.log(line);

// 8. вивести масив в зворотньому порядку.
for (let i = 9; i > -1; i--) {
    console.log(arr[i]);
}
console.log(line);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//1
arrWhile = 9;
while (arrWhile > -1) {
    console.log(arr[arrWhile]);
    arrWhile--;
}
console.log(line);

//2
for (let i = 9; i > -1; i--) {
    console.log(arr[i])
}
console.log(line);

//3
arrWhile2 = 9;
while (arrWhile2 > -1) {
    if (arrWhile2 % 2 === 0) {
        console.log(arr[arrWhile2]);
    }
    arrWhile2--;
}
console.log(line);

//4
for (let i = 9; i > -1; i--) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(line);

//5
arrWhile3 = 9;
while (arrWhile3 > -1) {
    if (arr[arrWhile3] % 2 === 0) {
        console.log(arr[arrWhile3]);
    }
    arrWhile3--;
}
console.log(line);

//6
for (let i = 9; i > -1; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(line);

//7
for (let i = 9; i > -1; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten'
    }
    console.log(arr[i]);
}
console.log(line);