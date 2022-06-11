function minOperations(nums: number[], x: number): number {
    const hash = new Map<number, number>()
    let rightSum = 0
    hash.set(0, nums.length)
    for (let i=nums.length-1; 0<=i; i-=1) {
        rightSum += nums[i]
        if (!hash.has(rightSum)) {
            hash.set(rightSum, i)
        }
    }
    let leftSum = 0
    let min = Infinity
    for (let i=0; i<nums.length; i+=1) {
        const j = hash.get(x - leftSum)
        if (i <= j) {
            min = Math.min(min, i + nums.length - j)
        }
        leftSum += nums[i]
    }
    return min === Infinity ? -1 : min
};