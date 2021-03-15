# Tree Print

## Problem Statement

Impelment some methods of binary search tree with no parent links, which will meet the following requirements:

* Method add. Adds node to the tree
* Method search. Must be implemented by **level traversal**
* Method print. Must "pretty print" the tree. For example, for input:

  ``[100, 15, 190, 171, 3, 91, 205, 155, 13, 17, 203]``,

  it should print:
  ```
           100
     15             190
  3      91      171      205
   13  17     155      203
  ```
  Please note: elements could have arbitrary lenght, tree could be unbalanced, there should be no extra spaces or indentations between subtrees of the tree.

## Installation

**Prerequisits**
* node v12 and higher
* npm v7 and higher

**Instalation steps**

* Cloning the repo
  ```bash
  git clone https://github.com/ezabus/tree-print
  ```
* Installing dependencies
  ``` bash
  npm install
  ```
* Running tests
  ```
  npm run test
  ```

## Solution

The main logic of this solution is implemented in ``BinaryTree.ts`` file.

**Tree Pringing**

* ``TreeNodes`` are created and passed to ``BinaryTree`` via ``add`` method
* Nodes are added "as is" without balancing since it is required to print an arbitrary
tree structure
* When ``print`` method is called, we need to calculate the level and the horizontal offset of each node. We can calculate the offset of a particular node with the following formula (nodes a sorted by key):
  ```
    offset(N[i]) = sum(len(N[0]) .. len(N[i - 1]))
  ```
  We also need to count the level of each node. It is possible to calculate both offset and level by performing tree sort.
* After collecting printing information, level travesal is called and printed tree is generated.

**Search**

* Search is implemented by level traversal as it was requested in problem statement. Therefore the time complexity of this search is *O(n)*.
