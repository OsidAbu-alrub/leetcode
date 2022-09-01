function medianSlidingWindow(nums: number[], k: number): number[] {
    const medians: number[] = [];
    
    let window: number[];
    
    for (let i: number = 0; i + k <= nums.length; i++) {
        // Do the sorting only for the 1st window
        if (i === 0) {
            window = nums.slice(0, k);
            window.sort((a: number, b: number) => a - b);
            medians.push(getMedianFromWin(window, k));
        }
        else {
            // Add & Remove meanwhile keep it sorted
            // 0 1 2
            // 1 2 3
            // remove: i - 1   add: i + k - 1
            window.splice(window.indexOf(nums[i - 1]), 1);
            const toAdd: number = nums[i + k - 1];
            let j: number = 0;
            for (; j < window.length; j++) {
                if (window[j] >= toAdd) {
                    break;
                }
            }
            window.splice(j, 0, toAdd);
            medians.push(getMedianFromWin(window, k));
        }
    }
    
    return medians;
};

function getMedianFromWin(win: number[], k: number): number {
    if (k & 1) {
        return win[k >> 1];
    }
    else {
        return (win[(k >> 1) - 1] + win[k >> 1]) / 2;
    }
}