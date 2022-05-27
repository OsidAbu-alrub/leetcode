function numberOfSteps(num: number): number {
    if(num === 0) return 0;
    return numberOfSteps(num & 1 ? num - 1 : num / 2) + 1;
};