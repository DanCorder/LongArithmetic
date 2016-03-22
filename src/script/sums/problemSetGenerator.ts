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

        getSingleDigitAdditions(ordering: Ordering): Sum[] {
            const sums: Sum[] = [];

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const operand1 = new Operand();
                    operand1.push(i);
                    const operand2 = new Operand();
                    operand2.push(j);
                    sums.push(new Sum(Operator.Add, operand1, operand2));
                }
            }

            orderSums(sums, ordering);

            return sums;
        }
    }
}
