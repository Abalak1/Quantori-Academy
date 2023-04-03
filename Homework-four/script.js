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


const getOddValues2 = numbers => {
    return numbers.reduce((acc, num) => {
        if (num % 2 !== 0) {
            acc.push(num);
        }
        return acc;
    }, []);
};


// Exercise 9


const calculateTotal = products => {
    return products.reduce((acc, product) => {
        return acc + (product.price * product.count);
    }, 0);
};


// Exercise 10


const getUniqueValues = numbers => {
    return numbers.reduce((acc, number) => {
        if (acc.indexOf(number) === -1) {
            acc.push(number);
        }
        return acc;
    }, []);
};


// Exercise 11

const getErrorMessage = code => {
    const errorMessages = {
        500: "Server Error",
        401: "Authorization failed",
        402: "Server Error",
        403: "Access denied",
        404: "Not found"
    };

    return errorMessages[code] || "Unknown error";
};


// Exercise 12

const get2SmallestValues = numbers => {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return [sortedNumbers[0], sortedNumbers[1]];
};


// Exercise 13

const getFullName = person => {
    const { firstName, secondName, patronymic } = person;
    return `Name: ${firstName} ${patronymic} ${secondName}`;
};


// Exercise 14

const multiplyTo = (numbers, multiplier) => {
    return numbers.map(num => num * multiplier);
};


// Exercise 15

const getCharacterNames = (characters, franchise) => {
    const filteredCharacters = characters.filter(char => char.franchise === franchise);
    const names = filteredCharacters.map(char => char.name);
    return names.join(', ');
};

