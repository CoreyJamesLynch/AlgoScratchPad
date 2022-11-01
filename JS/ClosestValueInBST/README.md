# Summary

- write a function that takes in a BST and a target value and returns the closet value in the input BST to the input target

## Constraints

- there will only be one closest value
- each BST node has an integer value, a left child node, and a right child node
- a node is said to be a valid BST node only if it satisfies the BST value:
  - it's value is strictly greater than the values of every node to it's left
  - it's value is <= the values of every node to it's right
  - and it's child nodes are either valid BST nodes themselves or None/null.
