function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}

var iterator = myGenerator(6, 7, 8);
var generatorArray = [];
for(var j = 0; j < 13; j++) {
    generatorArray.push(iterator.next().value);
};
console.log(generatorArray);
module.exports = { generatorArray, myGenerator };

