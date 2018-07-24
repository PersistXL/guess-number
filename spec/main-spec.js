const main = require('../main/main');

describe('main()', () => {
    var number = "1234" ;
    it('根据用户输入，返回"4A0B"', function() {
        var result = main(number);
        expect(result).toEqual("4A0B");
    })

});