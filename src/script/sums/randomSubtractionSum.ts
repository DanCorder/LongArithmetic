/// <reference path="randomSum.ts" />

namespace Sums {
    export class RandomSubtractionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            const operand1: number[] = [];
            const operand2: number[] = [];

            // Even with carrying we don't want a negative answer
            operand2Length = Math.min(operand1Length, operand2Length);

            RandomSum.generateOperand(operand1, operand1Length);

            if (allowCarrying) {
                if (operand1Length > operand2Length) {
                    RandomSum.generateOperand(operand2, operand2Length);
                } else {
                    RandomSubtractionSum.generateOperandLessThan(operand1, operand2);
                }
            } else {
                // The first digit of operand2 can't be zero so make sure that matching digit of
                // operand1 isn't either.
                operand1[operand2Length - 1] = RandomSum.getIntBetween(1, 9);

                for (let i = 0; i < operand2Length - 1; i++) {
                    RandomSum.appendDigitBetween(0, operand1[i], operand2);
                }
                RandomSum.appendDigitBetween(1, operand1[operand2Length - 1], operand2);
            }

            super(Operator.Subtract, operand1, operand2);
        }

        // Generate an operand with a lower value but the same length as reference
        private static generateOperandLessThan(reference: number[], target: number[]) {
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