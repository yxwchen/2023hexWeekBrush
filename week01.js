// A1:相加產生器 (+)
function add(num1, num2) {
    console.log(num1 + num2);
}
console.log("=====A1:相加產生器 (+)=====");
add(1, 1);
add(2, 2);
add(3, 3);

// A2:相減產生器 (-)
function subtract(num1, num2) {
    console.log(num1 - num2);
}
console.log("=====A2:相減產生器 (-)=====");
subtract(1, 1);
subtract(2, 3);
subtract(8, 3);

// A3:相乘三次 (*)
function multiply3Times(num) {
    console.log(num ** 3);
}
console.log("=====A3:相乘三次 (*)=====");
multiply3Times(3);
multiply3Times(0);
multiply3Times(9);
// A4:取 2 的餘數（%）
function remainder(num) {
    console.log(num % 2);
}
console.log("=====A4:取 2 的餘數（%）=====");
remainder(3);
remainder(2);
remainder(8);

// A5:取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)
function isDivisible(num) {
    if (num % 2 === 0) {
        console.log("已整除");
    } else if (num % 2 === 1) {
        console.log("未整除");
    } else {
        console.log("數值有誤，請重新輸入");
    }
}
console.log("=====A5:取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)=====");
isDivisible(3);
isDivisible(2);
isDivisible(8);

// A6:我要存錢(區域變數、全域變數)
let bankMoney = 0;

function addBankMoney(num) {
    bankMoney += num;
    return console.log(`bankMoney 值為${bankMoney}`);
}
console.log("=====A6:我要存錢(區域變數、全域變數)=====");
addBankMoney(1);
addBankMoney(50);
addBankMoney(10);

// A7:簡單計算機
function calculate(num1, num2, symbol) {
    if (symbol === "+") {
        console.log(num1 + num2);
    } else if (symbol === "-") {
        console.log(num1 - num2);
    } else if (symbol === "*") {
        console.log(num1 * num2);
    } else if (symbol === "/") {
        console.log(num1 / num2);
    } else {
        console.log(`type error.try again.`);
    }
}
console.log("=====A7:簡單計算機=====");
calculate(3, 5, "+");
calculate(4, 2, "-");
calculate(7, 9, "*");
calculate(5, 5, "/");

// A8:簡單計算機 + 顯示算式過程
function calculateProcess(num1, num2, symbol) {
    switch (symbol) {
        case "+":
            console.log(`${num1}+${num2}=${num1 + num2}`);
            return num1 + num2;
        case "-":
            console.log(`${num1}-${num2}=${num1 - num2}`);
            return num1 - num2;
        case "*":
            console.log(`${num1}*${num2}=${num1 * num2}`);
            return num1 * num2;
        case "/":
            console.log(`${num1}/${num2}=${num1 / num2}`);
            return num1 / num2;
    }
}
console.log("=====A8:簡單計算機 + 顯示算式過程=====");
calculateProcess(3, 5, "+");
calculateProcess(4, 2, "-");
calculateProcess(7, 9, "*");
calculateProcess(5, 5, "/");
// A9:商業邏輯題：增加服務費

function serviceCharge(num) {
    return num *= 1.05;
}
const total = serviceCharge(100);
console.log("=====A9:商業邏輯題：增加服務費=====");
console.log(`您總計費用為 ${total}`)


// A10:重構題：消除重複，抽離變因(把服務費抽離出來成為一個fn)
console.log("=====A10:重構題：消除重複，抽離變因=====");
// 抽離重複服務費，新增fn
function serviceCharge2(num) {
    return num * 0.1;
}
// 算六角
function sixAngleCalculate(num) {
    const subTotal = num * 100;
    const charge = serviceCharge2(num);
    const total = subTotal + charge;
    return console.log(Math.floor(total));
}
// 算八角
function eightAngleCalculate(num) {
    const subTotal = num * 800;
    const charge = serviceCharge2(num);
    const total = subTotal + charge;
    return console.log(Math.floor(total));
}
eightAngleCalculate(3);
sixAngleCalculate(7);