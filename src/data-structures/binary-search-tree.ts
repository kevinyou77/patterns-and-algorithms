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

  // public delete(value: number): BinarySearchTree {
  //   let exists = this.search(value);

  //   if (exists === -1) {
  //     return;
  //   }

  //   let current = this.root;
  //   let parent = null;
  //   let found = null;

  //   while(true) {
  //     if (current.left.value === value) {
  //       parent = current;
  //       found = current.left;
  //     } else if (current.right.value === value) {
  //       parent = current;
  //       found = current.right;
  //     }

  //     if (found.left !== null) {
  //       found = found.left;
  //       found.left = null;
  //     }

  //     if (found.right !== null) {
  //       found = found.right;
  //       found.right = null;
  //     }

  //     if (found.right !== null && found.left !== null) {
  //       found = 
  //     }

  //     if (value < current.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //   }
