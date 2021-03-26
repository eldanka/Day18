let shoppingList = new Map([
    [ 'Banana', 3 ],
    [ 'Pineapple', 5 ],
    [ 'Pear', 2 ],
    [ 'Carrot', 10 ],
    [ 'Apple', 1.5 ] 
]);

var arrKey = [];
for ( let gro of shoppingList.entries()) {
    arrKey.push(gro[0]);
}
for ( var i = 0; i < arrKey.length; i++ ) {
    console.log(`groceries: ${arrKey[i]}`);
}

var arrValue = [];
for ( let val of shoppingList.entries()) {
    arrValue.push(val[1]);
}
for ( var j = 0; j < arrValue.length; j++ ) {
    console.log(`amount: ${arrValue[j]}`);
}

for( let spl of shoppingList.entries()) {
    console.log(spl);
}

module.exports = { shoppingList, arrKey, arrValue };

