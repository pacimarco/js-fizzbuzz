const containerDom = document.getElementById('container');

for (let i=0; i<=100; i++) {
    const div = document.createElement('div');
    let num = i;
    div.classList.add('box');
    containerDom.appendChild(div);
    console.log(i);
    containerDom.innerHTML += '<div class="box">  </div>';

    if (i % 3 ==0) {
        div.classList.add('box-red');
        containerDom.innerHTML += '<div class="box"> Fizz </div>';
    
    }else if (i % 5 ==0) {
        div.classList.add('box-blue');
        containerDom.innerHTML += '<div class="box"> Buzz </div>';
    
    }else if (i % 3 ==0 && i % 5 ==0) {
        div.classList.add('box-green');
        containerDom.innerHTML += '<div class="box"> FizzBuzz </div>';
    
    }

} 