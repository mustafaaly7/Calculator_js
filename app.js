// console.log("hello World")


// function Hello(){
//     var Hello = document.getElementById("btn")
//     Hello = btn.value;
//     console.log(Hello);
// }


// function no(){
//     btn.value = "mustafa"
// }

function num(input){
    var num1 = document.getElementById("number")
    num1.value += input
    // console.log(num1.value)
}

function calculate(){
var calculate = document.getElementById("number")
calculate.value = eval(number.value)

}

function allClear(){
    // var allClear = document.getElementById("number")
    // clearInterval.value = ""
    number.value = ""
}




function clearLastdigit(){
    number.value = number.value.slice(0 , -1);
}