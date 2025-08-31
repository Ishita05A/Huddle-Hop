console.log('Hello World');

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    // console.log(e.code);
    if(e.key == 'ArrowUp'){
        let boy = document.querySelector('.boy')
        boy.classList.add('animateBoy')
        setTimeout(()=>{
            boy.classList.remove('animateBoy')
        },700)
    }
})