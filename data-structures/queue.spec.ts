import { Queue } from "./queue";

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should be empty and have size 0 initially', () => {
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  it('should enqueue items correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.isEmpty).toBe(false);
    expect(queue.size).toBe(2);
    expect(queue.peek).toBe(1);
  });

  it('should dequeue items correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const dequeuedItem = queue.dequeue();
    
    expect(dequeuedItem).toBe(1);
    expect(queue.size).toBe(1);
  });

  it('should convert to array correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const toArray = queue.toArray;
    expect(toArray).toHaveLength(2);
  });

  it('should iterate over items correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const iteratorValues = [...queue];
    expect(iteratorValues).toEqual([1, 2]);
  });

  it('should throw an error when trying to peek from an empty queue', () => {
    expect(() => queue.peek).toThrow('Queue is empty');
  });

  it('should throw an error when trying to dequeue from an empty queue', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  it('should be empty and have size 0 after dequeueing all items', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });
});
