
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
    delButton.setAttribute('id','del');
    delButton.textContent = 'DEL';
    const clearButton = document.createElement('button');
    clearButton.setAttribute('id','AC');
    clearButton.textContent = 'AC';
    row1.appendChild(clearButton);
    row1.appendChild(delButton);

    const addButton = document.createElement('button');
    addButton.setAttribute('id','add');
    addButton.textContent = '+';
    const subButton = document.createElement('button');
    subButton.setAttribute('id','sub');
    subButton.textContent = '-';
    row3.appendChild(subButton);
    row3.appendChild(addButton);

    const mulButton = document.createElement('button');
    mulButton.setAttribute('id','mul');
    mulButton.textContent = '*';
    const divideButton = document.createElement('button');
    divideButton.setAttribute('id','divide');
    divideButton.textContent = '/';
    row2.appendChild(divideButton);
    row2.appendChild(mulButton);


    for (let i = 9; i >= 0 ; i--){
        const button = document.createElement('button');
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

function textAreaController(){
    const textArea = document.querySelector('#screen');
    textArea.addEventListener('keypress', (event) => {
        const regex = /^[0-9+\-*/]+$/;
        const key = event.key;
        if (!regex.test(key)) {
          event.preventDefault();
        }
        if (key === 'Enter'){
            console.log('Evaluate!'); // replace with an Evaluating Function
        }
      });

}

textAreaController();
drawButtons();
