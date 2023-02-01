// Variables
var container = document.getElementById('container');
var retour = document.getElementById('retour');
var box = document.getElementsByClassName('box');
var image = document.getElementsByClassName('image');
var camelot = document.getElementById('camelot');
var personnage = document.getElementsByClassName('chev');
var texte = document.getElementsByClassName('knight');


for (let j = 0; j < box.length; j++) {     //boucle pour box seigneur

for (let i = 0; i < image.length; i++) {   //boucle pour image seigneur
    
image[i].addEventListener('click', () => {
    retour.style.display = 'block';
});    

image[0].addEventListener('click', () => {
    container.style.display = 'none';
    box[0].style.display = 'block';

});

image[1].addEventListener('click', () => {
    container.style.display = 'none';
    box[1].style.display = 'block';

});

image[2].addEventListener('click', () => {
    container.style.display = 'none';
    box[2].style.display = 'block';

});

image[3].addEventListener('click', () => {
    container.style.display = 'none';
    box[3].style.display = 'block';

});

image[4].addEventListener('click', () => {
    container.style.display = 'none';
    box[4].style.display = 'block';

});

image[5].addEventListener('click', () => {
    container.style.display = 'none';
    box[5].style.display = 'block';

});

image[6].addEventListener('click', () => {
    container.style.display = 'none';
    box[6].style.display = 'block';

});

image[7].addEventListener('click', () => {
    container.style.display = 'none';
    box[7].style.display = 'block';

});

image[8].addEventListener('click', () => {
    container.style.display = 'none';
    box[8].style.display = 'block';

});

retour.addEventListener('click', () => {
    container.style.display = 'block';
    box[j].style.display = 'none';
    retour.style.display = 'none';
});
};
};


for (let a = 0; a < personnage.length; a++) {

for (let b = 0; b < texte.length; b++) {

    personnage[a].addEventListener('click', () => {
        retour.style.display = 'block'               
    });

    personnage[0].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[0].style.display = 'block';
    });

    personnage[1].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[1].style.display = 'block';
    });

    personnage[2].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[2].style.display = 'block';
    });

    personnage[3].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[3].style.display = 'block';
    });

    personnage[4].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[4].style.display = 'block';
    });

    personnage[5].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[5].style.display = 'block';
    });

    personnage[6].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[6].style.display = 'block';
    });

    personnage[7].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[7].style.display = 'block';
    });

    personnage[8].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[8].style.display = 'block';
    });

    personnage[9].addEventListener('click', () => {
        camelot.style.display = 'none';
        texte[9].style.display = 'block';
    });

    retour.addEventListener('click', () => {
        camelot.style.display = 'block';
        texte[b].style.display = 'none';
        retour.style.display = 'none';
    });

    
};   
};









