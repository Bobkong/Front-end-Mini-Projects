const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(hex[0]);
    document.body.style.backgroundColor =  colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return parseInt(Math.random() * colors.length);
}