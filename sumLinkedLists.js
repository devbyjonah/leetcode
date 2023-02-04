/*
addTwoNumber accepts 3 params:
    - l1 = a linked list consisting of non-negative integers
    - l2 = a linked list consisting of non-negative integers
    - carry = represents the carried digit from last sum (true:1,false:0)
the function will return a new linked list representing the sum of digits in l1 and l2
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

const addTwoNumbers = function (l1, l2, carry) {
    // check for base case
    if (!(l1 || l2 || carry)) return null;
    carry = carry ? 1 : 0;
    // sum digits + carry
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // return a new listNode calling addTwoNumbers recursively
    // to get a pointer to the next node
    return new ListNode(
        sum % 10,
        addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, sum > 9)
    );
};
