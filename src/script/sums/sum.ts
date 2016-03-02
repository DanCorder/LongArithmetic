module Sums {
    export abstract class Sum {
        operand1: number[] = [];
        operand2: number[] = [];
        
        constructor(public operator: string) {}
        
        // Returns a random int betwween min and max inclusive.
        protected getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        protected generateOperand(arrayToFill: number[], numberOfDigits: number) {
            for (var i = 0; i < numberOfDigits; i++) {
                arrayToFill.push(this.getRandomIntBetween(0, 9));
            }
        }
    }
}