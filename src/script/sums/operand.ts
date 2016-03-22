/// <reference path="../typings/browser.d.ts" />
/// <reference path="../../../node_modules/big-integer/BigInteger.js" />

namespace Sums {
    export class Operand {
        private numberArray: number[] = [];

        constructor(digit: number = undefined) {
            if (digit !== undefined) {
                this.numberArray.push(digit);
            }
        }

        get length(): number {
            return this.numberArray.length;
        }

        prependDigit(digit: number) {
            this.numberArray.push(digit);
        }

        appendDigit(digit: number) {
            this.numberArray.unshift(digit);
        }

        getDigitAt(index: number): number {
            return this.numberArray[index];
        }

        setDigitAt(index: number, digit: number) {
            this.numberArray[index] = digit;
        }

        doArithmetic(operator: Operator, other: Operand): Operand {
            const value = bigInt(this.toString());
            const otherValue = bigInt(other.toString());

            let resultValue: BigInteger;

            switch(operator) {
                case Operator.Add:
                    resultValue = value.add(otherValue);
                    break;
                case Operator.Subtract:
                    resultValue = value.subtract(otherValue);
                    break;
            }

            const result = new Operand();

            for (let char of resultValue.toString()) {
                result.appendDigit(parseInt(char));
            }

            return result;
        }

        toString(): string {
            let stringValue = "";

            for (let digit of this.numberArray) {
                stringValue = digit.toString() + stringValue;
            }

            return stringValue;
        }

        // Return negative if this Operand is less than other, positive if other is less than this Operand, and 0 if they're equal.
        compare(other: Operand): number {
            const operand1 = this.numberArray;
            const operand2 = other.numberArray;

            if (operand1.length !== operand2.length) {
                return operand1.length - operand2.length;
            }

            for (let i = operand1.length - 1; i >= 0; i--) {
                if (operand1[i] !== operand2[i]) {
                    return operand1[i] - operand2[i];
                }
            }

            return 0;
        }
    }
}