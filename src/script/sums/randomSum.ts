/// <reference path="sum.ts" />

namespace Sums {
    export abstract class RandomSum extends Sum {
        constructor(operator: Operator, operand1: number[], operand2: number[]) {
            super(operator, operand1, operand2);
        }

        protected static appendDigitBetween(lowerBound: number, upperBound: number, arrayToFill: number[]) {
            this.appendDigitsBetween(lowerBound, upperBound, arrayToFill, 1);
        }

        protected static appendDigitsBetween(lowerBound: number, upperBound: number, arrayToFill: number[], numberOfDigits: number) {
            for (let i = 0; i < numberOfDigits; i++) {
                arrayToFill.push(this.getIntBetween(lowerBound, upperBound));
            }
        }

        protected static generateOperand(arrayToFill: number[], numberOfDigits: number) {
            this.appendDigitsBetween(0, 9, arrayToFill, numberOfDigits - 1);
            this.appendDigitBetween(1, 9, arrayToFill);
        }

        // Returns a random int betwween min and max inclusive.
        protected static getIntBetween(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}