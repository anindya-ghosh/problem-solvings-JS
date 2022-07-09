function getHeight(node) {
  if (node === null) return 0;

  let lHeight = getHeight(node.left);
  let rHeight = getHeight(node.right);
  if (lHeight > rHeight) return lHeight + 1;

  return rHeight + 1;
}