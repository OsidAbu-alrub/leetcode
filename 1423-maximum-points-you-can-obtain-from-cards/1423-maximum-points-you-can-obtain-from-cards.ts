function maxScore(cardPoints: number[], k: number): number {
  let sum = 0;
  for(let i = cardPoints.length - k ; i < cardPoints.length ; i++)
    sum += cardPoints[i];
  let maxSum = sum;
  for(let i = 0, j = cardPoints.length - k ; j < cardPoints.length ; i++, j++){
    sum = sum - cardPoints[j] + cardPoints[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
