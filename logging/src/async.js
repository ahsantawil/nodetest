export const sayHello = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Hello ${name}`)
            } else {
                reject('Name is Empty')
            }
        }, 1000);
    });
};

export const getBalance = async (name, from) => {
    const balance = await from();
    return {name : name, balance: balance};
}