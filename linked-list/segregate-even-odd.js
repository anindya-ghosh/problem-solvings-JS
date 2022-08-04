/**
 * Given a Linked List of integers, write a function to modify the linked list such that all even numbers appear before all the odd numbers in the modified linked list. Also, keep the order of even and odd numbers same.
 * Examples:
 * Input: 8->12->10->5->4->1->6->NULL
 * Output: 8->12->10->4->6->5->1->NULL
 */

const seggregateEvenOdd = (node) => {
	let head = null;
	let oddHead = null;
	let currNode;
	let currOddNode;
	while (node !== null) {
		if (head === null && node.data % 2 === 0) {
			head = currNode = node;
		} else if (node.data % 2 === 0) {
			currNode.next = node;
			currNode = currNode.next;
		} else if (oddHead === null && node.data % 2) {
			oddHead = currOddNode = node;
		} else if (node.data % 2) {
			currOddNode.next = node;
			currOddNode = currOddNode.next;
		}
		node = node.next;
	}
	currNode.next = oddHead;
	currOddNode.next = null;
	return head;
}