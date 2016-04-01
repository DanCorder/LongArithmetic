/// <reference path="operand.ts" />

namespace Sums {
    export class Sum {
        // TODO: make readonly when TypeScript 2.0 is released
        symbol: string;
        solution: Operand;

        constructor(public operator: Operator, public operand1: Operand, public operand2: Operand) {
            this.symbol = Sums.operatorToSymbol(operator);
            this.solution = operand1.doArithmetic(operator, operand2);
        }
    }
}