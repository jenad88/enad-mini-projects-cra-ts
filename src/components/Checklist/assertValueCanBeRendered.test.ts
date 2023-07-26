import { assertValueCanBeRendered } from './assertValueCanBeRendered';

test('should raise exception when not a string or number', () => {
  expect(() => {
    assertValueCanBeRendered(true);
  }).toThrow('value is not a string or a number');
});
