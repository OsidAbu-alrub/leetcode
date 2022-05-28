function dailyTemperatures(temperatures: number[]): number[] {
    const daysStack:any[] = [];
    const answers:Array<number> = new Array(temperatures.length).fill(0);
    temperatures.forEach((temperature,idx) => {
        while(peek(daysStack) !== undefined  && peek(daysStack)[0] < temperature){
            const indexOfPreviousTemperature = daysStack.pop()[1]
            answers[indexOfPreviousTemperature] = idx - indexOfPreviousTemperature;
        }
        daysStack.push([temperature,idx])
    });
    
    return answers;
};
                   
function peek(stack){
    if (stack.length === 0) {
        return undefined;
      }
      return stack[stack.length - 1];
}
