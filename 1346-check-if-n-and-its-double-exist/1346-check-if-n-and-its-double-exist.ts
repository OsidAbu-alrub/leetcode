function checkIfExist(arr: number[]): boolean {
    const map = new Map<number, number>();
    for(let i = 0 ; i < arr.length ; i++)
        map.set(arr[i], i);
    for(let i = 0 ; i < arr.length ; i++)
        if(map.has(arr[i] * 2) && map.get(arr[i] * 2) !== i) return true;
    return false;
};