class MyQueue {
    private left;
    private right;
    constructor() {
        this.left = [];
        this.right = [];
    }

    push(x: number): void {
        this.left.push(x);
    }

    pop(): number {
        this.swap(this.left,this.right);
        const poppedValue = this.right.pop();
        this.swap(this.right,this.left);
        return poppedValue === undefined ? null : poppedValue;
    }

    peek(): number {
        const peekValue = this.left[0];
        return peekValue === undefined ? null : peekValue;
    }

    empty(): boolean {
        return this.left.length === 0;
    }
    
    private swap(swapFrom,swapTo):void{
        const length = swapFrom.length;
        for(let i = 0 ; i < length ; i++)
            swapTo.push(swapFrom.pop());
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */