const display = document.getElementById('result')
function appendtoresult (value) {
    display.value += value;
}

function clearresult(){
    display.value = ''
}

function delresult(){
    display.value = display.value.slice(0,-1)
}

function calresult() {
        const expresion = display.value
        try {
            const result = eval(expresion)
            display.value = result
        } catch (error) {
            display.value ="Error"
        }
}

//adding keybord inputs
 document.addEventListener('keydown', function(event){
   
    if((event.key >= '0' && event.key <='9') || "+-*/.".includes(event.key)){
        appendtoresult(event.key);
    } else if(event.key === "Enter"){
        calresult()
    }else if(event.key === "Backspapce"){
        delresult()
    } else if(event.key === "Escape"){
        clearresult();
    }
 })

const audio = new Audio('audio.mp3')

const isequal = document.querySelector(".isequal")

// if(isequal) {
//     isequal.addEventListener('click', () =>{
//         audio.play().catch(error => {
//             console.error("Error playing audio:" ,error)
//         });
//     })
    
// } else{
//     console.error("Element with class 'isequal' not found.")
// }

if(isequal) {
    isequal.addEventListener('click', () =>{
                audio.play()
});
}


// function EvaluateExpression(exp){
  
//     const tokens = exp.match(/(\d+\.?\d*|[+\-%*/])/g)
//     // console.log(token)
//     if(!tokens) return 0;
   
//     let temp =[]
//     //division and multiplication

//    for (let token of tokens) {
//      if(token === "*" || token ==="/") {
//         const b = parseFloat(temp.pop());
//         const a = parseFloat(tokens.shift());  // Get the next number from tokens
//         const result = token === "*" ? a*b: a/b
//         temp.push(result)
//      } else {
//         temp.push(token);
//      }
//    }

//    let total =parseFloat(temp[0])

//    for (let i = 1; i < temp.length; i+= 2) {
//         const operator = temp[i];
//         const number = parseFloat(temp[i+1]);

//     if(operator === '+'){
//         total += number;
//     } else if(operator === '-'){
//         total -= number
//     }


//     return total;
// }
// }






//   // addition and subtraction
//    for (let token of tokens) {
//     if(token === "+" || token ==="-"){
//         const b = parseFloat(temp.pop());
//         const a = parseFloat(token.shift());
//         const result = token === "+" ? a+b: a-b
//         temp.push(result)
//     }
//    }

//    //percentage
//    for (let token of tokens) {
//     if(token === "%"){
//         const b = parseFloat(temp.pop());
//         const a = parseFloat(token.shift());
//         const result = (a/100)*b
//         temp.push(result)
//     }
//    }

