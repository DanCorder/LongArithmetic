/// <reference path="sum.ts" />
/// <reference path="operator.ts" />

module Sums {
    export class ProblemSetGenerator {
        getSums(numberOfSums: number, type: Operator, maxDigits: number, allowCarrying: boolean)  {
            var sums : Sum[] = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                sums.push(this.getSum(maxDigits, allowCarrying));
            }
            
            return sums;
        }
    
        private getSum(maxDigits: number, allowCarrying: boolean) : Sum {
            var operand1: number[] = [];
            var operand2: number[] = [];
            
            for (var i = 0; i < maxDigits; i++) {
                var digit1: number = this.getRandomIntBetween(0, 9);
                
                var upperBoundForDigit2 = allowCarrying ? 9 : 9-digit1
                var digit2: number = this.getRandomIntBetween(0, upperBoundForDigit2);
                
                operand1.push(digit1);
                operand2.push(digit2);
            }
            
            return new Sum(operand1, operand2, '+');
        }
        
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
