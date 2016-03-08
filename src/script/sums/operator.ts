namespace Sums {
    export enum Operator {
        Add,
        Subtract,
        Multiply,
        Divide
    }

    export function operatorToSymbol(operator: Operator): string {
        switch (operator) {
            case Operator.Add:
                return "+";
            case Operator.Subtract:
                return "-";
            case Operator.Multiply:
                return "x";
            case Operator.Divide:
                return "/";
            default:
                throw "Unrecognised operator: " + Operator;
        }
    }
}