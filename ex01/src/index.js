let myArr = [];

function* multiplication(x) {
    for(var i = 0; i < x - 1; i++) {
        x *= 2;
        myArr.push(x);
        yield x;
    }
};

var num = multiplication(3);
for(var j = 0; j < 3; j++) {
    console.log(num.next().value);
};

module.exports = multiplication;
