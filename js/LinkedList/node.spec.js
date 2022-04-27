import { Node } from './node';

describe('LinkList Node', () => {
  it('should be able to create node with value', () => {
    const node = new Node('abc');

    expect(node.nodeValue).toBe('abc');
    expect(node.nextNode).toBeNull();
  });

  it('should be able to accept object as a value', () => {
    const value = { key: 'key1', value: 'value1' };
    const node = new Node(value);

    expect(node.nodeValue).toBe(value);
    expect(node.nodeValue.key).toBe('key1');
    expect(node.nodeValue.value).toBe('value1');
    expect(node.nextNode).toBeNull();
  });

  it('should be able to link nodes', () => {
    const node2 = new Node(2);
    const node1 = new Node(1, node2);

    expect(node1.nextNode).toBeDefined();
    expect(node2.nextNode).toBeNull();
    expect(node1.nodeValue).toBe(1);
    expect(node1.nextNode.nodeValue).toBe(2);
  });

  it('shoule be able to convert node value to a JSON String', () => {
    let node = new Node(1);
    expect(node.toString()).toBe('1');

    const stringValue = 'abc';
    const jsonString = JSON.stringify(stringValue);
    node = new Node(stringValue);
    expect(node.toString()).toBe(jsonString);

    const objValue = { key: 'key1', value: 'value1' };
    const jsonString2 = JSON.stringify(objValue);
    node = new Node(objValue);
    expect(node.toString()).toBe(jsonString2);
  });

  it('should be able to convert node value to string with customized stringfier', () => {
    const nodeValue = { key: 'key1', value: 'value1' };
    const node = new Node(nodeValue);
    const toStringCb = (nodeValue) => `key: ${nodeValue.key}, value: ${nodeValue.value}`;

    expect(node.toString(toStringCb)).toBe('key: key1, value: value1');
  });
});
