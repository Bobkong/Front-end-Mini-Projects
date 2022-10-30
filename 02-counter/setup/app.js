const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

var currentValue = 0;

btns.forEach((btn) => {

    btn.addEventListener('click', function(e) {
        console.log(e.target.classList);
        if(e.target.classList.contains('decrease')) {
            currentValue--;
        } else if (e.target.classList.contains('increase')) {
            currentValue++;
        } else if (e.target.classList.contains('reset')) {
            currentValue = 0;
        }
        
        value.textContent = currentValue;
        setValueColor();
    });
    
})

function setValueColor() {
    if(currentValue > 0) {
        value.style.color = "green";
    } else if(currentValue < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}