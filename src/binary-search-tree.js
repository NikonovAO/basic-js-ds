const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addData(this.head, data);

    function addData(node, data) {
      if(node === null) {
        return new Node(data);
      }
      if(data < node.data) {
        node.left = addData(node.left, data);
      }
      if(data === node.data) {
        return node;
      }
      if(data > node.data) {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchData(node, data) {
      if(node === null) {
        return false;
      }
      if(data < node.data) {
        return searchData(node.left, data);
      }
      if(data === node.data) {
        return true;
      }
      if(data > node.data) {
        return searchData(node.right, data);
      }
    }
    return searchData(this.head, data);
  }

  find(data) {
    function findData(node, data) {
      if(node === null) {
        return null;
      }
      if(data < node.data ) {
        return findData(node.left, data);
      }
      if(data === node.data ) {
        return node;
      }
      if(data > node.data) {
        return findData(node.right, data);
      }
    }
    return findData(this.head, data);
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if(node === null) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } 
      if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } 
      if(data === node.data) {
        if(node.left === null && node.right === null) {
          return null;
        }
        if(node.left === null) {
          node = node.right;
          return node;
        }
        if(node.right === null) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(this.head === null) {
      return null;
    }
    let minValue = this.head;
    while (minValue.left) {
      minValue = minValue.left;
    }
    return minValue.data;
  }

  max() {
    if (this.head === null) {
      return;
    }
    let maxValue = this.head;
    while(maxValue.right) {
      maxValue = maxValue.right;
    }
    return maxValue.data;
  }

}

module.exports = {
  BinarySearchTree
};