export interface ILinkList<T, R> {
    count: number;
    head?: R;
    push(value: T): void;
    insert(value: T, position: number): void;
    getElementAt(position: number): R;
    indexOf(value: T): number;
    removeAt(position: number): void;
    remove(position: number): void;
    isEmpty(): boolean;
    size: number;
    toString(): string;
}

