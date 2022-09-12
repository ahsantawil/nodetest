test("test toBe", () => {
    let name = "Ahsan Tawil";
    let hello = `Hello ${name}`;

    expect(hello).toBe("Hello Ahsan Tawil");
})

test("test toEquals", ()=>{
    let person = {id: "ahsan"};
    Object.assign(person, {name: "Ahsan Tawil"})

    expect(person).toEqual({id: "ahsan", name: "Ahsan Tawil"})
})