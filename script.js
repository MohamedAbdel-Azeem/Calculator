const screen1 = document.querySelector('#screen1'); // for input
const screen2 = document.querySelector('#screen2'); // for output

let operator1 = '';
let operator2 = '';
let operand = null;
let ans = 0;


function drawButtons(){
    const buttonsContainer = document.querySelector('#buttons');
    const row1 = document.createElement('div');
    row1.setAttribute('id','row1');
    row1.classList.add('buttonRows');
    const row2 = document.createElement('div');
    row2.setAttribute('id','row2');
    row2.classList.add('buttonRows');
    const row3 = document.createElement('div');
    row3.setAttribute('id','row3');
    row3.classList.add('buttonRows');
    const row4 = document.createElement('div');
    row4.setAttribute('id','row4');
    row4.classList.add('buttonRows');


    const delButton = document.createElement('button');
    delButton.addEventListener('click',backspace);
    delButton.setAttribute('id','del');
    delButton.textContent = 'DEL';
    const clearButton = document.createElement('button');
    clearButton.addEventListener('click',clear);
    clearButton.setAttribute('id','AC');
    clearButton.textContent = 'AC';
    row1.appendChild(clearButton);
    row1.appendChild(delButton);

    const addButton = document.createElement('button');
    addButton.addEventListener('click',()=>{
        addOperation('+');
    });
    addButton.setAttribute('id','add');
    addButton.textContent = '+';
    const subButton = document.createElement('button');
    subButton.addEventListener('click',()=>{
        addOperation('-');
    });
    subButton.setAttribute('id','sub');
    subButton.textContent = '-';
    row3.appendChild(subButton);
    row3.appendChild(addButton);

    const mulButton = document.createElement('button');
    mulButton.addEventListener('click',()=>{
        addOperation('*');
    });
    mulButton.setAttribute('id','mul');
    mulButton.textContent = '*';
    const divideButton = document.createElement('button');
    divideButton.addEventListener('click',()=>{
        addOperation('/');
    });
    divideButton.setAttribute('id','divide');
    divideButton.textContent = '/';
    row2.appendChild(divideButton);
    row2.appendChild(mulButton);


    for (let i = 9; i >= 0 ; i--){
        const button = document.createElement('button');
        button.addEventListener('click',()=>{
            addDigit(i);
        });
        button.setAttribute('id',i);
        button.textContent = i;
        if (i >= 7){
            row1.appendChild(button);
        } else if (i >=4){
            row2.appendChild(button);
        } else if (i >= 1){
            row3.appendChild(button);
        } else {
            button.style.width = '230%'
            row4.appendChild(button); // 0 button
        }
    }



    const equalButton = document.createElement('button');
    equalButton.addEventListener('click',evaluateExpressions);
    equalButton.setAttribute('id','equal');
    equalButton.textContent = '=';
    const ansButton = document.createElement('button');
    ansButton.setAttribute('id','ans');
    ansButton.textContent = 'Ans';
    const decButton = document.createElement('button');
    ansButton.setAttribute('id','dec');
    decButton.textContent = '.';
    decButton.style.fontSize = '20px';
    row4.appendChild(decButton);
    row4.appendChild(ansButton);
    row4.appendChild(equalButton);

    buttonsContainer.appendChild(row1);
    buttonsContainer.appendChild(row2);
    buttonsContainer.appendChild(row3);
    buttonsContainer.appendChild(row4);
}

function clear(){
    operator1 = '';
    operator2 = '';
    operand = null;
    screen1.textContent = '';
    screen2.textContent = '';
}


function textAreaController(){
    document.addEventListener('keydown',()=>{
        var key = event.key;
        if (['+','-','*','/'].includes(key)){
            addOperation(key);
        }
        if (['0','1','2','3','4','5','6','7','8','9'].includes(key)){
            addDigit(key);
        }
        if (key ==='Backspace'){
            backspace();
        }
        if (key === 'Enter'){
            evaluateExpressions();
        }
    });
}


function addDigit(digit){
    if (operand == null){
        operator1+=digit;
        screen1.textContent= operator1;
    } else {
        operator2+=digit;
        screen1.textContent = operator1+operand+operator2;
    }

}

function backspace(){
    screen1.textContent = screen1.textContent.slice(0,-1);
    if (operator2 = ''){
        if (operand == null){
            operator1 = operator1.slice(0,-1);
        } else {
            operand = null;
        }
    } else {
        operator2 = operator2.slice(0,-1);
    }
}

function addOperation(operation){
    if (operand == null){
        if (operator1 == ''){ // no operator1 was entered
            if (ans != 'NaN'){
                operator1 = ans;
            } else {
                operator1 = 0;
            }
        }
        operand = operation;
        screen1.textContent= operator1+operand;
    } else {
        if (operator2 == ''){ // might want to change the operand
            operand = operation;
            screen1.textContent= operator1+operand;
        } else { // user entered OP1 , operand and OP2 Evaluate then let Operand is the operation and OP2 is Empty
                evaluateExpressions();
                operator1 = ans;
                operator2 = '';
                operand = operation;
                screen1.textContent = operator1+operand;
        }
    }
}


function evaluateExpressions(){
    let x = parseFloat(operator1);
    let y = parseFloat(operator2);
    if (operand == '+'){
        ans = x+y;
    }
    if (operand == '-'){
        ans = x-y;
    }
    if (operand == '*'){
        ans = x*y;
    }
    if (operand == '/'){
        if (y == 0){
            ans = 'NaN';
        } else {
            ans = x/y;
        }
    }
    operator1 = '';
    operator2 = '';
    operand = null;
    screen2.textContent = ans;
}

textAreaController();
 

drawButtons();
