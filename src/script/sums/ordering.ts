namespace Sums {
    export enum Ordering {
        AscendingOperand1,
        DescendingOperand1,
        Random
    }

    export function orderingToText(ordering: Ordering): string {
        switch (ordering) {
            case Ordering.AscendingOperand1:
                return "ascending";
            case Ordering.DescendingOperand1:
                return "descending";
            case Ordering.Random:
                return "random";
            default:
                throw "Unrecognised ordering: " + ordering;
        }
    }

    export function orderSums(sums: Sum[], ordering: Ordering) {
        switch (ordering) {
            case Ordering.AscendingOperand1:
                sums.sort(compareAscendingOperand1);
                break;
            case Ordering.DescendingOperand1:
                sums.sort(compareDescendingOperand1);
                break;
            case Ordering.Random:
                sums.shuffle();
                break;
            default:
                throw "Unrecognised ordering: " + ordering;
        }
    }

    // Return negative if sum1 should come before sum2, positive if sum2 should come before sum1, and 0 if they're equal.
    function compareAscendingOperand1(sum1: Sum, sum2: Sum): number {
        const operand1Comparison = compareAscendingOperands(sum1.operand1, sum2.operand1);

        return operand1Comparison === 0 ? compareAscendingOperands(sum1.operand2, sum2.operand2) : operand1Comparison;
    }

    // Return negative if sum2 should come before sum1, positive if sum1 should come before sum2, and 0 if they're equal.
    function compareDescendingOperand1(sum1: Sum, sum2: Sum): number {
        const operand1Comparison = -1 * compareAscendingOperands(sum1.operand1, sum2.operand1);

        return operand1Comparison === 0 ? (-1 * compareAscendingOperands(sum1.operand2, sum2.operand2)) : operand1Comparison;
    }

    // Return negative if operand1 should come before operand2, positive if operand2 should come before operand1, and 0 if they're equal.
    function compareAscendingOperands(operand1: number[], operand2: number[]): number {
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