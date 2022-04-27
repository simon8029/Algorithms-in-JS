import { Node } from './node';
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    const currentHead = this.head;
    this.head = newNode;
    this.head.nextNode = currentHead;
  }

  delete(value) {
    // If no head, return null
    if (!this.head) return null;

    // If head is the node, delete head
    if (this.head.nodeValue === value) {
      this.head = this.head.nextNode;
      return this;
    }

    // Go through each node to find the node with given value
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.nextNode.nodeValue === value) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
      } else {
        currentNode = currentNode.nextNode;
      }
    }

    if (this.tail.nodeValue === value) {
      this.tail = currentNode;
    }
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.nextNode;
    }

    return nodes;
  }

  toString(cb) {
    return this.toArray()
      .map((node) => node.toString(cb))
      .toString();
  }
}

export { LinkedList };
