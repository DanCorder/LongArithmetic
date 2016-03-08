/// <reference path="randomSum.ts" />

namespace Sums {
    export class RandomAdditionSum extends RandomSum {

        constructor(operand1Length: number, operand2Length: number, allowCarrying: boolean) {
            const operand1: number[] = [];
            const operand2: number[] = [];

            RandomSum.generateOperand(operand1, operand1Length);

            if (allowCarrying) {
                RandomSum.generateOperand(operand2, operand2Length);
            } else {
                // The leading digit of an operand can't be 0, so make sure the digit in operand1
                // that matches the leading digit of operand2 isn't 9.
                if (operand1Length >= operand2Length) {
                    const lowerLimit = operand1Length === operand2Length ? 1 : 0;
                    operand1[operand2Length - 1] = RandomSum.getIntBetween(lowerLimit, 8);
                }

                for (let i = 0; i < operand2Length - 1; i++) {
                    RandomSum.appendDigitBetween(0, 9 - RandomAdditionSum.getDigitOrZero(operand1, i), operand2);
                }
                RandomSum.appendDigitBetween(1, 9 - RandomAdditionSum.getDigitOrZero(operand1, operand2Length - 1), operand2);
            }

            super(Operator.Add, operand1, operand2);
        }

        private static getDigitOrZero(array: number[], position: number): number {
            return array.length <= position ? 0 : array[position];
        }
    }
}