class Node {
  constructor(value, next = null) {
    this.nodeValue = value;
    this.nextNode = next;
  }

  toString(cb) {
    return cb ? cb(this.nodeValue) : JSON.stringify(this.nodeValue);
  }
}

export { Node };
