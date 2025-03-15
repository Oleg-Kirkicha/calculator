//кнопки чисел
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");

//кнопки керування
const buttonplus = document.getElementById("buttonplus");
const buttonminus = document.getElementById("buttonminus");
const buttonmultiply = document.getElementById("buttonmultiply");
const buttonerase = document.getElementById("buttonerase");
const buttonresult = document.getElementById("buttonresult");
const buttondivide = document.getElementById("buttondivide");

const enter_field=document.getElementById("enter_field")//поле виводу



let firstinput = "";//перше число 
let secondinput="";//друге число
let operator="";//яка дія  буде виконуватися

//код для вводу чисел
button1.addEventListener("click", function(){
if (operator === ""){
    firstinput+="1"
    enter_field.value += button1.textContent;
}
else {
    secondinput+="1"
    enter_field.value += button1.textContent;
}
});


button2.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="2"
        enter_field.value += button2.textContent;
    }
    else {
        secondinput+="2"
        enter_field.value += button2.textContent;
    }
    });


button3.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="3"
        enter_field.value += button3.textContent;
    }
    else {
        secondinput+="3"
        enter_field.value += button3.textContent;
    }
    });


button4.addEventListener("click", function(){
    if (operator === ""){
            firstinput+="4"
            enter_field.value += button4.textContent;
        }
        else {
            secondinput+="4"
            enter_field.value += button4.textContent;
        }
        });


button5.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="5"
        enter_field.value += button5.textContent;
    }
    else {
        secondinput+="5"
        enter_field.value += button5.textContent;
    }
    });


button6.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="6"
        enter_field.value += button6.textContent;
    }
    else {
        secondinput+="6"
        enter_field.value += button6.textContent;
    }
    });



button7.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="7"
        enter_field.value += button7.textContent;
    }
    else {
        secondinput+="7"
        enter_field.value += button7.textContent;
    }
    });


button8.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="8"
        enter_field.value += button8.textContent;
    }
    else {
        secondinput+="8"
        enter_field.value += button8.textContent;
    }
    });

button9.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="9"
        enter_field.value += button9.textContent;
    }
    else {
        secondinput+="9"
        enter_field.value += button9.textContent;
    }
    });

button0.addEventListener("click", function(){
    if (operator === ""){
        firstinput+="0"
        enter_field.value += button0.textContent;
    }
    else {
        secondinput+="0"
        enter_field.value += button0.textContent;
    }
    });
//код для операцій
buttonplus.addEventListener("click", function(){

    operator="+";
    enter_field.value += buttonplus.textContent;
})

buttondivide.addEventListener("click", function(){

    operator="/";
    enter_field.value += buttondivide.textContent;
})
buttonmultiply.addEventListener("click", function(){

    operator="*";
    enter_field.value += buttonmultiply.textContent;
})
buttonminus.addEventListener("click", function(){

    operator="-";
    enter_field.value += buttonminus.textContent;
})


//очищення
buttonerase.addEventListener("click", function(){  
        firstinput=""
        secondinput=""
        operator=""
        enter_field.value = "";
    });
    



//результат
buttonresult.addEventListener("click", function(){
    const num1 = parseFloat(firstinput);
    const num2 = parseFloat(secondinput);
    

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }
    enter_field.value = result;
    firstInput = "";
    secondInput = "";
    operator = "";
})