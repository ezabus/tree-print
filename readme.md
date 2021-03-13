# Tree Print

## Problem Statement

Impelment some methods of binary search tree with no parent links which will meet the following requirements:

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
