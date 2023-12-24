// A1:字串取長度====================
// // input 輸入
// checkStringLength("Hello")
// checkStringLength("my name is Tom！")

// // output 輸出
// 5
// 15
function checkStringLength(str) {
    return str.length;
}
console.log("=====A1:字串取長度=====");
console.log(checkStringLength("Hello"));
console.log(checkStringLength("my name is Tom！"));

// A2:字串大小寫互換===================
// // input 輸入
// lowerCase("FOKFF@gmail.com")
// upperCase("hello, world")

// // output 輸出
// "fokff@gmail.com"
// "HELLO, WORLD"
function lowerCase(str) {
    return str.toLowerCase();
}

function upperCase(str) {
    return str.toUpperCase();
}
console.log("=====A2:字串大小寫互換=====");
console.log(lowerCase("FOKFF@gmail.com"));
console.log(upperCase("hello, world"));

// A3:字串去左右空白=====================
// // input 輸入
// trimString("    hi, mom!  ")
// trimString(" aa@gmail.com  ")

// // output 輸出
// "hi, mom!"
// "aa@gmail.com"
function trimString(str) {
    return str.trim();
}
console.log("=====A3:字串去左右空白=====");
console.log(trimString("    hi, mom!  "));
console.log(trimString(" aa@gmail.com  "));

// A4:字串去任何空白==============
// // input 輸入
// removeAllSpaceString("Hello World")
// removeAllSpaceString("你好     美麗的     世界")

// // output 輸出
// "HelloWorld"
// "你好美麗的世界"
function removeAllSpaceString(str) {
    return str.split(" ").join("");
}
console.log("=====A4:字串去任何空白=====");
console.log(removeAllSpaceString("Hello World"));
console.log(removeAllSpaceString("你好     美麗的     世界"));

// A5:字串陣列互換======================
// // input 輸入
// stringArraySwitcher(['A', 'B', 'C'])
// stringArraySwitcher('1,2,3')

// // output 輸出
// A,B,C
// [1,2,3]
function stringArraySwitcher(data) {
    if (typeof data === "string") {
        // split() 字串轉陣列
        const newAry = data.split();
        return console.log(newAry);

    } else if (typeof data === "object") {
        // toString() 轉型別為字串
        const newStr = data.toString();
        return console.log(newStr);
    }
}
console.log("=====A5:字串陣列互換=====");
stringArraySwitcher(['A', 'B', 'C'])
stringArraySwitcher('1,2,3')

// TODO （chatgpt help) 題目六：字串切割=========================
// // input 輸入
// getArea("高雄市前鎮區一心二路33號");
// getArea("高雄市新興區新興路66號");

// // output 輸出
// "前鎮區"
// "新興區"
console.log("=====題目六：字串切割=====");
// .split( 指定切割處 , 切割的最大數量 )
function getArea(str) {
    const match = str.match(/市(.+區)/);
    return match ? console.log(match[1]) : console.log('');
}
getArea("高雄市前鎮區一心二路33號");
getArea("高雄市新興區新興路66號");

// 題目七：字串黏合
// // input 輸入
// concatString("我今天想來點", "六角冰咖啡")
// // output 輸出
// "我今天想來點六角冰咖啡"
console.log("=====題目七：字串黏合=====");

function concatString(str1,str2){
    return console.log(`${str1}${str2}`);
}
concatString("我今天想來點", "六角冰咖啡");

// 題目八：顯示字串=================================
// 請嘗試修改以下代碼，使其可正確運行 (留意單、雙引號)。
// 關鍵字：單引號、雙引號、反引號、樣板字串。

// // To be edit 需修改代碼
// console.log("'字串'是 JavaScript 中一種基礎且重要的"型別"，必須好好學習。")

// // output 輸出
// '字串'是 JavaScript 中一種基礎且重要的"型別"，必須好好學習。
console.log("=====題目八：顯示字串=====");
console.log(`'字串'是是 JavaScript 中一種基礎且重要的"型別"，必須好好學習。`)

// 題目九：擷取字串內容=============================
// 創造一個函式用於擷取輸入字串的指定索引字元，如找不到，回傳 false 。

// // input 輸入
// const input = "Hello"
// getCharacter(input, 1)
// getCharacter(input, 3)
// getCharacter(input, 10)

// // output 輸出
// "H"
// "l"
// false
console.log("=====題目九：擷取字串內容=====");
const input = "Hello";
function getCharacter(input,num){
if(num >= 0 && num < input.length){
    return console.log(input.charAt(num));
}else{
    return console.log(false);
}
}
getCharacter(input, 1);
getCharacter(input, 3);
getCharacter(input, 10);
// 題目十：反轉字串==============================
// 創造一個函式用於反轉字串內文字的順序。
// let myReversedString = myString.split("").reverse().join("");

// // input 輸入
// stringReverser("hello")

// // output 輸出
// olleh
console.log("=====題目十：反轉字串=====");

function stringReverser(str) {
    let newStr = str.split("").reverse().join('');
    return console.log(newStr);
}
stringReverser("hello");