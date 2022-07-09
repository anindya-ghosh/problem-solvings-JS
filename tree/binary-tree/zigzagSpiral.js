
function traverseGivenLevel(node, level, ltr) {
  if (node === null) {
    return;
  }
  if (level === 1) {
    streamOut(node.data);
  }
  traverseGivenLevel(ltr ? node.left : node.right, level - 1, ltr);
  traverseGivenLevel(ltr ? node.right : node.left, level - 1, ltr);
}
  
function printZigZagSpiral(node) {
  const h = getHeight(node);
  for (let i = 0, ltr = false; i <= h; i++) {
    traverseGivenLevel(node, i, ltr);
    ltr = !ltr;
  }
}

printZigZagSpiral(root)


