let imagem1 = document.getElementById('img1');
let imagem2 = document.getElementById('img2');
let btn = document.getElementById('btn');


function hid(){
    imagem1.style.display = 'none';
    if(imagem1.style.display === 'none'){
        imagem2.style.display = 'block';
    }
}

btn.addEventListener('click', function(){
    hid();
});
