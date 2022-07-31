class NumArray {
    private nums:number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    update(index: number, val: number): void {
        const nums = this.nums;
        if(this.isInvalidIndex(index))
            throw new Error("Index out of bounds");
        nums[index] = val;
    }

    sumRange(left: number, right: number): number {
        const nums = this.nums;
        if(this.isInvalidIndex(left) || this.isInvalidIndex(right))
            throw new Error("Index out of bounds");
        let sum = 0;
        for(let i = left ; i <= right ; i++)
            sum += nums[i];
        return sum;
    }

    isInvalidIndex(index:number):boolean {
        return index < 0 || index >= this.nums.length;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */