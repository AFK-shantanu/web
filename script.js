let colors = ['red', 'green', 'rgba(133,122,200)', '#f15025', "CornflowerBlue", 'Cyan', 'DarkGoldenRod'];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

const getColor = () =>{
    const getRandomNumber = Math.floor(Math.random() * colors.length);
    console.log(getRandomNumber);
    document.body.style.backgroundColor = colors[getRandomNumber];
    color.textContent = colors[getRandomNumber];
    
}

document.getElementById("btn").addEventListener('click',
    getColor
)

getColor();