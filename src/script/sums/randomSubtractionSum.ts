/// <reference path="randomSum.ts" />
/// <reference path="../utils/random.ts" />

namespace Sums {
    export class RandomSubtractionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            const operand1 = RandomSum.generateOperand(operand1Length);
            let operand2 = new Operand();

            // Even with carrying we don't want a negative answer
            operand2Length = Math.min(operand1Length, operand2Length);

            if (allowCarrying) {
                if (operand1Length > operand2Length) {
                    operand2 = RandomSum.generateOperand(operand2Length);
                } else {
                    operand2 = RandomSubtractionSum.generateOperandLessThan(operand1);
                }
            } else {
                // The first digit of operand2 can't be zero so make sure that matching digit of
                // operand1 isn't either.
                operand1.setDigitAt(operand2Length - 1, Utils.Random.getIntBetween(1, 9));

                for (let i = 0; i < operand2Length - 1; i++) {
                    RandomSum.appendDigitBetween(0, operand1.getDigitAt(i), operand2);
                }
                RandomSum.appendDigitBetween(1, operand1.getDigitAt(operand2Length - 1), operand2);
            }

            super(Operator.Subtract, operand1, operand2);
        }

        // Generate an operand with a lower value but the same length as reference
        private static generateOperandLessThan(reference: Operand): Operand {
            const target = new Operand();
            let areEqual = true;
            for (let i = reference.length - 1; i >= 0; i--) {
                if (areEqual) {
                    // The first digit cannot be 0
                    const lowerLimit = i === reference.length - 1 ? 1 : 0;
                    const targetDigit = Utils.Random.getIntBetween(lowerLimit, reference.getDigitAt(i));
                    target.appendDigit(targetDigit);
                    areEqual = reference.getDigitAt(i) === targetDigit;
                } else {
                    target.appendDigit(Utils.Random.getIntBetween(0, 9));
                }
            }

            return target;
        }
    }
}