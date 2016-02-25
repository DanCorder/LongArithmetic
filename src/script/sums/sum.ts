module Sums {
    export abstract class Sum {
        operand1: number[];
        operand2: number[];
        
        constructor(public operator: string) {}
        
        protected getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}