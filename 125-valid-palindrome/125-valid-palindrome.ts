function isPalindrome(s: string): boolean {
    const alphabeticCharacters = [...s]
                                    .filter(symbol => symbol.trim() && (isAlphabetic(symbol) || isNumber(symbol)))
                                    .map(char => char.toLowerCase())
    for(let i = 0 ; i < alphabeticCharacters.length/2 ; i++){
        if(alphabeticCharacters[i] !== alphabeticCharacters[alphabeticCharacters.length - 1 - i])
            return false;
    }
    return true;
};

function isAlphabetic(char:string){
    return char.toUpperCase() !== char.toLowerCase();
}

function isNumber(char:string){
    return !isNaN(+char);
}