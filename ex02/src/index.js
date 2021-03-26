function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    var x = 0;
    for(var i = 0; i < 5; i++) {
        x++;
        yield x;
    }
}

function* insideGenerator2() {
    var x = 9;
    for(var i = 0; i < 6; i++) {
        x++;
        yield x;
    }
}

function* insideGenerator3() {
    var x = 5;
    for(var i = 0; i < 4; i++) {
        x++;
        yield x;
    }
}
var iterator = myGenerator();
var fifteenArray = [];

for(var j = 0; j < 15; j++) {
    fifteenArray.push(iterator.next().value);
};
console.log(fifteenArray.join("#, ") + "#, " + undefined + "!");

module.exports = { fifteenArray, myGenerator };