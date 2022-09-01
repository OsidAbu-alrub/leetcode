class MedianFinder {
  
  // we only care about middle element
  // so we use max heap to keep all elements that are less than middle
  // and we use min heap to keep all elements that are greater than middle
  // note that peek of max heap and min heap in this case can be used to calculate
  // our median
  minHeap;
  maxHeap;
  constructor() {
    this.minHeap = new MinPriorityQueue({ priority: this.comparator }); 
    this.maxHeap = new MaxPriorityQueue({ priority: this.comparator }); 
  }

  addNum(num: number): void {
    const maxHeap = this.maxHeap;
    const minHeap = this.minHeap;
    
    if(maxHeap.isEmpty() || maxHeap.front().element >= num)
      maxHeap.enqueue(num);
    else
      minHeap.enqueue(num);
    
    // our case must always be 
    // either max heap has one more element than min heap
    // min heap and max heap have same number of elements
    if(maxHeap.size() > minHeap.size() + 1)
      minHeap.enqueue(maxHeap.dequeue().element);
    else if(maxHeap.size() < minHeap.size())
      maxHeap.enqueue(minHeap.dequeue().element);
  }

  findMedian(): number {
    const maxHeap = this.maxHeap;
    const minHeap = this.minHeap;
    
    if((minHeap.size() + maxHeap.size()) % 2 === 0) return Number(((minHeap.front().element + maxHeap.front().element) / 2).toFixed(5));
    
    // because max heap will always have one more element (two cases above)
    return maxHeap.front().element
  }

  comparator(value: number):number {
    return value;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */