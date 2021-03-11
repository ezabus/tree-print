import AbstractTreeNode from './AbstractTreeNode';
import TreeNode from './TreeNode';

class PrintableTreeNode<K> extends TreeNode<K> implements AbstractTreeNode<K> {
  level = 0;
  offset = 0;
  originalNode?: AbstractTreeNode<K>;

  setLevel(level: number): void {
    this.level = level;
  }

  getLevel(): number {
    return this.level;
  }

  setOffset(offset: number): void {
    this.offset = offset;
  }

  getOffset(): number {
    return this.offset;
  }

  setOriginalNode(node: AbstractTreeNode<K>): void {
    this.originalNode = node;
  }

  getOriginalNode(): AbstractTreeNode<K> {
    const originalNode = this.originalNode;
    if (!originalNode) {
      throw new Error('Now original node was provided');
    }
    return originalNode;
  }
}

export default PrintableTreeNode;
