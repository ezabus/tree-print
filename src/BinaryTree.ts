import AbstractTreeNode from './AbstractTreeNode';
import AbstractBinaryTree from './AbstractBinaryTree';
import Queue from './Queue';
import PrintableTreeNode from './PrintableTreeNode';

class BinaryTree<K> implements AbstractBinaryTree<K> {
  nodes: PrintableTreeNode<K>[];
  root?: PrintableTreeNode<K>;
  leftHeight: number;
  rightHeight: number;

  constructor(nodes?: AbstractTreeNode<K>[]) {
    this.nodes = [];
    if (nodes) {
      this.nodes = nodes.map(this.wrapNode);
    }
    this.leftHeight = 0;
    this.rightHeight = 0;
    this.buildTree();
  }

  public add(node: AbstractTreeNode<K>): void {
    const wrappedNode = this.wrapNode(node);
    this.nodes.push(wrappedNode);
    if (!this.root) {
      this.root = wrappedNode;
      return;
    }
    this.appendNode(this.root, wrappedNode);
  }

  /**
   * Wraps provided tree node in PrintableTreeNode
   * We need PrintableTreeNode to store information
   * regarding level and offset
   *
   * @param node
   * @returns PrintableTreeNode<K> printable tree node
   */
  private wrapNode(node: AbstractTreeNode<K>): PrintableTreeNode<K> {
    const printableNode = new PrintableTreeNode(node.getKey());
    printableNode.setOriginalNode(node);
    return printableNode;
  }

  public search(key: K): AbstractTreeNode<K> | void {
    return this.breadthFirstSearch(key);
  }

  public print(): string {
    this.preparePrintingInfo();
    const result = this.levelTraverseWrappedNodes().reduce(
      (accum, node) => {
        if (node.getLevel() !== accum.curLevel) {
          accum.printing += accum.levelPrinting + '\n';
          accum.levelPrinting = '';
          accum.curLevel = node.getLevel();
        }
        accum.levelPrinting += this.generateWhiteSpaces(
          node.getOffset() - accum.levelPrinting.length
        );
        accum.levelPrinting += node.getKey();
        return accum;
      },
      {
        curLevel: 0,
        levelPrinting: '',
        printing: ''
      }
    );
    return result.printing + result.levelPrinting;
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

  private breadthFirstSearch(key: K): AbstractTreeNode<K> | void {
    if (!this.root) {
      return;
    }
    const queue = new Queue<PrintableTreeNode<K>>();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const curNode = queue.dequeue();
      if (curNode.getKey() === key) {
        return curNode.getOriginalNode();
      }
      const leftNode = curNode.getLeft();
      if (leftNode) {
        queue.enqueue(leftNode as PrintableTreeNode<K>);
      }
      const rightNode = curNode.getRight();
      if (rightNode) {
        queue.enqueue(rightNode as PrintableTreeNode<K>);
      }
    }
    return;
  }

  public levelTraverse(): AbstractTreeNode<K>[] {
    return this.levelTraverseWrappedNodes().map((node) =>
      node.getOriginalNode()
    );
  }

  public levelTraverseWrappedNodes(): PrintableTreeNode<K>[] {
    if (!this.root) {
      return [];
    }
    const visitedNodes: PrintableTreeNode<K>[] = [];
    const queue = new Queue<PrintableTreeNode<K>>();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const curNode = queue.dequeue();
      visitedNodes.push(curNode);
      const leftNode = curNode.getLeft();
      if (leftNode) {
        queue.enqueue(leftNode as PrintableTreeNode<K>);
      }
      const rightNode = curNode.getRight();
      if (rightNode) {
        queue.enqueue(rightNode as PrintableTreeNode<K>);
      }
    }
    return visitedNodes;
  }

  private preparePrintingInfo(): void {
    const root = this.root;
    if (!root) {
      return;
    }
    this.updatePrintingInfo(root);
  }

  private updatePrintingInfo(
    curNode: PrintableTreeNode<K>,
    offset = 0,
    curLevel = 0
  ): number {
    const left = curNode.getLeft() as PrintableTreeNode<K>;
    if (left) {
      const leftDeltaOffset = this.updatePrintingInfo(
        left,
        offset,
        curLevel + 1
      );
      offset = leftDeltaOffset;
    }
    this.addPrintingInfo(curNode, offset, curLevel);
    const deltaOffset = new String(curNode.getKey()).length;
    offset += deltaOffset;
    const right = curNode.getRight() as PrintableTreeNode<K>;
    if (right) {
      const rightDeltaOffset = this.updatePrintingInfo(
        right,
        offset,
        curLevel + 1
      );
      offset = rightDeltaOffset;
    }
    return offset;
  }

  private addPrintingInfo(
    node: PrintableTreeNode<K>,
    offset: number,
    level: number
  ): void {
    node.setOffset(offset);
    node.setLevel(level);
  }

  private generateWhiteSpaces(numberOfSpaces: number) {
    let whiteSpaceString = '';
    for (let i = 0; i < numberOfSpaces; i++) {
      whiteSpaceString += ' ';
    }
    return whiteSpaceString;
  }
}

export default BinaryTree;
