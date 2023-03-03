/* Accesses style.css classes */
const girl = document.querySelector('.girl');
const rock = document.querySelector('.rock');
const cloud = document.querySelector('.cloud');
const secondCloud = document.querySelector('.cloud-second');

/* Enables girl's jump */
const jump = () => {
    girl.classList.add('jump');

    setTimeout(() => {
        girl.classList.remove('jump');
    }, 1000); /* time here is set in miliseconds */
}

/* Game over */
const loop = setInterval(() => {

    const rockPosition = rock.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace('px', '');
    /* we use window cause there's no offsetbottom, we use replace and the + sign to cast the string givent to a number */
    const cloudPosition = cloud.offsetLeft;
    const secondCloudPosition = secondCloud.offsetLeft;

    if (rockPosition <= 50 && rockPosition > 0 && girlPosition < 50) {
        rock.style.animation = 'none'; /* stops rock animation */
        rock.style.left = `${rockPosition}px`;

        girl.style.animation = 'none';
        girl.style.bottom = `${girlPosition}px`;

        girl.src="girlF.png";
        girl.style.width = '128px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        secondCloud.style.animation = 'none';
        secondCloud.style.left = `${secondCloudPosition}px`;

        document.getElementById("msg").innerHTML = "Game over!!";
        document.getElementById("msg").style.color = '#F52535';
        
        clearInterval(loop);
    }
}, 10);

/* Restart button that reloads the page */
document.getElementById("btn").onclick = function() {
    location.reload();
    };


document.addEventListener('keydown', jump);