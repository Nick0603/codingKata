const Card = require('./Card');
const Package = require('./Package');

const cards = [
    new Card(8, 'heart'),
    new Card(9, 'heart'),
    new Card(10, 'heart'),
    new Card(11, 'heart'),
    new Card(12, 'diamond'),
]
const p = new Package(cards);
console.log(p.getCategory());