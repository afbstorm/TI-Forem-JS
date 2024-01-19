const people = [
    {name: 'Bernard', birthYear: 1998},
    {name: 'Carl', birthYear: 1978},
    {name: 'Brahim', birthYear: 2015},
    {name: 'Benoit', birthYear: 1985},
]

const perfomOperation = (people, operation) => {
    const currentYear = new Date().getFullYear();

    switch (operation) {
        case 'getAdults': 
            return people.filter(person => currentYear - person.birthYear > 18).map(person => person.name);
        case 'calculateAges': 
            return people.map(person => ({...person, age: currentYear - person.birthYear}));
        case 'getDetails':
            return people.map(person => `${person.name} is ${currentYear - person.birthYear} years old`);
        default:
            return 'Invalid operation'
    };
};

console.log(perfomOperation(people, 'getAdults'));
console.log(perfomOperation(people, 'calculateAges'));
console.log(perfomOperation(people, 'getDetails'));