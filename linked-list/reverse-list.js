const reverseList = (node) => {
	if (node !== null || node.next !== null) return node;

	const temp = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return temp;
}

const reverseList = (node) => {
	let head = null;
	while(node) {
		const newNode = new SinglyNode(node.data);
		newNode.next = head;
		head = newNode;
		node = node.next;
	}
	return head;
}