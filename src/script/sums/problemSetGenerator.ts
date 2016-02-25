/// <reference path="additionSum.ts" />
/// <reference path="operator.ts" />

module Sums {
    export class ProblemSetGenerator {
        getSums(numberOfSums: number, type: Operator, maxDigits: number, allowCarrying: boolean)  {
            var sums : Sum[] = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                sums.push(new AdditionSum(maxDigits, allowCarrying));
            }
            
            return sums;
        }
        
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
