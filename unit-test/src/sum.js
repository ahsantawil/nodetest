export const sum = (frist, second) => {
    return frist + second;
}

export const sumALL = (numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

export const calculate = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    callback(total);
};

export const calculateAndReturn = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return callback(total);
};