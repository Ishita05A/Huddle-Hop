console.log('Hello World');
score = 0;
cross = true;
audio = new Audio('music.mp3')
audiogo = new Audio('GameOver.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.addEventListener("keydown", function (e) {
    console.log(e.key);
    // console.log(e.code);
    if (e.key == 'ArrowUp') {
        let boy = document.querySelector('.boy')
        boy.classList.add('animateBoy')
        setTimeout(() => {
            boy.classList.remove('animateBoy')
        }, 700)
    }
    if (e.key == 'ArrowRight') {
        let boy = document.querySelector('.boy')
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 122 + "px";
    }
    if (e.key == 'ArrowLeft') {
        boy = document.querySelector('.boy')
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 122) + "px"
    }

})


setInterval(() => {
    boy = document.querySelector('.boy')
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('animatedino')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1
        updatedScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    
    }

}, 100);

function updatedScore(score) {
    // let scorecont = document.querySelector('.scoreCont');

    scorecont.innerHTML = "Your Score: " + score
}
