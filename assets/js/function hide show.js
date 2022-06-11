let btnSA = document.getElementById("buttonSA");
let divSA = document.getElementById("hiddenSA");

btnSA.addEventListener('click', () => {
    if(divSA.style.display === 'none'){
        divSA.style.display = 'block';
    } else {
        divSA.style.display = 'none';
    }
});

let btnJH = document.getElementById("buttonJH");
let divJH = document.getElementById("hiddenJH");

btnJH.addEventListener('click', () => {
    if(divJH.style.display === 'none'){
        divJH.style.display = 'block';
    } else {
        divJH.style.display = 'none';
    }
});

