document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            switch(button.innerText){
                case 'C':
                    display.innerText = '0';
                    break;
                case 'CE':
                    if(display.innerText.length === 1){
                        display.innerText = '0';
                    }
                    else{
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText.replace('÷', '/').replace('x', '*'));
                    }
                    catch{
                        display.innerText = 'Error';
                    }
                    break;
                case '√':
                    try{
                        display.innerText = Math.sqrt(eval(display.innerText));
                    }
                    catch{
                        display.innerText = 'Error';
                    }
                    break;
                case '%':
                    try{
                        display.innerText = eval(display.innerText) /100;
                    }
                    catch{
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    if(display.innerText === '0'){
                        display.innerText = button.innerText;
                    }
                    else{
                        display.innerText += button.innerText;
                    }
            }
        })
    })
})