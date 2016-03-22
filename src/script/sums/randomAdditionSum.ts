/// <reference path="randomSum.ts" />
/// <reference path="../utils/random.ts" />

namespace Sums {
    export class RandomAdditionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            const operand1 = RandomSum.generateOperand(operand1Length);
            let operand2 = new Operand();

            if (allowCarrying) {
                operand2 = RandomSum.generateOperand(operand2Length);
            } else {
                // The leading digit of an operand can't be 0, so make sure the digit in operand1
                // that matches the leading digit of operand2 isn't 9.
                if (operand1Length >= operand2Length) {
                    const lowerLimit = operand1Length === operand2Length ? 1 : 0;
                    operand1.setDigitAt(operand2Length - 1, Utils.Random.getIntBetween(lowerLimit, 8));
                }

                for (let i = 0; i < operand2Length - 1; i++) {
                    RandomSum.appendDigitBetween(0, 9 - RandomAdditionSum.getDigitOrZero(operand1, i), operand2);
                }
                RandomSum.appendDigitBetween(1, 9 - RandomAdditionSum.getDigitOrZero(operand1, operand2Length - 1), operand2);
            }

            super(Operator.Add, operand1, operand2);
        }

        private static getDigitOrZero(operand: Operand, position: number): number {
            return operand.length <= position ? 0 : operand.getDigitAt(position);
        }
    }
}