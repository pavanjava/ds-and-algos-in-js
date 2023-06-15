import {LinearSearch} from "./searching/LinearSearch";

// input params for the search class
const input: number[] = [10,20,30,40,50];
const searchParam: number = 80;

// creating the object for LinearSearch
const linearSearch: LinearSearch = new LinearSearch(input);
// invoking the search method with proper param.
console.log(linearSearch.search(searchParam));
