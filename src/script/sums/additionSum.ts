/// <reference path="sum.ts" />
module Sums {
    export class AdditionSum extends Sum {
        
        constructor(maxDigits: number, allowCarrying: boolean) {
            super('+');

            this.operand1 = [];
            this.operand2 = [];
            
            for (var i = 0; i < maxDigits; i++) {
                var digit1: number = this.getRandomIntBetween(0, 9);
                
                var upperBoundForDigit2 = allowCarrying ? 9 : 9-digit1
                var digit2: number = this.getRandomIntBetween(0, upperBoundForDigit2);
                
                this.operand1.push(digit1);
                this.operand2.push(digit2);
            }
        }
    }
}