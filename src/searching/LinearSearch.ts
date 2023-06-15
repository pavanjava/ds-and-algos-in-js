type inputParam = string | number | any

export class LinearSearch {

    private input: inputParam[];
    constructor(input: inputParam[]) {
        this.input = input;
    }

    // return index of the search element. index starts from 0
    public search = (param: inputParam): number => {
        return this.input.findIndex(value => value === param);
    }
}