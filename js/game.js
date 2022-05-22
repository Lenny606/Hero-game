const hero = document.querySelector('.hero');
hero.style.top = '500px';
hero.style.left = '100px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

//function move hero depending on arrow by 1sqr

let stepXaxis = 100
let stepYaxis = 500
const moveHero = (e) => {
    console.log(e);
    switch(e.key)  {
        case "ArrowRight":
        case "d":
        stepXaxis = (stepXaxis === 700) ? stepXaxis : stepXaxis + 100;
        console.log(stepXaxis);
        hero.style.left = `${stepXaxis}px`;
        console.log(stepXaxis);
        break;
  
        case "ArrowLeft":
        case "a":    
        stepXaxis = (stepXaxis === 0) ? stepXaxis : stepXaxis - 100;
        console.log(stepXaxis);
        hero.style.left = `${stepXaxis}px`;
        console.log(stepXaxis);
        break;
  
        case "ArrowUp":
        case "w":    
        stepYaxis = (stepYaxis === 0) ? stepYaxis : stepYaxis - 100;
        console.log(stepYaxis);
        hero.style.top = `${stepYaxis}px`;
        console.log(stepYaxis);
        break;
  
        case "ArrowDown":
        case "s":    
        stepYaxis = (stepYaxis === 500) ? stepYaxis : stepYaxis + 100;;
        console.log(stepYaxis);
        hero.style.top = `${stepYaxis}px`;
        console.log(stepYaxis);
        break;
  
    }

}





addEventListener("keyup", moveHero)
console.log(parseInt("100px"));