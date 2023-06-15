// uncomment the imports as required
// import {LinearSearch} from "./searching/LinearSearch";
import {BinarySearch} from "./searching/BinarySearch";

// input params for the search class
const input: number[] = [10,20,30,40,50];
const searchParam: number = 50;

// creating the object for LinearSearch
// const linearSearch: LinearSearch = new LinearSearch(input);
// invoking the search method with proper param.
// console.log(linearSearch.search(searchParam));


// creating the object for BinarySearch.
const binarySearch: BinarySearch<number> = new BinarySearch<number>(input);
// invoking the search method with proper param.
console.log(binarySearch.search(searchParam));



