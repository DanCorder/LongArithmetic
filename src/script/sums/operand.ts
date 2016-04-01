/// <reference path="../typings/browser.d.ts" />
/// <reference path="../../../node_modules/big-integer/BigInteger.js" />

namespace Sums {
    export class Operand {
        private numberArray: number[] = [];
        isNegative: boolean = false;

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
            if (index >= this.numberArray.length) {
                return 0;
            }
            return this.numberArray[index];
        }

        setDigitAt(index: number, digit: number) {
            this.numberArray[index] = digit;
        }

        doArithmetic(operator: Operator, other: Operand): Operand {
            const value = bigInt(this.toString());
            const otherValue = bigInt(other.toString());

            let resultValue: BigInteger;

            switch (operator) {
                case Operator.Add:
                    resultValue = value.add(otherValue);
                    break;
                case Operator.Subtract:
                    resultValue = value.subtract(otherValue);
                    break;
            }

            const result = new Operand();

            if (resultValue.isNegative()) {
                result.isNegative = true;
                resultValue = resultValue.multiply(-1);
            }

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

            return (this.isNegative ? "-" : "") + stringValue;
        }

        // Return negative if this Operand is less than other, positive if other is less than this Operand, and 0 if they're equal.
        compare(other: Operand): number {
            const value = bigInt(this.toString());
            const otherValue = bigInt(other.toString());

            return value.compare(otherValue);
        }
    }
}