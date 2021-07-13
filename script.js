/* code for single operands calculator  */  

// var button = document.getElementsByClassName("btn");
// var display = document.getElementById('display');

// var op1 = 0;
// var op2 = 0;
// var operator = null; 
// // var operations = "";

// for (var i=0;i<button.length;i++){

// button[i].addEventListener('click',function(){

//     var value = this.getAttribute('data-value');
//     if(value =="+"){ //when add opeartor is clicked
//         op1 = parseFloat(display.textContent);
//         operator = "+";
//         display.innerText = operator;
        
//     }
//     else if(value =="-"){ //when subtraction opeartor is clicked
//         op1 = parseFloat(display.textContent);
//         operator = "-";
//         display.innerText = operator;
        
//     }
//     else if(value =="*"){ //when multiply opeartor is clicked
//         op1 = parseFloat(display.textContent);
//         operator = "*";
//         display.innerText = operator;
        
//     }
//     else  if(value =="/"){ //when add opeartor is clicked
//         op1 = parseFloat(display.textContent);
//         operator = "/";
//         display.innerText = operator
        
//     }
//     else  if(value =="-1"){ //making number negative
        
//         var new_op = '-'+ display.innerText;
//         display.innerText = new_op;
        
//     }
//     if(value == "ac"){ //clear the screen
//         op1 = 0;
//         op2 = 0;
//         operator = null;
//         display.innerText = "";
//     }
//     else if(value == "=") { //when equal is clicked so we evaluate here
//         op2 = parseFloat(display.textContent);
//         var result = eval(op1 + " " + operator + " " + op2);
//         display.innerText = result;
//     }
//     else{
//         var curr_val = display.textContent
//         if (curr_val == "+" || curr_val == "-" || curr_val =="*" || curr_val =="/"){
//             display.innerText = value
//         }
//         else{
//         display.innerText += value;
//         }
//     }
    
// });

// }

/* ------------------code for multi operator calculator-------------------------------------- */ 

var button = document.getElementsByClassName("btn");
var display = document.getElementById('display');

var operations = "";

for (var i=0;i<button.length;i++){

button[i].addEventListener('click',function(){

    var value = this.getAttribute('data-value');
    if(value == "ac"){ //clear the screen
        display.innerText = "";
        operations = ""
    }
    else if(value == "=") { //when equal is clicked so we evaluate here
        var result = eval(operations);
        display.innerText = result;
        operations = result;
    }
    else{
    operations += value;
    display.innerText = operations;
    }
});

}
