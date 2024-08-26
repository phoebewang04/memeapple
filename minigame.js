let cemeteryText = document.getElementById('cemetery_text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    cemeteryText.style.marginTop = value * 0.7 + 'px';
    treeLeft.style.left = value * -0.9 + 'px';
    treeRight.style.left = value * 0.9 + 'px';
    gateLeft.style.left = value * 0.2 + 'px';
    gateRight.style.left = value * -0.2 + 'px';
    
});