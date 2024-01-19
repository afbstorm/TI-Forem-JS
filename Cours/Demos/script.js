// Affichage console
console.log('je suis un log');

console.warn('je suis un avertissement');

console.error('je suis un erreur');

let myVar = 'Hello world';
console.log(myVar);

console.log(typeof NaN)

let myVar2 = 3;

// if (myVar2 === undefined) {
//     return false;
// } else {
//     return true;
// }

/* 
    = assignation de valeur 
    == comparaison de valeur 
    === comparaison de valeur et de type 
*/

// if (myVar2 == '3') {
//     console.log('Je suis un string') // true
// }
// else if( myVar2 === '3') {
//     console.log('je suis un nombre') // false
// }
// else if( myVar2 != '5') {
//     console.log('Je suis un string') // true
// }
// else if( myVar2 !== 5) {
//     console.log('je suis un nombre') // true
// }


// Constantes = valeur immuable -- Impossible de reaffecter une valeur
const myConst = 'Hello World';

let nombreReel = 11.435;

console.log(typeof nombreReel);

//----- Portée des variables 

// Variable globale au scope de l'application
let globale = 'Hello, je suis utilisable partout';
function utiliseUneVarGlobale () {
    return globale = 42
}

// Variable locale au scope 
function locale () {
    let locale = 42;
    return locale;
}

let isNull = true;

if (isNull === true) {
    isNull = null
    console.log(isNull);
} 
else if (isNull === null) {
    console.log('Égalité stricte :' , typeof isNull);
}

// ----- Manipulation de tableaux -----

// Créer un tableau
let arr = [1,2,3];
console.log(arr); // [1,2,3]

// Ajouter un élément en fin de tableau
arr.push(4);
console.log(arr); // [1,2,3,4]

// Supprimer le dernier élément du tableau
arr.pop();
console.log(arr); // [1,2,3]

// FindIndex : qui va renvoyer l'index du premier élement du tableau qui correspond à une comparaison
let arr2 = ['apple', 'banana', 'advocado'];
console.log(arr2.findIndex(fruit => fruit === 'banana')); // 1

// Map : Crée un tableau avec les résultats demandés par un processus
console.log(arr.map(elem => elem * 2)); // [2,4,6]

// Filter : Crée un tableau uniquement avec les éléments qui return true à un test
console.log(arr.filter(elem => elem % 2 === 0)); // [2]

// Insérer au début du tableau
arr.unshift(3)
console.log(arr); // [0,1,2,3]

// Insérer un élément à un emplacement spécifique d'un tableau, le 0 dans l'exemple indique que l'on ne supprime rien
arr.splice(3, 0, 7);
console.log(arr);

// forEach : Exécuter une fonction pour chaque élément du tableau
arr.forEach((num, index) => console.log(`Index: ${index}, numéro : ${num}`));

// Reduce : appliques une fonction (un accumulateur) et on va réduire chaque valeur du tableau (de gauche à droite) en une seule valeur
console.log(arr.reduce((sum, current) => sum + current, 0));

// ----- Functions ------

function func () {}
const func2 = (param, param2) => {}
const func3 = param => {}
addEventListener('click', () => {})

const addition = (num, num2) => {
    return num * num2
}
console.log(addition(5,5));

// ----- String ------

// Convertir en chaine de caractères
console.log((42).toString()); // '42'

// Replace : Remplacer une partie ou l'entièreté d'une chaine de caractères
let str = 'Hello World';
console.log(str.replace('World', 'Javascript'));

// CharAt : Renvoie la valeur d'un index d'une chaine de caractères
console.log(str.charAt(0));

// Trim : Supprimer des espaces blancs en début et en fin de chaine de caractères
console.log('              Hello World               '.trim());

// Substring : Renvoie une sous-chaine de la chaine de caractères d'origine (paramètres début - fin)
console.log(str.substring(0, 5));

// Slice : Renvoie une sous-chaine de la chaine de caractères d'origine (paramètres fin)
console.log(str.slice(-5));

// Intéraction sans DOM
// alert('Vous êtes en formation JS')
// const userInfo = prompt('Ou travailles-tu ?')

// console.log(userInfo);

// ------ Dates -------

const today = new Date();
console.log(today);

// ----- Ternary ------ 
let zero = 0;
zero === 0 ? console.log(true) : console.log(false);
zero === 0 ? console.log(true) : zero === 1 ? console.log(1) : console.log(false);

// ----- Utilisation des objects ------

let obj = {
    prop: 'value',
    prop2: 'value2'
};

obj.prop3 = 'value3';
console.log(obj);

delete obj.prop3;
console.log(obj);

let person = {
    age: 42,
    name: 'Marc',
    city: 'Charleroi'
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty('age'));

let personTab = [['name', 'Bernard'], ['age', 18], ['city', 'Nivelles']]
let personObj = Object.fromEntries(personTab);

console.log(personObj);


