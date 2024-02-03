export class Queue<T> {
    private readonly items: T[] = []

    get isEmpty() {
        return !this.items.length;
    }

    get size() {
        return this.items.length;
    }

    get peek() {
        if (this.isEmpty) {
            throw new Error("Queue is empty");
        }
        return this.items[this.items.length - 1];
    }

    get toArray() {
        return this.items
    }

    enqueue(item: T): void {
        this.items.unshift(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty) {
            throw new Error("Queue is empty");
        }
        return this.items.pop();
    }

    [Symbol.iterator](): Iterator<T> {
        let index = this.items.length - 1;
        return {
            next: (): IteratorResult<T> => {
                if (index >= 0) {
                    const value = this.items[index]
                    index--;
                    return { value, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    }
}
