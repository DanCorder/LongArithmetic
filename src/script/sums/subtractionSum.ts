/// <reference path="sum.ts" />
module Sums {
    export class SubtractionSum extends Sum {
        
        constructor(maxDigits: number, allowCarrying: boolean) {
            super('-');
            
            for (var i = 0; i < maxDigits; i++) {
                var digit1 : number = this.getRandomIntBetween(0, 9);
                
                var upperBoundForDigit2 = allowCarrying ? 9 : digit1
                var digit2: number = this.getRandomIntBetween(0, upperBoundForDigit2);
                
                this.operand1.push(digit1);
                this.operand2.push(digit2);
            }
        }
    }
}