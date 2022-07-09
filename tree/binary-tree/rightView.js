let maxLevel = -1;
function rightView(node, level = 0) {
  if (node === null) return;
  if (maxLevel < level) {
    maxLevel = level;
    streamOut(node.data);
  }
  rightView(node.right, level + 1);
  rightView(node.left, level + 1);
}

rightView(root);