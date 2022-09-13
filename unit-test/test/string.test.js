test("String", () => {
    const name = "Ahsan Ta'wil";

    expect(name).toBe("Ahsan Ta'wil");
    expect(name).toEqual("Ahsan Ta'wil");
    expect(name).toMatch(/san/);
});