
function orderTraversalWithStack(node, options) {
  const { inorder, preorder, postorder } = options || {};
  const stack = [];
  let current = node;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      preorder && streamOut(current.data);
      current = current?.left;
    }
    current = stack.pop();
    inorder && streamOut(current.data);
    current = current?.right;
    postorder && current && streamOut(current.data);
  }
}