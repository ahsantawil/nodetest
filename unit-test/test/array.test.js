test("Array Simple", () => {
    const names = ["Alzahwa", "Dohwa", "Muna"];

    expect(names).toContain("Dohwa");
    expect(names).toEqual(["Alzahwa", "Dohwa", "Muna"]);

});

test('array Object', () => { 
    
    const person = [
        {
            name: "Alzahwa"
        }, 
        {
            name: "Dohwa"
        }
    ]
    
    expect(person).toContainEqual({name: "Dohwa"});
    expect(person).toEqual([{name: "Alzahwa"}, {name: "Dohwa"}])
 })
