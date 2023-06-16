// class fpr the stack operation
export class Stack<Type> {

    // input to hold the data
    private readonly input: Type[];
    constructor() {
        this.input = new Array<Type>();
    }

    // push the elements to the top of the stack every time
    public push = (element: Type): boolean => {
        return !!this.input.push(element);
    }

    // pop the latest element every time by getting the latest index
    public pop = (): number => {
        const latestIndex: number = this.input.length - 1;
        this.input.splice(latestIndex, 1);
        return latestIndex;
    }

    // display the current stack elements
    public show = (): void => {
        console.info(this.input);
    }

    // display the current stack size
    public length = (): number => {
        return this.input.length;
    }

}