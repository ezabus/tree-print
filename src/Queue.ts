class Queue<T> {
  storage: T[] = [];

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): T {
    const el = this.storage.shift();
    if (!el) {
      throw new Error("Can't dequeue empty queue");
    } else {
      return el;
    }
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }
}

export default Queue;
