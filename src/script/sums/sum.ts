module Sums {
    export abstract class Sum {
        operand1: number[] = [];
        operand2: number[] = [];
        
        constructor(public operator: string) {}
        
        protected appendDigitBetween(lowerBound: number, upperBound: number, arrayToFill: number[]) {
            this.appendDigitsBetween(lowerBound, upperBound, arrayToFill, 1);
        }
        
        protected appendDigitsBetween(lowerBound: number, upperBound: number, arrayToFill: number[], numberOfDigits: number) {
            for (var i = 0; i < numberOfDigits; i++) {
                arrayToFill.push(this.getRandomIntBetween(lowerBound, upperBound));
            }
        }
        
        protected generateOperand(arrayToFill: number[], numberOfDigits: number) {
            this.appendDigitsBetween(0, 9, arrayToFill, numberOfDigits - 1);
            this.appendDigitBetween(1, 9, arrayToFill);
        }
        
        // Returns a random int betwween min and max inclusive.
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}