function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for(let right = 0, left = 0 ; right < prices.length ; right++){
    if(prices[left] < prices[right])
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    else 
      left = right;
  }
  return maxProfit;
};