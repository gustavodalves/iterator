export interface DefaultIterator<T> {
    hasNext(): boolean;
    next: T
    add(item: T): void
}