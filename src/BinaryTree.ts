import AbstractTreeNode from './AbstractTreeNode';
import AbstractBinaryTree from './AbstractBinaryTree';
import Queue from './Queue';

class BinaryTree<K> implements AbstractBinaryTree<K> {
  nodes: AbstractTreeNode<K>[];
  root?: AbstractTreeNode<K>;
  leftHeight: number;
  rightHeight: number;

  constructor(nodes?: AbstractTreeNode<K>[]) {
    this.nodes = [];
    if (nodes) {
      this.nodes = nodes;
    }
    this.leftHeight = 0;
    this.rightHeight = 0;
    this.buildTree();
  }

  public add(node: AbstractTreeNode<K>): void {
    this.nodes.push(node);
    if (!this.root) {
      this.root = node;
      return;
    }
    this.appendNode(this.root, node);
  }

  public search(key: K): AbstractTreeNode<K> | void {
    return this.findNode(key, this.root);
  }

  public print(): string {
    return '';
  }

  private buildTree(): void {
    this.nodes.forEach((node) => {
      if (!this.root) {
        this.root = node;
        return;
      } else {
        this.appendNode(this.root, node);
      }
    });
  }

  private appendNode(
    rootNode: AbstractTreeNode<K>,
    newNode: AbstractTreeNode<K>
  ): void {
    let nextNode;
    let isLess = false;
    if (newNode.getKey() < rootNode.getKey()) {
      isLess = true;
      if (rootNode.getLeft()) {
        nextNode = rootNode.getLeft();
      }
    } else {
      if (rootNode.getRight()) {
        nextNode = rootNode.getRight();
      }
    }
    if (nextNode) {
      return this.appendNode(nextNode, newNode);
    }
    newNode.setParent(rootNode);
    if (isLess) {
      rootNode.setLeft(newNode);
    } else {
      rootNode.setRight(newNode);
    }
  }

  private findNode(
    key: K,
    curNode?: AbstractTreeNode<K>
  ): AbstractTreeNode<K> | void {
    if (!curNode) {
      return;
    }
    if (curNode?.getKey() === key) {
      return curNode;
    }
    const nextNode =
      key < curNode.getKey() ? curNode.getLeft() : curNode.getRight();
    return this.findNode(key, nextNode);
  }

  public levelTraverse(): AbstractTreeNode<K>[] {
    if (!this.root) {
      return [];
    }
    const visitedNodes: AbstractTreeNode<K>[] = [];
    const queue = new Queue<AbstractTreeNode<K>>();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const curNode = queue.dequeue();
      visitedNodes.push(curNode);
      const leftNode = curNode.getLeft();
      if (leftNode) {
        queue.enqueue(leftNode);
      }
      const rightNode = curNode.getRight();
      if (rightNode) {
        queue.enqueue(rightNode);
      }
    }
    return visitedNodes;
  }
}

export default BinaryTree;
