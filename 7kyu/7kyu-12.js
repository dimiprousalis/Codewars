// Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

// However, Grinch does not know how to do that. Can you help him?



//Solution
Date.prototype.getDate = function getGrinchDate() {
    return this.getUTCMonth() === 11 && this.getUTCDate() === 25 ? 26 : this.getUTCDate()
}


//Sample Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Gonna check my dates', () => {
    it('looks OK to me', () => {
        let d = new Date('1957-10-25');
        assert.equal(d.getMonth(), 9);
        assert.equal(d.getDate(), 25);
    });

    it('looks good too', () => {
        let d = new Date('1957-12-12');
        assert.equal(d.getMonth(), 11);
        assert.equal(d.getDate(), 12);
    });

    it('where did the Christmas go?!', () => {
        const d = new Date('1957-12-25');
        assert.equal(d.getMonth(), 11);
        assert.equal(d.getDate(), 26, 'Merry Christmas!');
    });
});