function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * let l1 = {
    val: 2, next:  {
        val: 4, next:
            { val: 3, next: null }
    }
};
 let l2 = {
    val: 5, next:  {
        val: 6, next:
            { val: 4, next: null }
    }
};
 * @param l
 * @returns {number}
 */
let l2 = {
    val: 0, next:null
};
let l1 = {
    val: 1, next:{
        val: 8,next:{
            val: 9,next:null
        }
    }
};
function list2num(l) {
    if(l.next===null){
        return l.val;
    }
    else{
        return l.val+list2num(l.next)*10;
    }
}

function num2list(num) {
    let ls = [];
    let i = 0;
    if(num===0){
        return [0];
    }
    while (num!==0){
        ls[i] = new ListNode(parseInt(num%10));
        num = parseInt(num/10);
        i++;
    }
    for(i=0;i<ls.length-1;i++){
        ls[i].next = ls[i+1];
    }
    return ls[0];
}

let addTwoNumbers = function(l1, l2) {

    let num1 = list2num(l1);
    let num2 = list2num(l2);
    console.log(num1+num2);
    return num2list(parseInt(num1+num2));
};

console.log(addTwoNumbers(l1,l2));