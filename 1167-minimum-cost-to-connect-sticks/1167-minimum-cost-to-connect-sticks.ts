function connectSticks(sticks: number[]): number {
  if(sticks.length === 1) return 0;
  const heap = new MinPriorityQueue({priority: (num) => num});
  for(const stick of sticks)
    heap.enqueue(stick);
  let ans = 0;
  while(heap.size() !== 1){
    const a = heap.dequeue().element;
    const b = heap.dequeue().element;
    ans += a + b;
    heap.enqueue(a + b);
  }
  return ans;
};