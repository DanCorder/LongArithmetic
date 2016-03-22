namespace Sums {
    export class Operand {
        private numberArray: number[] = [];

        push(digit: number) {
            this.numberArray.push(digit);
        }

        unshift(digit: number) {
            this.numberArray.unshift(digit);
        }

        getDigitAt(index: number): number {
            return this.numberArray[index];
        }

        setDigitAt(index: number, digit: number) {
            this.numberArray[index] = digit;
        }

        toString(): string {
            let stringValue = "";

            for (let digit of this.numberArray) {
                stringValue = digit.toString() + stringValue;
            }

            return stringValue;
        }

        get length(): number {
            return this.numberArray.length;
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