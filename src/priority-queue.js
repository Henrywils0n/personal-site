class PriorityQueue {
    constructor() {
       // Init an array that'll contain the queue values.
       this.container = [];
    }
    // Helper function to display all values while developing
    display() {
       console.log(this.container);
    }
    // Checks if queue is empty
    isEmpty() {
       return this.container.length === 0;
    }
    // checks if queue is full
    enqueue(data, priority) {
       let currElem = new this.Element(data, priority);
       let addedFlag = false;
       // Since we want to add elements to end, we'll just push them.
       for (let i = 0; i < this.container.length; i++) {
          if (currElem.priority < this.container[i].priority) {
             this.container.splice(i, 0, currElem);
             addedFlag = true; break;
          }
       }
       if (!addedFlag) {
          this.container.push(currElem);
       }
    }
    dequeue() {
    // Check if empty
    if (this.isEmpty()) {
       return;
    }
    return this.container.pop();
 }
 peek() {
    if (isEmpty()) {
       return;
    }
    return this.container[this.container.length - 1];
 }
 clear() {
    this.container = [];
    }
 }
 // Create an inner class that we'll use to create new nodes in the queue
 // Each element has some data and a priority
 PriorityQueue.prototype.Element = class {
    constructor(data, priority) {
       this.data = data;
       this.priority = priority;
    }
 };