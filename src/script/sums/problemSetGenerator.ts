/// <reference path="randomAdditionSum.ts" />
/// <reference path="randomSubtractionSum.ts" />
/// <reference path="operator.ts" />

namespace Sums {
    export class ProblemSetGenerator {
        getSums(numberOfSums: number,
                type: Operator,
                topOperandDigits: number,
                bottomOperandDigits: number,
                allowCarrying: boolean): RandomSum[] {
            const sums: RandomSum[] = [];

            for (let i = 0; i < numberOfSums; i++) {
                switch (type) {
                    case Operator.Add:
                        sums.push(new RandomAdditionSum(topOperandDigits, bottomOperandDigits, allowCarrying));
                        break;
                    case Operator.Subtract:
                        sums.push(new RandomSubtractionSum(topOperandDigits, bottomOperandDigits, allowCarrying));
                        break;
                }

            }

            return sums;
        }
    }
}
