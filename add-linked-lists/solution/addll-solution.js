/**
 * Given two linked lists, treat like numbers and add together.
 *
 * @param  l1  the had node of a linked list in "reverse-digit" format
 * @param  l2  the head node of another "reverse-digit" format
 * @returns    head node of linked list of sum in "reverse-digit" format.
 */
const addLinkedLists = (l1, l2) => {
  let outHead = null,
      outTail = null;
  let carriedOverDigit = 0;

  // Loop over both lists stopping when both lists are done

  while (l1 || l2) {
    let digit1, digit2, newDigit;

    // If not done l1, get digit, move to next. If done, use 0.
    if (l1) {
      digit1 = l1.data;
      l1 = l1.next;
    } else {
      digit1 = 0;
    }

    // If not done l2, get digit, move to next. If done, use 0.
    if (l2) {
      digit2 = l2.data;
      l2 = l2.next;
    } else {
      digit2 = 0;
    }

    // Add together digits (along w/ carry) & determine new carry
    newDigit = digit1 + digit2 + carriedOverDigit;
    carriedOverDigit = Math.floor(newDigit / 10);
    newDigit = newDigit % 10;

    // Add to end of our out LL
    if (!outHead) {
      outHead = outTail = new Node(new_digit);
    } else {
      outTail.next = new Node(new_digit);
      outTail = outTail.next;
    }
  }

  // If we have any carry left over, add a new place for it
  if (carriedOverDigit) {
    outTail.next = new Node(carriedOverDigit);
  }

  return outHead;
};
