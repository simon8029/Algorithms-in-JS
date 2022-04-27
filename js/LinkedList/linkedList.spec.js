import { LinkedList } from './linkedList';

describe('LinkedList', function () {
  it('should be able to create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should be able to append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.toString()).toBe('1,2,3');
  });

  it('should be able to prepend node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should be able to delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.toString()).toBe('1,2,3,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,3,4,5');

    linkedList.delete(4);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('5');

    expect(linkedList.toString()).toBe('2,3,5');

    linkedList.delete(5);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('3');

    expect(linkedList.toString()).toBe('2,3');
  });
});
