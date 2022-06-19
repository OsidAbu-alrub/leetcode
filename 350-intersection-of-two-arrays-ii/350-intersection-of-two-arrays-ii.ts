function intersect(nums1: number[], nums2: number[]): number[] {
    const intersectionMap = {};
    
    nums1.forEach(num => {
        intersectionMap[num] = intersectionMap[num] ? intersectionMap[num] + 1 : 1;
    })
    
    return nums2.filter(num => {
        if(intersectionMap[num]){
            intersectionMap[num]--;
            return true;
        }
        return false;
    })
};