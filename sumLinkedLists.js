var addTwoNumbers = function (l1, l2, carry) {
    if (!(l1 || l2 || carry)) return null;
    carry = carry || 0;

    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    return new ListNode(
        sum % 10,
        addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, sum > 9 ? 1 : 0)
    );
};
