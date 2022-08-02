function topKFrequent(nums: number[], k: number): number[] {
    const heap = new MaxPriorityQueue({ priority: comparator }); 
    const map = new Map<number, number>();
    
    // add frequencies to map
    for(const num of nums){
        if(!map.has(num))
            map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }
    
    // fill max heap
    for(const [num, frequency] of map)
        heap.enqueue([num, frequency]);

    const ans = [];
    for(let i = 0 ; i < k ; i++){
        const [num] = heap.dequeue().element;
        ans.push(num);
    }
    return ans;
};

function comparator([, frequency]: [number, number]){
    return frequency
}