let btn = document.querySelectorAll('button');


btn.forEach(element => element.addEventListener('click', (e) => {
    let val = (e.target).getAttribute('id');

    let input_value = document.getElementById('inp');
    let display_value = input_value.getAttribute('value');
    const arr = ['+' , '-', '*', '/', '%'];
    

    if (display_value === '0'){
        input_value.setAttribute('value',val);
    }else if (val === 'del'){
        display_value = display_value.slice(0, -1);
        input_value.setAttribute('value',display_value);  
        document.getElementById('del').play();
    }else if (val === 'ac'){
        input_value.setAttribute('value',''); 
        document.getElementById('alldel').play(); 
    }else if (val === '='){
        document.getElementById('click').play(); 
        let st = display_value;
        let s = '';
        const value = [];
        let count = ''
        let  j = 0;
        for (let i = 0; i < st.length;i++){
            if (arr.includes(st[i]) ){
                value.push(count)
                count = ''
                j = i
                s += st[i]
            }else{
                count += st[i]
            }
        }
        value.push(count)
        const newArr = value.map(e => Number(e));
        let counter = 0
        for (let i = 0; i < s.length;i++){
            if (s[i] === '+'){
                counter = newArr[i] + newArr[i+1]
                newArr[i+1] = counter
            }else if (s[i] === '-'){
                counter = newArr[i] - newArr[i+1]
                newArr[i+1] = counter
            }else if (s[i] === '*'){
                counter = newArr[i] * newArr[i+1]
                newArr[i+1] = counter
            }else if (s[i] === '/'){
                counter = newArr[i] / newArr[i+1]
                newArr[i+1] = counter
            }else if (s[i] === '%'){
                counter = newArr[i] % newArr[i+1]
                newArr[i+1] = counter
            }
        }
        input_value.setAttribute('value',(counter == 'Infinity' ? '..∞' : counter));
    }else if (display_value.length >= 1){
        document.getElementById('click').play();
        let last_value = display_value[(display_value.length)-1]

        if (arr.includes(val) && arr.includes(last_value)){
            alert('Enter Number!')
            input_value.setAttribute('value',display_value);
        }else{
            input_value.setAttribute('value',display_value += val)
        }
    }else{
        document.getElementById('click').play();
        input_value.setAttribute('value',display_value += val);
    }
}));



// =====================================================================



document.addEventListener('keydown', (e) => {
    const arr = ['+' , '-', '*', '/', '%'];
    const numarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '00']
    let val = (e.key);
    const keys = ['Shift', 'Alt', 'Control', 'CapsLock','Escape', 'Home', 'Tab', '_', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageDown','PageUp', 'End','!','@','#','$','^','&','<', '>', ',', '|',':',';',"''",'""','`','~']
    
    let regex = (/^[a-zA-Z]+$/).test(val);
    let input_value = document.getElementById('inp');
    let display_value = input_value.getAttribute('value');
    let last_value = display_value[(display_value.length)-1]

    if (keys.includes(val)){
        val = '';
    }


    
    if (display_value === '0'){
        input_value.setAttribute('value',val);  
    }else if (val === 'Backspace'){
        display_value = display_value.slice(0, -1);
        input_value.setAttribute('value',display_value);  
        document.getElementById('del').play();

    } else if (val === 'Delete'){
        input_value.setAttribute('value', '');  
        document.getElementById('del').play();

    }else if (val === '=' || val === 'Enter'){
        console.log(val);
        document.getElementById('click').play(); 
        input_value.setAttribute('value',eval(display_value));
    }else if (display_value.length >= 1 && (arr.includes(val) && arr.includes(last_value))){
        document.getElementById('click').play();
        input_value.setAttribute('value',display_value);

    }else if (numarr.includes(val) || arr.includes(val)){
        document.getElementById('click').play();
        input_value.setAttribute('value',display_value += val);
    }else if (val === 'Enter'){
        document.getElementById('click').play();
        input_value.setAttribute('value', (eval(display_value)));
    }
})
