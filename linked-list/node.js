class SinglyNode {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

function makeSinglyLL(new_data) {
	var head = null;
	var curr = null;
	var node;
	for (let el of new_data) {
		node = new SinglyNode((el));
		if (!head) {
			head = curr = node;
			continue;
		}
		curr.next = node;
		curr = curr.next;
	}
	return head;
}