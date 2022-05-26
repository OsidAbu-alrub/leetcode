function removeDuplicates(s: string): string {
    const stack = [];
    [...s].forEach(char => stack[stack.length - 1] && stack[stack.length - 1] === char ? stack.pop() : stack.push(char))
    return stack.join("");
};