// Создать 2 объекта с полями: 'name, value'. В value присвоить второй объект. Скопировать оба объекта.
//  Изменить name у исходных. Выведи все 4 объекта со всеми свойствами.
var objectOne = {
name: 'Valera'
}

var objectTwo = {
name: 'Ivan'
}

objectOne.value = objectTwo;
objectTwo.value = objectOne;


console.log(objectOne);
console.log(objectTwo);


var copeObjectOne = {}; //скопировали1
for (var key in objectOne){
copeObjectOne[key] = objectOne[key]
}

var copeObjectTwo = {};
for (var key in objectTwo){
copeObjectTwo[key] = objectTwo[key]
}


console.log(copeObjectOne);
console.log(copeObjectTwo);


objectOne.name= 'Alex1';
objectTwo.name= 'Alex2';


console.log(objectOne);
console.log(objectTwo);
// браузер вывод текущее на момент открытия значение




// 3) Дано.
// var arr = {
// 'ru':['голубой', 'красный', 'зеленый'],
// 'en':['blue', 'red', 'green'],
// };
// Написать функцию с помощью которой можно вывести любой цвет на любом языке.   
var arr = {
ru:['голубой', 'красный', 'зеленый'],
en:['blue', 'red', 'green'],
}
function findColor(){

if (color == arr.ru[0] || color == arr.en[0])
return console.log( '%c BLUE-ГОЛУБОЙ! ', 'background: blue; color: white');

if (color == arr.ru[1] || color == arr.en[1])
return console.log( '%c RED-КРАСНЫЙ! ', 'background: red; color: white');

if (color == arr.ru[2] || color == arr.en[2])
return console.log( '%c GREEN-ЗЕЛЕНЫЙ! ', 'background: green; color: white');

else return  console.log('Undefined color');
}

var color = prompt('Input color:', );

findColor();
//findColor('ru', 82139128738);

///////////////////////////////////////////
var arr = {
ru:['голубой', 'красный', 'зеленый'],
en:['blue', 'red', 'green'],
}
function findColor(){
var i = 0;
if (color == arr.ru[i] || color == arr.en[i])
return console.log( '%c BLUE-ГОЛУБОЙ! ', 'background: blue; color: white');
i++;
if (color == arr.ru[i] || color == arr.en[i])
return console.log( '%c RED-КРАСНЫЙ! ', 'background: red; color: white');
i++;
if (color == arr.ru[i] || color == arr.en[i])
return console.log( '%c GREEN-ЗЕЛЕНЫЙ! ', 'background: green; color: white');

else return  console.log('Color  >> ' + (i = color) + '<< NOT found!');
}

var color = prompt('Input color:', );

findColor();

///////////////////////////////
// 4) Через запятую ввожу числовые значени
//  Нужно засплитить и вывести произведение. + после того как будет выведено произведение вывести элементы
//   которые не учавствовали в произведении (если это строка а не число).
var arr = [];
var arr = []; 
var arrStr = []; 
var proizv = 1; 

function doProiz(){ 
arr = value.split(','); 

for (var i=0; i< arr.length; i++) 
if ( !isNaN(parseFloat(arr[i])) && isFinite(arr[i])){     // !NaN и (parseFloat=>NaN если +-null '') isFinite=> true если не +-NaN 
proizv *= arr[i]; 
} 
else arrStr.push (arr[i]); 
} 
var value = prompt('Input значения (через запятую):', ); 
doProiz( isNumber); 

function isNumber(){ 
return !isNaN(parseFloat(n)) && isFinite(n); 

} 

console.log('Произведение:= ' + proizv); 
console.log('Элементы не учавствовали:= ' + arrStr);






var str = 'Я люблю JS';
var arr = [];
var arr2 = [];
var i = 0;
function doSplit(){
	for (i = 0; i < str.length; i++)
	arr.push(str[i]);
	}

function doReverse (){
for (i = arr.length -1; i >= 0; i--)
	arr2.push(arr[i]);
}

function doJoin(array){
var str2 = '';
for ( i = 0; i < array.length; i++ )
str2+= array[i];
console.log(str2.toUpperCase());
}

function doJoinNew(array){
var str3 = '';
for ( i = 0; i < array.length; i++ )
str3+=  ' ' + array[i];
console.log(str3.toLowerCase());
}

function name (x) {
doSplit();
doReverse();
x(arr);
}
name(doJoin);
arr = [];
name(doJoinNew);  //почистить массив
