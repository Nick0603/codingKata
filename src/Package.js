const _ = require('lodash');

class Package {
    constructor(cards) {
        this.cards = cards;
    }
    getCards() {
        return this.cards;
    }

    isStraight() {
        const cards = this.cards;
        const cardNumbers = cards.map((element) => {
            return element.getNumber();
        });

        const groupArray = _.values(_.groupBy(cardNumbers));
        const numberCountArr = _.sortBy(groupArray.map(g => g.length));
        const sortedCardNumbers = _.sortBy(cardNumbers);
        const max = sortedCardNumbers[4];
        const min = sortedCardNumbers[0];

        if (_.isEqual(numberCountArr, [1, 1, 1, 1, 1]) && max - min === 4) {
            return true;
        }
        if (_.isEqual(sortedCardNumbers, [1, 10, 11, 12, 13])) {
            return true;
        }
        return false;
    }

    isFlush() {
        const cards = this.cards;
        const cardSuits = cards.map((element) => {
            return element.getSuit();
        });
        const groupSuitArray = _.values(_.groupBy(cardSuits));
        const numberSuitCountArr = _.sortBy(groupSuitArray.map(g => g.length));
        if (_.isEqual(numberSuitCountArr, [5])) {
            return true;
        }
        return false;
    }

    getCategory() {
        const cards = this.cards;
        const cardNumbers = cards.map((element) => {
            return element.getNumber();
        });

        const groupArray = _.values(_.groupBy(cardNumbers));
        const numberCountArr = _.sortBy(groupArray.map(g => g.length));
        
        if (
            this.isFlush()
            && this.isStraight()
        ) {
            return "StraightFlush";
        }
        if (_.isEqual(numberCountArr, [1, 1, 1, 2])) {
            return 'OnePair';
        }
        if (_.isEqual(numberCountArr, [1, 2, 2])) {
            return 'TwoPair';
        }
        if (_.isEqual(numberCountArr, [1, 1, 3])) {
            return 'ThreeOfAKind';
        }
        if (_.isEqual(numberCountArr, [2, 3])) {
            return 'FullHouse';
        }
        if (_.isEqual(numberCountArr, [1, 4])) {
            return 'FourOfKind';
        }
        if (this.isFlush()) {
            return 'Flush'
        }
        if (this.isStraight()) {
            return 'Straight'
        }
        return 'HighCard'
    }
}

module.exports = Package;
