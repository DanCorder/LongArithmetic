/// <reference path="sum.ts" />
/// <reference path="../utils/random.ts" />

namespace Sums {
    export abstract class RandomSum extends Sum {
        constructor(operator: Operator, operand1: Operand, operand2: Operand) {
            super(operator, operand1, operand2);
        }

        protected static prependDigitBetween(lowerBound: number, upperBound: number, operand: Operand) {
            this.prependDigitsBetween(lowerBound, upperBound, operand, 1);
        }

        protected static prependDigitsBetween(lowerBound: number, upperBound: number, operand: Operand, numberOfDigits: number) {
            for (let i = 0; i < numberOfDigits; i++) {
                operand.prependDigit(Utils.Random.getIntBetween(lowerBound, upperBound));
            }
        }

        protected static generateOperand(numberOfDigits: number): Operand {
            const operand = new Operand();
            this.prependDigitsBetween(0, 9, operand, numberOfDigits - 1);
            this.prependDigitBetween(1, 9, operand);
            return operand;
        }
    }
}