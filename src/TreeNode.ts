import AbstractTreeNode from './AbstractTreeNode';

class TreeNode<K, V> implements AbstractTreeNode<K> {
  key: K;
  value?: V;
  parent?: TreeNode<K, V>;
  left?: TreeNode<K, V>;
  right?: TreeNode<K, V>;

  constructor(
    key: K,
    value?: V,
    parent?: TreeNode<K, V>,
    left?: TreeNode<K, V>,
    right?: TreeNode<K, V>
  ) {
    this.key = key;
    this.value = value;
    if (value) {
      this.value = value;
    }
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

  public setValue(value: V): void {
    this.value = value;
  }

  public getValue(): V | undefined {
    return this.value;
  }

  public setParent(parent: TreeNode<K, V>): void {
    this.parent = parent;
  }

  public getParent(): TreeNode<K, V> | undefined {
    return this.parent;
  }

  public setRight(right?: TreeNode<K, V>): void {
    this.right = right;
  }

  public getRight(): TreeNode<K, V> | undefined {
    return this.right;
  }

  public setLeft(left?: TreeNode<K, V>): void {
    this.left = left;
  }

  public getLeft(): TreeNode<K, V> | undefined {
    return this.left;
  }
}

export default TreeNode;
