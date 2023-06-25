export class Queue<Type> {
    // input to hold the data
    private readonly input: Type[];

    constructor() {
        this.input = new Array<Type>();
    }

    // push and pop operations goes here.
    public push = (element: Type): void => {
        this.input.push(element);
    }

    public pop = (): Type | undefined => {
        if(this.input.length === 0){
            throw new Error("Unsupported Operation Error");
        }
        return this.input.shift();
    }

    // show function to show the current status of the array.
    public show = (): void => {
        console.log(this.input);
    }
}