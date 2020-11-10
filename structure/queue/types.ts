interface IBases{

    clear(): void;
    isEmpty(): boolean;
    toString(): string;
    size: number;
}

export interface IQueue<T> extends IBases{
    peek(): T;
    dequeue(): T;
    enqueue(item: T): void;
}

export interface IDeque<T> extends IBases{
    addFront(item: T): void;
    addBack(item: T): void;
    removeFront(): T;
    removeBack(): T;
    peekFront(): T;
    peekBack(): T;
}