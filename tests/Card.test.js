const Card = require('../src/Card');

describe('Card', () => {
    it('should can be new', () => {
        const card = new Card();
        expect(card).toBeInstanceOf(Card);
    })
})