class Node {
  constructor(key, value, next = null, prev = null) {
    this.prev = prev;
    this.next = next;
    this.data = value;
    this.key = key;
  }
}

const defaultLimit = 4;
class LruCache {
  constructor(limit) {
    this.init(limit);
  }
  
  init (limit = defaultLimit) {
    this.head = null;
    this.tail= null;
    this.limit = limit;
    this.cacheMap = {};
    this.size = 0;
  }

  write(key, value) {
    const existingNode = this.cacheMap[key];

    if (!!existingNode) {
      this.detach(existingNode);
      this.size--;
    } else if (this.size === this.limit) {
      delete this.cacheMap[this.tail.key];
      this.detach(this.tail);
      this.size--;
    }

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    this.cacheMap[key] = this.head;
    this.size++;
  }

  read(key) {
    const existingNode = this.cacheMap[key];
    if (existingNode) {
      if (this.head !== existingNode) {
        this.write(key, existingNode.value);
      }
      return existingNode.value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }

  detach(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

}

(function main(pageList) {
  const lruCache = new LruCache(3);
  (pageList || []).forEach(element => {
    lruCache.push(element);
  });
})([1, 2, 3, 1, 4, 5])