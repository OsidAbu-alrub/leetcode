function nextGreatestLetter(letters: string[], target: string): string {
    return letters.find(letter => letter.charCodeAt(0) > target.charCodeAt(0)) ?? letters[0];
};