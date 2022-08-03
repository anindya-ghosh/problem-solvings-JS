const nodesOfKDistance = (node, distance) => {
	if (node === null || distance < 0) return;

	if (distance === 0) {
		streamOut(node.data);
	}

	nodesOfKDistance(node.left, distance - 1);
	nodesOfKDistance(node.right, distance - 1);
}