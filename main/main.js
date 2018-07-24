// Write your cade below:
function main(number) {

    var input = "1234";
    var A = 0, B = 0;
    for (let i in input) {
        for (let j in number) {
            if (input[i] === number[j] && i === j) {
                A++;
            }
            if (input[i] === number[j] && i != j) {
                B++;
            }
        }
    }
    return (A + 'A' + B + 'B');
};

module.exports = main