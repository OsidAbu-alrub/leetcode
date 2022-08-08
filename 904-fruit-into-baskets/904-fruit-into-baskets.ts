function totalFruit(fruits: number[]): number {
    const NUMBER_OF_BASKETS = 2;
    const basket = {};
    let ans = -Infinity;
    for(let windowStart = 0, windowEnd = 0 ; windowEnd < fruits.length ; windowEnd++){
        const fruit = fruits[windowEnd];
        if(!(fruit in basket))
            basket[fruit] = 0;
        basket[fruit] += 1;
        while(Object.keys(basket).length > NUMBER_OF_BASKETS)
        {
            basket[fruits[windowStart]] -= 1;
            if(basket[fruits[windowStart]] === 0)
                delete basket[fruits[windowStart]];
            windowStart++;
        }
        ans = Math.max(ans, windowEnd - windowStart + 1);
    }
    return ans;
};