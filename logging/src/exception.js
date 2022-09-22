export class MyException extends Error {

}

export function callMe(name) {
    if (name === "Ahsan") {
        throw new MyException("Ups my exception happens");
    } else {
        return "Ok";
    }
}