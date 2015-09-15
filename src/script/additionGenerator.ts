/// <reference path="sum.ts" />

module Sums {
    export class AdditionGenerator {
        getSums(numberOfSums: number, maxDigits: number, allowCarrying: boolean)  {
            var sums : Sum[] = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                sums.push(this.getSum(maxDigits, allowCarrying));
            }
            
            return sums;
        }
    
        private getSum(maxDigits: number, allowCarrying: boolean) : Sum {
            var operand1: number = 0;
            var operand2: number = 0;
            
            for (var i = 0; i < maxDigits; i++) {
                var digit1: number = this.getRandomIntBetween(0, 9);
                
                var upperBoundForDigit2 = allowCarrying ? 9 : 9-digit1
                var digit2: number = this.getRandomIntBetween(0, upperBoundForDigit2);
                
                operand1 += (digit1 * Math.pow(10, i));
                operand2 += (digit2 * Math.pow(10, i));
            }
            
            return new Sum(operand1, operand2, '+');
        }
        
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
