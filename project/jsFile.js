let basket=document.querySelector('.basket');
let modDiv=document.querySelector('.modal');
let allDiv=document.querySelector('.allItems');
let cross=document.querySelector('.cross');

basket.addEventListener('click', modalOpen);
cross.addEventListener('click', crossOn)

function modalOpen(){
    modDiv.style.display='block';
}

function crossOn(){
    modDiv.style.display='none';
}