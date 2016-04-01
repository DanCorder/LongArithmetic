/// <reference path="randomAdditionSum.ts" />
/// <reference path="randomSubtractionSum.ts" />
/// <reference path="operator.ts" />
/// <reference path="ordering.ts" />
/// <reference path="../utils/arrayExtensions.ts" />

namespace Sums {
    export class ProblemSetGenerator {
        getRandomSums(numberOfSums: number,
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

        getSingleDigitSums(type: Operator, ordering: Ordering): Sum[] {
            const sums: Sum[] = [];

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    sums.push(new Sum(type, new Operand(i), new Operand(j)));
                }
            }

            orderSums(sums, ordering);

            return sums;
        }
    }
}
