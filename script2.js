/* Стиль, с помощью которого нужно комментировать строки кода
* фывафыва
* вфафыва
* фпрфвраы
* ыраырав
*/


/*var x = null;
var y = undefined;

var isXEqualsY = x === y;   сравнение

console.log(isXEqualsY); 

console.log(NaN == 0);


var x, y;
console.log(x, y);
x = y = 2 + 8 - 3 * 2;
console.log(x, y);

var x = 5;

x += 7;
x -= 2;    Сокращенная форма записи операторов
x *= 5;
x /=10;

x++;
++x;   Инкрементация и декрементация
x--;
---x;

var userName = "Ivan";
var userAge = 15;                   Условный оператор if/else
                                    если условие ложно, то код продолжает выполняться дальше
if(userAge >= 20){                  если условие истинно, то выполнится условие
   console.log(userName + " is adult.");
} else if(userAge < 10){
    console.log(userName + "is a child.")
} else if(userAge > 10 && || userAge < 20){  
    console.log(userName + "is a teenager.")
} else{
    console.log("to something.")
}


console.log("Something")

var userName = "Jack";             Тернарные операторы
var userWeight = 87;

if(userWeight > 90){
    console.log(userWeight + " has redundant weight.");
} else{
    console.log(userWeight + " has normal weight.");
}

userName > 90 ? console.log(userWeight + " has redundant weight.") : console.log(userWeight + " has normal weight.")

2 способ записи тернарного оператора(он намного короче)

var weightDescription;

weightDescription = userWeight > 90 ? "redundant" : "normal";

console.log(userName + " has " + weightDescription + " weight.");

var section = "JavaScript";
                                                            Оператор Switch/case (сравнивает последующие значения)
swich(переключатель(section)){
    case "html":
       console.log("Вы изучаете раздел 'HTML'.")
       break;
    case "css":
       console.log("Вы изучаете раздел 'CSS'.") 
       break;
    case "javascript" :
       console.log("Вы изучаете раздел 'JavaScript.'")  
       break;
    default :
       console.log("Вы изучаете раздел какой-то раздел.")  
}

var age = 20;
var groupNumber;
switch(true){
    case age >= 18 && age <= 25 :
        groupNumber = 1;
        break;
    case age >= 25 && age <= 46 :
        groupNumber = 2;
        break;
    default :
        groupNumber = 3;        
}

console.log(groupNumber);

var x = 1;
                                  Цикл While
while(x < 10){
    console.log(x);
    x++;
}
console.log("Loop has finished.");

var helloString = "Hello JavaScript!";
var count = 0;

while(count < helloString.Length){
    console.log(helloString[count]);
    count++;
}

                                Цикл For
var count = 1;
while(count <= 10){ 
    console.log(count);
    count++;
}
 For - это 1.Инициализируется значения 2. Условие выхода из цикла 3. Шаг
for(count = 1; count <= 10; count++){
    console.log(count);
}

var helloString = "Hello For Loop!";         выполняется до тех пор, пока условие истинно!
for(i = 0; i < helloString.Length; i++){
    console.log(helloString[i]);
}


                             Функции + Функции с параметрами + Функции с возвращаемым значением
function hello() {
    console.log("Hello!");
}
hello();



function complexHello(helloText-параметр, name, age){             с параметрами
    console.log(helloText + " My name is " + name + ". I'm " + age + " years old.");                     внутри функции можно обращаться к другим функциям
}
complexHello("Hello! My name is Vanya. I'm 21 years old."); - вызов функции




function square(number){                     Возвращаемое значение
    return number * number;
}

var x = square(2);
console.log(x);

function isSquareBig(side){
    var squareArea = square(side);           Возвращаемое значение
    if(squareArea > 100){
        return true; если не выполняется условие из предыдущей функции
    } else {
        return false; если выполняется условие из предыдущей функции
    }
}

console.log(isSquareBig(11));


function alertHello() {
    alert("Hello!");
}

alertHello();



Способы объявления функций   

  function someFunction() {} - создание функции с помощью объявления
  
  function animalVoice(animal, animalName - параметры){
    switch(animal){
        case "dog":
            return animalName + " barks.";
        case "cat":
            return animalName + " meows.";
        case "pig":
            return animalName + " grunts."    
        default:
            return animalName + " makes some sounds."        
    }
  }

  console.log(animalVoice("dog", "Richard"));


  var animalVoice = function(animal, animalName){ - создание функции с помощью 
      switch(animal){
        case "dog":
            return animalName + " barks.";
        case "cat":
            return animalName + " meows.";
        case "pig":
            return animalName + " grunts."    
        default:
            return animalName + " makes some sounds."        
    }
  }

  console.log(animalVoice("tiger", "Richard"));



                              Функции inNumberOdd
function inNumberOdd(number){
    if(number % 2 === 0){            если остаток от деления четный - false
        return false;
    } else{
        return true;
    }
    

    return number % 2 !== 0; - второй способ, который короче
}
 
var x = isNumberOdd(11); // true 
- вызов
console.log(x);
console.log(isNumberOdd(8);
isNumberOdd(8); // false
isNumberOdd(0); // false
isNumberOdd(23); // true


function factorial(naturalNumber){
    var result = 1;
    for(int = 1; i <= naturalNumber; i++){
        result = result * i;
    }
    return result;
}


console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1



function changeSpaceToUnderscore(text){
    var resultText = text.replace(/ /g, "_"); - как поменять символ в строке

}


changeSpaceToUnderscore("Create function");
changeSpaceToUnderscore("My first name");
changeSpaceToUnderscore("user");




                                  Область видимости переменных

function someFunction(){
    var x = 1;
    var y = 10;      -  первостепенная обрабатывается локальная переменная(та, что внутри функции)

    console.log(x);
    console.log(y);
    y++;
}

var y = 2;
someFunction();
console.log(y);



                                   Массивы

var color1 = "red";
var color2 = "orange"; 
var color3 = "yellow"; 
var color4 = "green"; 
var color5 = "blue"; 
var color6 = "indigo"; 
var color7 = "violet";

var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log("The sky is " + rainbowColors[4]);
rainbowColors[0] = "orange";
console.log(rainbowColors);
*/