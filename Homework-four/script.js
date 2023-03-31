// Exercise 1

const getOddValues = numbers => {
    return numbers.filter(number => number % 2 !== 0);
};


// Exercise 2

const getSmallestValue = numbers => {
    return Math.min(...numbers);
};


// Exercise 3

const getBiggestValue = numbers => {
    return Math.max(...numbers)
}


// Exercise 4


// this will only return "I am a short string" because space is also a character 

const getShorterStrings = (strings, characters = 20) => {
    return strings.filter(str => str.length < characters);
};


// Exercise 5


const getComputedStrings = fish => {
    return fish.map(f => `${f.name} likes ${f.likes}`);

}

// Exercise 6

const objects = [{ name: 'Alice' }, { age: 11 },]

const mergeObjects = objects => {
    return objects.reduce((acc, obj) => {
        return { ...acc, ...obj };
    }, {});
};


// Exercise 7


const getSmallestValue2 = numbers => {
    return Math.min(...numbers);
}


// Exercise 8