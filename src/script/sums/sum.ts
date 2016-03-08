namespace Sums {
    export class Sum {
        // TODO: make readonly when new version of TypeScript is released
        symbol: string;

        constructor(public operator: Operator, public operand1: number[], public operand2: number[]) {
            this.symbol = Sums.operatorToSymbol(operator);
        }
    }
}