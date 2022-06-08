function removePalindromeSub(s: string): number {
    const length = s.length;
    return [...s].some((char,idx,s) => {
        return char !== s[length - 1 - idx];
    }) ? 2 : 1
};