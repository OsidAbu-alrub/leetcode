function twoSum(numbers: number[], target: number): number[] {
    for(let i = 0 ; i < numbers.length - 1 ; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){
            if(target - numbers[i] === numbers[j])
                return [i+1,j+1];
        }
    }
};