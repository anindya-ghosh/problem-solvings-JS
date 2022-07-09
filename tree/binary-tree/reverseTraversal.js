function printGivenLevel(node, level) {
  if (node === null) return;
  if (level === 1) {
    streamOut(node.data);
  }
  printGivenLevel(node.left, level - 1);
  printGivenLevel(node.right, level - 1);
}

function reverseTraversal(node) {
  const h = getHeight(node);
  for (let i = h; i >= 0; i--) {
    printGivenLevel(node, i);
  }
}

reverseTraversal(root);