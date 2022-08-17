class Stack {
    constructor(){
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }

    delete(){
        delete this.items[this.top]
        this.top -= 1;
    }
}

describe('Test my stack', () => { //função describe é como uma test suite. callback function.
    //test('')
    let stack

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => { //it = individual test = test
        expect(stack.top).toBe(-1); //toBe é um tipo de matcher
        expect(stack.items).toEqual({}); //nesse caso usar o matcher toEqual, toBe faz referência de igualdade entre dois objetos e nesse caso há a comparação de dois objetos diferentes.
    }) 

    it('can push to the top', () => {
        stack.push('A');

        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('A');
    })

    it('can pop off', () => {
        stack.push('A');
        stack.delete();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    })

    it('can push multiple', () => {
        stack.push('A');
        stack.push('B');
        stack.push('C');

        expect(stack.top).toBe(2);
        expect(stack.peek).toBe('C');
    })

    it('can pop off last of multiple', () => {
        stack.push('A');
        stack.push('B');
        stack.push('C');
        stack.delete();

        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('B');
    })

}) 