import AbstractTreeNode from './AbstractTreeNode';

class TreeNode<K> implements AbstractTreeNode<K> {
  key: K;
  parent?: TreeNode<K>;
  left?: TreeNode<K>;
  right?: TreeNode<K>;

  constructor(
    key: K,
    parent?: TreeNode<K>,
    left?: TreeNode<K>,
    right?: TreeNode<K>
  ) {
    this.key = key;
    if (parent) {
      this.parent = parent;
    }
    if (left) {
      this.left = left;
    }
    if (right) {
      this.right = right;
    }
  }

  public setKey(key: K): void {
    this.key = key;
  }

  public getKey(): K {
    return this.key;
  }

  public setParent(parent: TreeNode<K>): void {
    this.parent = parent;
  }

  public getParent(): TreeNode<K> | undefined {
    return this.parent;
  }

  public setRight(right?: TreeNode<K>): void {
    this.right = right;
  }

  public getRight(): TreeNode<K> | undefined {
    return this.right;
  }

  public setLeft(left?: TreeNode<K>): void {
    this.left = left;
  }

  public getLeft(): TreeNode<K> | undefined {
    return this.left;
  }
}

export default TreeNode;
