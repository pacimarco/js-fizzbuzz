const containerDom = document.getElementById('container');

for (let i=1; i<=100; i++) {
    const div = document.createElement('div');
    let num = i;
    div.classList.add('box');
    containerDom.appendChild(div);
    console.log(i);
   // containerDom.innerHTML += '<div class="box"> i </div>';//

    if (i % 3 ==0 && i % 5 ==0) {
        div.classList.add('box-green');
        div.innerHTML = 'FizzBuzz';
        console.log('FizzBuzz');
    
    }else if (i % 5 ==0) {
        div.classList.add('box-blue');
        div.innerHTML = 'buzz';
        console.log('Buzz');

    
    }else if (i % 3 ==0) {
        div.classList.add('box-red');
        div.innerHTML = 'Fizz';
        console.log('Fizz');
    
    }
    else {
        div.innerHTML = num;
    }

} 