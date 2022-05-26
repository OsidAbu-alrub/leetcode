function backspaceCompare(s: string, t: string): boolean {
    const stackS = [];    
    const stackT = [];
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] !== "#") stackS.push(s[i]);
        else if(stackS.length !== 0){
            stackS.pop();
        }
    }
    
    for(let i = 0 ; i < t.length ; i++){
        if(t[i] !== "#") stackT.push(t[i]);
        else if(stackT.length !== 0){
            stackT.pop();
        }
    }
    
    return stackS.toString() === stackT.toString();
};