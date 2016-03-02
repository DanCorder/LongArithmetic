/// <reference path="additionSum.ts" />
/// <reference path="subtractionSum.ts" />
/// <reference path="operator.ts" />

module Sums {
    export class ProblemSetGenerator {
        getSums(numberOfSums: number,
                type: Operator,
                topOperandDigits: number,
                bottomOperandDigits: number,
                allowCarrying: boolean)
        {
            var sums : Sum[] = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                switch(type)
                {
                    case Operator.Add:
                        sums.push(new AdditionSum(topOperandDigits, bottomOperandDigits, allowCarrying));
                        break;
                    case Operator.Subtract:
                        sums.push(new SubtractionSum(topOperandDigits, bottomOperandDigits, allowCarrying));
                        break;
                }
                
            }
            
            return sums;
        }
        
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
