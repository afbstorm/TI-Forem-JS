// Récupération des éléments par leur id
let elementId = document.getElementById('div');
console.log(elementId);

// Modification du contenu d'un élément HTML
elementId.textContent = 'Je suis le nouveau contenu de la première DIV';

// Création d'un nouvel élément (juste la création, pas le rattachement au DOM)
let nouvelDiv = document.createElement('div');

// Ajout d'un contenu dans un élément HTML
nouvelDiv.innerHTML = '<p>Voici une nouvelle DIV dans l\'HTML</p>';

// Ajout d'un attribut sur un élément HTML
nouvelDiv.setAttribute('id', 'nouvelId');

// Insertion d'un nouvel élément dans le DOM
elementId.appendChild(nouvelDiv);

// Événement qui va changer le css d'un élément HTML
elementId.addEventListener('click', () => {
    elementId.style.color = 'chartreuse';
    elementId.style.fontWeight = 'bold';
})
