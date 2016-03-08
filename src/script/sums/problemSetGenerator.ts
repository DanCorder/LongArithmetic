/// <reference path="additionSum.ts" />
/// <reference path="subtractionSum.ts" />
/// <reference path="operator.ts" />

namespace Sums {
    export class ProblemSetGenerator {
        getSums(numberOfSums: number,
                type: Operator,
                topOperandDigits: number,
                bottomOperandDigits: number,
                allowCarrying: boolean): Sum[] {
            const sums: Sum[] = [];

            for (let i = 0; i < numberOfSums; i++) {
                switch (type) {
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
    }
}
