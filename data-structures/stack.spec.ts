import { Stack } from "./stack";

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should be empty and have size 0 initially', () => {
    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });

  it('should push items onto the stack correctly', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty).toBe(false);
    expect(stack.size).toBe(2);
    expect(stack.peek).toBe(2);
  });

  it('should pop items from the stack correctly', () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();
    
    expect(poppedItem).toBe(2);
    expect(stack.size).toBe(1);
  });

  it('should convert to array correctly', () => {
    stack.push(1);
    stack.push(2);

    const toArray = stack.toArray;
    expect(toArray).toEqual([1, 2]);
  });

  it('should iterate over items correctly', () => {
    stack.push(1);
    stack.push(2);

    const iteratorValues = [...stack];
    expect(iteratorValues).toEqual([1, 2]);
  });

  it('should throw an error when trying to peek from an empty stack', () => {
    expect(() => stack.peek).toThrowError('Stack is empty');
  });

  it('should throw an error when trying to pop from an empty stack', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });

  it('should be empty and have size 0 after popping all items', () => {
    stack.push(1);
    stack.push(2);

    stack.pop();
    stack.pop();

    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });
});
