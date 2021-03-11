import AbstractTreeNode from './AbstractTreeNode';

interface AbstractBinaryTree<K> {
  add(node: AbstractTreeNode<K>): void;
  search(key: K): AbstractTreeNode<K> | void;
  print(): string;
}

export default AbstractBinaryTree;
