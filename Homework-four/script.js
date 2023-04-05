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


// Exercise 16

const getSmallestRow = numbers => {
    const smallestRowValues = [];
    for (let row of numbers) {
        let smallestValue = row[0];
        for (let value of row) {
            if (value < smallestValue) {
                smallestValue = value;
            }
        }
        smallestRowValues.push(smallestValue);
    }
    return smallestRowValues;
};


// Exercise 17 

const getSmallestColumn = numbers => {
    const smallestColumnValues = [];
    for (let i = 0; i < numbers[0].length; i++) {
        let smallestValue = numbers[0][i];
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[j][i] < smallestValue) {
                smallestValue = numbers[j][i];
            }
        }
        smallestColumnValues.push(smallestValue);
    }
    return smallestColumnValues;
};


// Exercise 18

const get2BiggestValues = numbers => {
    numbers.sort((a, b) => b - a);
    return [numbers[0], numbers[1]];
};

// Exercise 19

const getNumberOfVowels = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};


// Exercise 20

const getCapitalizedStrings = string => {
    let evenString = '';
    let oddString = '';
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            evenString += string[i].toUpperCase();
            oddString += string[i].toLowerCase();
        } else {
            evenString += string[i].toLowerCase();
            oddString += string[i].toUpperCase();
        }
    }
    return [evenString, oddString];
};


// Exercise 21

const getCorrectString = string => {
    let output = '';
    let count = 0;
    let prevChar = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === prevChar) {
            count++;
        } else {
            count = 1;
        }
        if (count <= 2) {
            output += char;
        }
        prevChar = char;
    }
    return output;
};

// Exercise 22

const getFlattenedArray = numbers => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (Array.isArray(element)) {
            result = result.concat(getFlattenedArray(element));
        } else {
            result.push(element);
        }
    }
    return result;
};


// Exercise 23

const getNotUniqueValues = numbers => {
    const frequency = {};
    const notUnique = [];

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (const num in frequency) {
        if (frequency[num] > 1) {
            notUnique.push(parseInt(num));
        }
    }

    return notUnique;
}

