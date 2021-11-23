"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
//For number collection
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
//used for new abstract sorter class
//numbersCollection.sort();
//console.log(numbersCollection.data);
//used with previous sorter class
/*const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);*/
//for charactersCollection
/*
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);*/
//used with abstract sorter class
//const charactersCollection = new CharactersCollection('Xaayb');
//charactersCollection.sort();
//console.log(charactersCollection.data);
//for linked lists
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
//used with previous code prior to abstract sorter class
/*const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();*/
//used with abstract sorterclass
linkedList.sort();
linkedList.print();
//Initial code
//not ideal code because always have to add new instances and nested if statements if type is added to constructor collection
class SorterOld {
    /*collection: number[];

    constructor(collection: number[]){
        this.collection = collection;
    }*/
    //this is equivelant to the above ^^^
    constructor(collection) {
        this.collection = collection;
    }
    //when adding string, remember that union (pipe) operator only allows for objects that share a common property
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //All of this only works if collection is an array of numbers
                //If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //Only going to work if collection is a string
                //if collection is a string, do this logic
                //~ logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
//part of initial code
/*const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();
console.log(sorter.collection);*/ 
