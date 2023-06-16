export class Stack<Type> {

    private readonly input: Type[];
    constructor(size?: Type) {
        size? this.input = new Array<Type>(size) : this.input = new Array<Type>();
    }

    public push = (element: Type): boolean => {
        return !!this.input.push(element);
    }

    public pop = (): number => {
        const latestIndex: number = this.input.length - 1;
        this.input.splice(latestIndex, 1);
        return latestIndex;
    }

    public show = (): void => {
        console.info(this.input);
    }

    public length = (): number => {
        return this.input.length;
    }

}