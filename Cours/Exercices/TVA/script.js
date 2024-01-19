const promptForValue = (message) => parseFloat(prompt(message));

const calculateTotalPrice = (quantity, price) => quantity * price;

const calculateTotalPriceTTC = (totalPrice, taxRate) => totalPrice + totalPrice * taxRate;

const price = promptForValue('Prix d\'un livre svp');
const quantity = promptForValue('Quantité du livre');
const tva2 = 0.21;

const totalPrice = calculateTotalPrice(quantity, price);
const totalPriceTTC = calculateTotalPriceTTC(totalPrice, tva2);

alert(`Voici le prix de la commande ${totalPriceTTC}`);
