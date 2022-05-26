function removeOuterParentheses(s: string): string {
    let opened = 0;
    let stack = [];
    [...s].forEach(parenthesis =>{
        if(parenthesis === "(" && opened++ > 0) stack.push(parenthesis);
        if(parenthesis === ")" && opened-- > 1) stack.push(parenthesis);
    })
    return stack.join("");
};


