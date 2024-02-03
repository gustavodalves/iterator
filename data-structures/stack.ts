export class Stack<T> {
    private readonly items: T[] = []

    get isEmpty() {
        return !this.items.length;
    }

    get size() {
        return this.items.length;
    }

    get peek() {
        if (this.isEmpty) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    get toArray() {
        return this.items
    }

    [Symbol.iterator](): Iterator<T> {
        let index = -1;

        return {
            next: (): IteratorResult<T> => {
                if (index < this.items.length - 1) {
                    return { value: this.items[++index], done: false };
                } else {
                    return { value: undefined as any, done: true };
                }
            },
        };
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }
}
