namespace Sums {
    export enum Ordering {
        AscendingOperand1,
        DescendingOperand1,
        AscendingOperand2,
        DescendingOperand2,
        Random
    }

    export function orderingToText(ordering: Ordering): string {
        switch (ordering) {
            case Ordering.AscendingOperand1:
            case Ordering.AscendingOperand2:
                return "ascending";
            case Ordering.DescendingOperand1:
            case Ordering.DescendingOperand2:
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
            case Ordering.AscendingOperand2:
                sums.sort(compareAscendingOperand2);
                break;
            case Ordering.DescendingOperand2:
                sums.sort(compareDescendingOperand2);
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
        const operand1Comparison = sum1.operand1.compare(sum2.operand1);

        return operand1Comparison === 0 ? sum1.operand2.compare(sum2.operand2) : operand1Comparison;
    }

    // Return negative if sum2 should come before sum1, positive if sum1 should come before sum2, and 0 if they're equal.
    function compareDescendingOperand1(sum1: Sum, sum2: Sum): number {
        return compareAscendingOperand1(sum2, sum1);
    }

    // Return negative if sum1 should come before sum2, positive if sum2 should come before sum1, and 0 if they're equal.
    function compareAscendingOperand2(sum1: Sum, sum2: Sum): number {
        const operand2Comparison = sum1.operand2.compare(sum2.operand2);

        return operand2Comparison === 0 ? sum1.operand1.compare(sum2.operand1) : operand2Comparison;
    }

    // Return negative if sum2 should come before sum1, positive if sum1 should come before sum2, and 0 if they're equal.
    function compareDescendingOperand2(sum1: Sum, sum2: Sum): number {
        return compareAscendingOperand2(sum2, sum1);
    }
}