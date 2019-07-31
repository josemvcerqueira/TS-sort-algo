import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([30, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Jose");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
