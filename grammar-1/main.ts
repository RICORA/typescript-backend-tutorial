let x = 12345;
console.log(x);

x = 54321;
console.log(x);

const c = 299792458;
console.log(c);
// c = 662607015; // 再代入するとエラー！（コメントアウトしてください）


let n: number = 415;
// let s: string = 666; // 文字列型の変数に数値型の値は代入できません！（コメントアウトしてください）


let arr = [1, 1, 2, 3, 5, 8, 13];
console.log(arr[3]);


let y = 5;

if (y < 0) {
    console.log("x is negative!");
} else if (y < 10) {
    console.log("x is small!");
} else {
    console.log("x is large!");
}


for (let elm of arr) {
    console.log(elm);
}
