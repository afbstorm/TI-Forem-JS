// Création de la liste d'article sous forme {key, value} - {name : , price :}
const products = [
    {name: 'Tomate', price: 0.89},
    {name: 'Fromage', price: 2.68},
    {name: 'Huile de tournesol', price: 6.99},
    {name: 'Lardons', price: 3.59},
    {name: 'Bouteille de vin', price: 7},
];

// Récupération des id avec lesquels on va travailler principalement
const panier = document.getElementById('panier');
const prixTotal = document.getElementById('total');

// Fonction d'ajout d'article au panier
const addProduct = (product, productPrice) => {
    let productExists = false; // Booléen qui va définir si l'article existe

    const lis = panier.getElementsByTagName('li'); // Récupération de la liste de li du panier

    for (let i = 0; i < lis.length; i++) {
        const currentLi = lis[i]; // Récupération à chaque itération du li ou se situe l'index de la boucle
        const currentP = currentLi.getElementsByTagName('p')[0]; // Récupération du <p> qui accompagne le li actuel
        const existingProduct = currentLi.firstChild.nodeValue; // Récupération de la valeur du <p>

        if (existingProduct === product) {
            const totalPrice = parseFloat(currentP.innerHTML) + parseFloat(productPrice);
            currentP.innerHTML = totalPrice.toFixed(2); // Limite le nombre de décimale a deux
            productExists = true;
            break;
        }
    }

    if (!productExists) {
        panier.appendChild(createListItem(product, productPrice)) // Si le produit n'existe pas encore, on l'ajoute au panier
    }

    totalCalculation();
}

// Fonction de création de l'article dans la liste du panier
const createListItem = (product, productPrice) => {
    const li = document.createElement('li'); // Création d'un <li>
    const p = document.createElement('p'); // Création d'un <p>

    li.innerHTML = product; // Assignation du nom de l'article au <li>
    p.innerHTML = productPrice; // Assignation du prix de l'article au <p>

    li.appendChild(p); // On ajoute en enfant le <p> au <li>
    return li;
}

// Fonction qui va permettre de calculer le total du panier

const totalCalculation = () => {
    let total = 0; // Initialisation du total du panier a 0
    const lis = panier.getElementsByTagName('li'); // Récupération de la liste des lis
    
    for (let i = 0; i < lis.length; i++) {
        const currentP = lis[i].getElementsByTagName('p')[0]; // Récupération du <p> accompagnant le li ou si situe l'index
        total += parseFloat(currentP.innerHTML); // Addition du total du panier avec la valeur du <p>
    }

    prixTotal.innerHTML = `${total.toFixed(2)} €`
}

// Affichage de la liste d'articles au chargement de la page
window.addEventListener('load', () => {
    const articles = document.getElementById('articles');
    products.forEach((product) => {
        let articleHTML = 
        `<ul>
            <li>${product.name}</li>
            <li>${product.price}</li>
        </ul>
        <button onclick="addProduct('${product.name}', '${product.price}')">
            Ajout article
        </button>
        `;

        let newArticle = document.createElement('article');
        newArticle.innerHTML = articleHTML;
        articles.appendChild(newArticle);
    })
})