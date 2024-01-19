// Création d'un setTimeout
let timeout = setTimeout(() => {
    console.log('Hello World from setTimeout');
}, 1500);

// Création d'un setInterval
let interval = setInterval(() => {
    console.log('Hello from setInterval');
}, 3000);

// Fonction qui va servir à couper l'intervale
const clearCurrentInterval = () => {
    clearInterval(interval)
    console.log('Interval cleared');
};

let stopInterval = setTimeout(() => {
    clearCurrentInterval();
    console.log('I\'ve stopped you !');
}, 12000);