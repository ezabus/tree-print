interface AbstractTreeNode<K> {
  setKey(key: K): void;
  getKey(): K;
  setParent(parent: AbstractTreeNode<K>): void;
  getParent(): AbstractTreeNode<K> | undefined;
  setRight(right?: AbstractTreeNode<K>): void;
  getRight(): AbstractTreeNode<K> | undefined;
  setLeft(left?: AbstractTreeNode<K>): void;
  getLeft(): AbstractTreeNode<K> | undefined;
}

export default AbstractTreeNode;
