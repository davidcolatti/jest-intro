const cloneArray = require("../cloneArray");

test("properly cloens array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array); // needs to be toEqual because toBe wont work because it's checking the reference ID
  expect(cloneArray(array)).not.toBe(array); // testing to see if array is making a copy and not the same array
});
