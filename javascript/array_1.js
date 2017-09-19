let twoSum = function(nums, target) {
    let i = 0, j = 0;
    let flag = true;

    // let arr = new Array();
    // let arr = new Array();
    let arr = [];
    while(flag){
        let sub = target - nums[i];
        for(j=i+1;j<nums.length;j++){
            if(sub===nums[j]){
                arr.push(i);
                arr.push(j);
                flag = false;
                break;
            }
        }
        i++;
    }
    return arr;
};
/**
 *
 * @type {[number,number,number]}
 */
let nums = [3,2,4];
console.time('using time');
twoSum(nums,7);
console.timeEnd('using time');