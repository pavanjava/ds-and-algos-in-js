export class BinarySearch<Type> {

    private readonly input: Type[];
    constructor(input: Type[]) {
        this.input = input
    }

    private sort = () => {
        this.input.sort();
    }

    public search = (searchParam: Type): number => {
        // sort the array irrespective of the input sequence
        this.sort();
        let left: number = 0;
        let right: number = this.input.length - 1;

        while (left <= right){
            let middle: number = Math.floor((left + right) / 2);
            if(searchParam === this.input[middle]){
                return middle;
            }
            if(searchParam < this.input[middle]){
                right = middle - 1;
            }else {
                left = middle + 1
            }
        }
        return -1;
    }
}