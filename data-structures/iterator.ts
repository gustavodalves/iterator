export interface DefaultIterator<T> {
    hasNext(): boolean;
    next: T   
}

export interface Collection<T> {
    add(item: T): void
}