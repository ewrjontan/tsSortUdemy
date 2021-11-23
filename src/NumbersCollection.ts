import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    /*data: number[];

    constructor(data: number[]){
        this.data = data;
    }*/

    //equivelant to the above
    //constructor(public data: number[]){}


    constructor(public data: number[]){
        super();
    }

    //can reference length without using the standard method
    //dont need parenthesis when calling ie can use collection.length;
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex:number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}

