function maximumPopulation(logs: number[][]): number {
    const events = new Array<number>(100).fill(0);
    let population = 0;
    let year = 0;
    let accumulativeSum = 0;
    
    logs.forEach(([b, d]) =>{
        events[b - 1950]++;
        events[d - 1950]--;
    })
    events.forEach((event, index) => {
        accumulativeSum += event;
        if(accumulativeSum > population){
            population = accumulativeSum;
            year = 1950 + index;
        }
    })
    
    return year;
};