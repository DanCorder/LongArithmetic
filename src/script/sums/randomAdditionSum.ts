/// <reference path="randomSum.ts" />

namespace Sums {
    export class RandomAdditionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            super("+");

            this.generateOperand(this.operand1, operand1Length);

            if (allowCarrying) {
                this.generateOperand(this.operand2, operand2Length);
            } else {
                // The leading digit of an operand can't be 0, so make sure the digit in operand1
                // that matches the leading digit of operand2 isn't 9.
                if (operand1Length >= operand2Length) {
                    const lowerLimit = operand1Length === operand2Length ? 1 : 0;
                    this.operand1[operand2Length - 1] = this.getIntBetween(lowerLimit, 8);
                }

                for (let i = 0; i < operand2Length - 1; i++) {
                    this.appendDigitBetween(0, 9 - this.getDigitOrZero(this.operand1, i), this.operand2);
                }
                this.appendDigitBetween(1, 9 - this.getDigitOrZero(this.operand1, operand2Length - 1), this.operand2);
            }
        }

        private getDigitOrZero(array: number[], position: number): number {
            return array.length <= position ? 0 : array[position];
        }
    }
}