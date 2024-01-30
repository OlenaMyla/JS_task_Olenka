var argumentsLength = function (...args) {
    return args.length;
}
let args = [{}, null, "3"];

console.log(argumentsLength(...args));

var containsNearbyDuplicate = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && j - i == k) {
                return true;
            }
        }
    }

    return false;
};

let nums = [1, 2, 3, 1];
let k = 3;
let nums1 = [1,0,1,1];
let k1 = 1;
let nums2 = [1,2,3,1,2,3];
let k2= 2;
console.log(containsNearbyDuplicate(nums, k));
console.log(containsNearbyDuplicate(nums1, k1));
console.log(containsNearbyDuplicate(nums2, k2));
