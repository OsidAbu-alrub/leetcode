function hasAllCodes(s: string, k: number): boolean {
    const bits = new Set();
    for(let i = 0 ; i <= s.length - k ; i++){
        bits.add(s.substr(i,k));
    }
    return bits.size === 1 << k
};

