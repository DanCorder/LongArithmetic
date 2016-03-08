/// <reference path="randomSum.ts" />

namespace Sums {
    export class RandomSubtractionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            super("-");

            // Even with carrying we don't want a negative answer
            operand2Length = Math.min(operand1Length, operand2Length);

            this.generateOperand(this.operand1, operand1Length);

            if (allowCarrying) {
                if (operand1Length > operand2Length) {
                    this.generateOperand(this.operand2, operand2Length);
                } else {
                    this.generateOperandLessThan(this.operand1, this.operand2);
                }
            } else {
                // The first digit of operand2 can't be zero so make sure that matching digit of
                // operand1 isn't either.
                this.operand1[operand2Length - 1] = this.getIntBetween(1, 9);

                for (let i = 0; i < operand2Length - 1; i++) {
                    this.appendDigitBetween(0, this.operand1[i], this.operand2);
                }
                this.appendDigitBetween(1, this.operand1[operand2Length - 1], this.operand2);
            }
        }

        // Generate an operand with a lower value but the same length as reference
        private generateOperandLessThan(reference: number[], target: number[]) {
            let areEqual = true;
            for (let i = reference.length - 1; i >= 0; i--) {
                if (areEqual) {
                    // The first digit cannot be 0
                    const lowerLimit = i === reference.length - 1 ? 1 : 0;
                    const targetDigit = this.getIntBetween(lowerLimit, reference[i]);
                    target.unshift(targetDigit);
                    areEqual = reference[i] === targetDigit;
                } else {
                    target.unshift(this.getIntBetween(0, 9));
                }
            }
        }
    }
}