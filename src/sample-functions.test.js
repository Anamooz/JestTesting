const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing a negative number -- success', () => {
  const target = 6;
  const result = myFunctions.sum(-12, 18);
  expect(target).toBe(result);
});

test('Testing negative numbers -- success', () => {
  const target = -30;
  const result = myFunctions.sum(-12, -18);
  expect(target).toBe(result);
});

test('Testing div numbers -- success', () => {
  const target = 5;
  const result = myFunctions.div(10, 2);
  expect(target).toBe(result);
});

test('Testing negative div numbers -- success', () => {
  const target = -5;
  const result = myFunctions.div(10, -2);
  expect(target).toBe(result);
});

test('Testing contain numbers -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers("therearenonumbers");
  expect(target).toBe(result);
});

test('Testing no contain numbers -- success', () => {
  const target = true;
  const result = myFunctions.containsNumbers("yesnumebrs20398203");
  expect(target).toBe(result);
});

