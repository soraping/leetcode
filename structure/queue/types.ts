interface IBases<T> {
    _items: T[];
    _count: number;

    clear(): void;
    isEmpty(): boolean;
    toString(): string;
    size: number;
}

export interface IQueue<T> extends IBases<T> {
    peek(): T;
    dequeue(): T;
    enqueue(item: T): void;
}

export interface IDeque<T> extends IBases<T> {
    addFront(item: T): void;
    addBack(item: T): void;
    removeFront(): T;
    removeBack(): T;
    peekFront(): T;
    peekBack(): T;
}