let numbers = "0123456789ABCDEF"

const randomColor = () =>{
    color= '#';
    for (let i = 0; i < 6; i++) 
        color += numbers[(Math.floor(Math.random() * 16))]; 
      
    console.log(color);
    document.body.style.backgroundColor = color;
    document.querySelector('.color').textContent = color;
}

document.getElementById('btn').addEventListener('click',
    randomColor
)

randomColor();