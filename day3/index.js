function objectsAreEqual(objA, objB) {
    function sortedStringify(obj) {
        return JSON.stringify(Object.keys(obj).sort().reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {}));
    }
    
    return sortedStringify(objA) === sortedStringify(objB);
}

let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};

console.log(objectsAreEqual(obj1, obj2));  // Outputs: true
