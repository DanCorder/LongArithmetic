/// <reference path="sum.ts" />
module Sums {
    export class SubtractionSum extends Sum {
        
        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            super('-');
            
            if (allowCarrying) {
                this.generateRandomOperand(this.operand1, operand1Length);
                this.generateRandomOperand(this.operand2, operand2Length);
            } else {
                // If we're not allowing carrying operand 2 can't larger than operand 1
                operand2Length = Math.min(operand1Length, operand2Length);

                this.appendRandomDigitsBetween(0, 9, this.operand1, operand2Length - 1);
                this.appendRandomDigitBetween(1, 9, this.operand1);
                
                if (operand1Length > operand2Length) {
                    this.appendRandomDigitsBetween(0, 9, this.operand1, operand1Length - operand2Length - 1);
                    this.appendRandomDigitBetween(1, 9, this.operand1);
                }
                
                for (var i = 0; i < operand2Length - 1; i++) {
                    var operand1Digit = this.operand1.length <= i ? 0 : this.operand1[i];
                    this.appendRandomDigitBetween(0, operand1Digit, this.operand2);
                }
                this.appendRandomDigitBetween(1, this.operand1[operand2Length - 1], this.operand2);
            }
        }
    }
}