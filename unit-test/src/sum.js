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