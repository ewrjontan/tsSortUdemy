"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    /*data: number[];

    constructor(data: number[]){
        this.data = data;
    }*/
    //equivelant to the above
    //constructor(public data: number[]){}
    constructor(data) {
        super();
        this.data = data;
    }
    //can reference length without using the standard method
    //dont need parenthesis when calling ie can use collection.length;
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
