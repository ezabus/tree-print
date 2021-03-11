import BinaryTree from '../src/BinaryTree';
import TreeNode from '../src/TreeNode';

function checkLevelTraversal(input: number[], expectedResult: number[]) {
  const nodes = input.map(
    (value) => new TreeNode<number, number>(value, value)
  );
  const tree = new BinaryTree();
  nodes.forEach((node) => tree.add(node));
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
});
