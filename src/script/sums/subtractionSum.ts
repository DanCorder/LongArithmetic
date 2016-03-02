/// <reference path="sum.ts" />
module Sums {
    export class SubtractionSum extends Sum {
        
        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            super('-');
            
            this.generateOperand(this.operand1, operand1Length);
            
            if (allowCarrying) {
                this.generateOperand(this.operand2, operand2Length);
            } else {
                for (var i = 0; i < operand2Length; i++) {
                    var operand1Digit = this.operand1.length <= i ? 0 : this.operand1[i];
                    this.operand2.push(this.getRandomIntBetween(0, operand1Digit));
                }
            }
        }
    }
}