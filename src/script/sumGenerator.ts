/// <reference path="sum.ts" />

module Sums {
    export class SumGenerator {
        getSums(numberOfSums)  {
            var sums : Sum[] = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                sums.push(this.getSum());
            }
            
            return sums;
        }
    
        private getSum() : Sum {
            var operand1 = '';
            var operand2 = '';
            
            for (var i = 0; i < 10; i++) {
                var digit1 = this.getRandomIntBetween(0, 9);
                var digit2 = this.getRandomIntBetween(0, 9-digit1);
                
                operand1 += digit1;
                operand2 += digit2;
            }
            
            return new Sum(operand1, operand2, '+');
        }
        
        private getRandomIntBetween(min : number, max : number) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
