const Card = require('../src/Card');

describe('Card', () => {
    it('可以被宣告', () => {
        const card = new Card();
        expect(card).toBeInstanceOf(Card);
    })
    it('是否有這個函式', () => {
        const card = new Card();
        expect(card.getNumber).not.toBe(undefined);
    })

    it('判斷是否可以取到輸入的數字', () => {
        const card = new Card(1);
        const number = card.getNumber();
        expect(number).toBe(1)
    })

    it('判斷是否可以取到正確的花色', () => {
        const card = new Card(1,'spade');
        const suit = card.getSuit();
        expect(suit).toBe('spade')
    })
    
})
