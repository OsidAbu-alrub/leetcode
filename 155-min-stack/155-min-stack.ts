class MinStack {
    private list:Array<number>;
    constructor() {
        this.list = new Array<number>();
    }

    push(val: number): void {
        this.list.push(val);
    }

    pop(): void {
        this.list.pop();
    }

    top(): number {
        return this.list[this.list.length -1];
    }

    getMin(): number {
        let min = this.list[0];
        for(let i = 1 ; i < this.list.length ; i++)
            if(this.list[i] < min) min = this.list[i]
        return min;
    }
}