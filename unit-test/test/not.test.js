test('String.not', () => { 
    const name = "Alzahwa Dohwa Muna";

    expect(name).not.toBe("zahwa");
    expect(name).not.toEqual("zahwa");
    expect(name).not.toMatch(/zhwa/);
 });

 test('numbers.not', () => { 
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(2);
    expect(value).not.toBe(9);
  });