const Card = require('../src/Card');
const Package = require('../src/Package');

describe('Package', () => {
    it('輸入的 Cards 可以被 getCards 取出', () => {
        const cards = [
            new Card(1, 'heart'),
            new Card(2, 'heart'),
            new Card(3, 'heart'),
            new Card(4, 'heart'),
            new Card(5, 'heart'),
        ]
        const p = new Package(cards);

        expect(p.getCards()).toEqual(cards);
    })
    it('判斷4,4,5,10,K 是一對的牌型', () => {
        const cards = [
            new Card(4, 'heart'),
            new Card(4, 'spade'),
            new Card(5, 'heart'),
            new Card(10, 'heart'),
            new Card(13, 'heart'),
        ]
        const p = new Package(cards);

        expect(p.getCategory()).toBe('OnePair');
    })

    it('判斷4,4,4,5,11 不是一對的牌型', () => {
        const cards = [
            new Card(4, 'heart'),
            new Card(4, 'spade'),
            new Card(4, 'diamond'),
            new Card(5, 'heart'),
            new Card(11, 'heart'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).not.toBe('OnePair');
    })

    it('判斷4,4,9,J,J 是兩對的牌型', () => {
        const cards = [
            new Card(4, 'heart'),
            new Card(4, 'spade'),
            new Card(9, 'heart'),
            new Card(11, 'heart'),
            new Card(11, 'spade'),
        ]
        const p = new Package(cards);

        expect(p.getCategory()).toBe('TwoPair');
    })

    it('判斷4,4,4,5,11 是三條的牌型', () => {
        const cards = [
            new Card(4, 'heart'),
            new Card(4, 'spade'),
            new Card(4, 'diamond'),
            new Card(5, 'heart'),
            new Card(11, 'heart'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('ThreeOfAKind');
    })
    it('判斷3,3,3,6,6 是葫蘆的牌型', () => {
        const cards = [
            new Card(3, 'heart'),
            new Card(3, 'spade'),
            new Card(3, 'diamond'),
            new Card(6, 'heart'),
            new Card(6, 'spade'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('FullHouse');
    })

    it('判斷9,9,9,9,11 是四條的牌型', () => {
        const cards = [
            new Card(9, 'heart'),
            new Card(9, 'spade'),
            new Card(9, 'diamond'),
            new Card(9, 'club'),
            new Card(11, 'spade'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('FourOfKind');
    })

    it('判斷紅心 4,6,7,10,12 是同花的牌型', () => {
        const cards = [
            new Card(4, 'heart'),
            new Card(6, 'heart'),
            new Card(7, 'heart'),
            new Card(10, 'heart'),
            new Card(12, 'heart'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('Flush');
    })
    it('判斷兩種以上花色 8,9,10,11,12 是順子的牌型', () => {
        const cards = [
            new Card(8, 'heart'),
            new Card(9, 'heart'),
            new Card(10, 'heart'),
            new Card(11, 'heart'),
            new Card(12, 'diamond'),
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('Straight');
    })

    it('判斷兩種以上花色 10,11,12,13,A 是順子的牌型', () => {
        const cards = [
            new Card(1, 'heart'),
            new Card(10, 'heart'),
            new Card(11, 'heart'),
            new Card(12, 'diamond'),
            new Card(13, 'heart')
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('Straight');
    })

    it('判斷 9,11,12,13,A 是High Card的牌型', () => {
        const cards = [
            new Card(1, 'heart'),
            new Card(9, 'heart'),
            new Card(11, 'heart'),
            new Card(12, 'diamond'),
            new Card(13, 'heart')
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('HighCard');
    })

    it('判斷紅心 A,2,3,4,5 是同花順的牌型', () => {
        const cards = [
            new Card(1, 'heart'),
            new Card(2, 'heart'),
            new Card(3, 'heart'),
            new Card(4, 'heart'),
            new Card(5, 'heart')
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('StraightFlush');
    })

    it('判斷紅心 10,11,12,13,A 是同花順的牌型', () => {
        const cards = [
            new Card(10, 'heart'),
            new Card(11, 'heart'),
            new Card(12, 'heart'),
            new Card(13, 'heart'),
            new Card(1, 'heart')
        ]
        const p = new Package(cards);
        expect(p.getCategory()).toBe('StraightFlush');
    })
})
