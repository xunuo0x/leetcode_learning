function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let sum = 0;
    let l = new ListNode(0);
    let d = l;

    while(c1!==null || c2!==null){
        sum = parseInt(sum/10);
        if(c1!==null){
            sum+=c1.val;
            c1 = c1.next;
        }
        if(c2!==null){
            sum+=c2.val;
            c2 = c2.next;
        }
        d.next = new ListNode(parseInt(sum%10));
        d = d.next;
    }
    if(sum/10===1){
        d.next = new ListNode(1);
    }
    return l.next;
}