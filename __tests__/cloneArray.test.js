const cloneArray = require("../cloneArray");

test("properly cloens array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array); // checking to see if the array is the same
  expect(cloneArray(array)).not.toBe(array); // testing to see if array is making a copy and not the same array
});
