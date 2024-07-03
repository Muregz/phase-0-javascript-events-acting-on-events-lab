
function moveDodgerLeft() {    
    const dodger = document.getElementById('dodger');    
    let leftPosition = parseInt(dodger.style.left) || 0;   
    leftPosition = Math.max(0, leftPosition - 1);    
    dodger.style.left = `${leftPosition}px`;}
function moveDodgerRight() {    
    const dodger = document.getElementById('dodger');   
    let leftPosition = parseInt(dodger.style.left) || 0;  
    leftPosition = Math.min(window.innerWidth - dodger.clientWidth, leftPosition + 1);   
    dodger.style.left = `${leftPosition}px`;
}
