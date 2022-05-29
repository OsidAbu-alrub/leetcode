function containsDuplicate(nums: number[]): boolean {
    const setOfNumbers = new Set<number>();
    return nums.some(num => setOfNumbers.has(num) || setOfNumbers.add(num) && false);
};