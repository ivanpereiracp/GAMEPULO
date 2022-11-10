const boneco = document.querySelector('.boneco');


const jump = () => {
    boneco.classList.add('jump');
setTimeout(() => {
    boneco.classList.remove('jump')
}, 500);
};

/*let placar = setInterval(updated);
let pontuacao = 0;

function updated(){
    var pontos = document.getElementById('score');
    pontos.innerHTML = "score: " + pontuacao++;
    clearInterval(placar);
}

function tocaMarioDeath(){
    document.querySelector("#mario_death").play();
};

function tocaBonecoCoin(){
    document.querySelector("boneco coin").play();
};

const loopGame = setInterval(() => { 

    const pipePosition = pipe.offsetLeft;
    const bonecoPosition = +window 
        .getComputedStyle(boneco)
        .bottom.replace("px", "")

    if(pipePosition <= 120 && pipePosition > 0 && bonecoPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left =`${pipePosition}px`;

        boneco.style.animation = "none";
        boneco.style.bottom = `${bonecoPosition}px`;

        boneco.src = "./images/boneco.gif";
        boneco.style.width = "75px";
        boneco.style.marginLeft = "45px";

        tocaMarioDeath();

        clearInterval(loopGame);

    }else if(pipePosition <= 0 && bonecoPosition >= 0){

        tocaBonecoCoin();
        updated();

    };

}, 10);*/


document.addEventListener("keydown", jump);