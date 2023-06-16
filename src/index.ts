// uncomment the imports as required
// import {LinearSearch} from "./searching/LinearSearch";
// import {BinarySearch} from "./searching/BinarySearch";
import {Stack} from './stack/Stack';

// input params for the search class
const input: number[] = [10,20,30,40,50];
const searchParam: number = 50;

// creating the object for LinearSearch
// const linearSearch: LinearSearch = new LinearSearch(input);
// invoking the search method with proper param.
// console.log(linearSearch.search(searchParam));


// creating the object for BinarySearch.
// const binarySearch: BinarySearch<number> = new BinarySearch<number>(input);
// invoking the search method with proper param.
// console.log(binarySearch.search(searchParam));

// creating the object for Stack.
const stack: Stack<number> = new Stack<number>();
// Operations on Stack
stack.push(10);
stack.push(20);
stack.push(30);
stack.show();
stack.pop();
stack.show();
stack.push(50);
stack.show();
stack.pop();
stack.pop();
stack.show();
console.log(stack.length())

// creating the object for Stack.
const stack1: Stack<string> = new Stack<string>();
stack1.push('pavan');
stack1.push('arun');
stack1.show();
stack1.pop();
stack1.show();



