import BinaryTree from '../src/BinaryTree';
import TreeNode from '../src/TreeNode';

function createTree(input: number[]) {
  const nodes = input.map((value) => new TreeNode<number>(value));
  const tree = new BinaryTree<number>();
  nodes.forEach((node) => tree.add(node));
  return tree;
}

function checkLevelTraversal(input: number[], expectedResult: number[]) {
  const tree = createTree(input);
  const returnedValues = tree.levelTraverse().map((node) => node.getKey());
  expect(returnedValues).toEqual(expectedResult);
}

describe('Binary Tree', () => {
  test('level traverse working correctly', () => {
    const cases = [
      {
        input: [100, 15, 190, 171, 3, 91, 205, 155, 13, 17, 203],
        expectedResult: [100, 15, 190, 3, 91, 171, 205, 13, 17, 155, 203]
      }
    ];
    cases.forEach((caseData) =>
      checkLevelTraversal(caseData.input, caseData.expectedResult)
    );
  });

  test('tree printing', () => {
    const input = [100, 15, 190, 171, 3, 91, 205, 155, 13, 17, 203];
    const tree = createTree(input);
    const printing = tree.print();
    const expectedResult =
      '         100\n   15             190\n3      91      171      205\n 13  17     155      203';
    expect(printing).toEqual(expectedResult);
  });

  test('tree search, node in tree', () => {
    const input = [100, 15, 190, 171, 3, 91, 205, 155, 13, 17, 203];
    const tree = createTree(input);
    const node = tree.search(155);
    expect(!!node).toEqual(true);
  });

  test('tree search, node not in tree', () => {
    const input = [100, 15, 190, 171, 3, 91, 205, 155, 13, 17, 203];
    const tree = createTree(input);
    const node = tree.search(999);
    expect(!!node).toEqual(false);
  });
});
