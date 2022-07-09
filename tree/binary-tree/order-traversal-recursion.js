function orderTraversal(node, options) {
  if (node === null) {
    return;
  }
  const { inorder, preorder, postorder } = options || {};
  
  preorder && streamOut(node.data);
  
  orderTraversal(node.left, options);
  
  inorder && streamOut(node.data);

  orderTraversal(node.right, options);
  
  postorder && streamOut(node.data);
};
