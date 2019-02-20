class TreeNode {
  private _value: number;
  private _left: TreeNode;
  private _right: TreeNode;

  public constructor(value: number) {
    this._value = value;
    this._right = null;
    this._left = null;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public get right(): TreeNode {
    return this._right;
  }

  public set right(right: TreeNode) {
    this._right = right;
  }

  public get left(): TreeNode {
    return this._left;
  }

  public set left(left: TreeNode) {
    this._left = left;
  }
}

class BinarySearchTree {
  private _root: TreeNode;

  public constructor() {
    this.root = null;
  }

  public search(value: number): number {
    let curr: TreeNode = this.root;
    while (true) {
      if (curr === null) return -1;
      if (curr.value === value) return value;

      if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  public insert(value: number): BinarySearchTree {
    let newNode: TreeNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode: TreeNode = this.root;

    while (true) {
      if (value === currentNode.value) return this;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  public bfs(): any[] {
    let node = this.root;
    let queue = [];
    let visited = [];
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      visited.push(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    return visited;
  }

  public dfsPostOrder(): any[] {
    let data = [];

    function traverse(node) {
      node.left !== null && traverse(node.left);
      node.right !== null && traverse(node.right); 
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  public dfsInOrder(): any[] {
    let data = [];

    function traverse(node) {
      node.left !== null && traverse(node.left);
      data.push(node.value);
      node.right !== null && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  public get root(): TreeNode {
    return this._root;
  }

  public set root(root: TreeNode) {
    this._root = root;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(70);
bst.insert(60);
bst.insert(80);
bst.insert(150);

console.log(bst); 