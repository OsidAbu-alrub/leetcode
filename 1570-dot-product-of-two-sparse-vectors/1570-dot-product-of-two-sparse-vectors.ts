class SparseVector {
    nums;
    constructor(nums: number[]) {
		  this.nums = nums;
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
      let product = 0;
      const nums = this.nums;
      for(let i = 0 ; i < Math.min(vec.nums.length, nums.length) ; i++)
        product = product + vec.nums[i] * nums[i];
      return product
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */