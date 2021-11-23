import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//For number collection
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

//for charactersCollection
/*
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);*/

//for linked lists
/*const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();*/





//Initial code
//not ideal code because always have to add new instances and nested if statements if type is added to constructor collection
class SorterOld {
    /*collection: number[];

    constructor(collection: number[]){
        this.collection = collection;
    }*/

    //this is equivelant to the above ^^^
    constructor(public collection: number[] | string){}
    //when adding string, remember that union (pipe) operator only allows for objects that share a common property

    sort(): void {
        
        const { length } = this.collection;

        for (let i=0; i< length; i++){
            for (let j = 0; j < length - i - 1; j++){


                //All of this only works if collection is an array of numbers
                //If collection is an array of numbers
                
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]){
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = leftHand;   
                    }
                }

                //Only going to work if collection is a string
                //if collection is a string, do this logic
                //~ logic to compare and swap characters in a string
                if (typeof this.collection === 'string'){
                
                }
            }
        }

    }
}


//part of initial code
/*const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();
console.log(sorter.collection);*/