/// <reference path="sum.ts" />
module Sums {
    export class AdditionSum extends Sum {
        
        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            super('+');
            
            if (allowCarrying) {
                this.generateRandomOperand(this.operand1, operand1Length);
                this.generateRandomOperand(this.operand2, operand2Length);
            } else {
                this.appendRandomDigitsBetween(0, 9, this.operand1, operand1Length - 1);
                var upperlimitOnLeadingDigit = operand1Length === operand2Length ? 8 : 9;
                this.appendRandomDigitBetween(1, upperlimitOnLeadingDigit, this.operand1);
                
                for (var i = 0; i < operand2Length - 1; i++) {
                    this.appendRandomDigitBetween(0, 9 - this.getDigitOrZero(this.operand1, i), this.operand2);
                }
                this.appendRandomDigitBetween(1, 9 - this.getDigitOrZero(this.operand1, operand2Length - 1), this.operand2);
            }
        }
        
        private getDigitOrZero(array: number[], position: number) : number {
            return array.length <= position ? 0 : array[position];
        }
    }
}