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

        // Gets all subtraction sums that might be needed when doing long subtraction with carrying:
        // 18-9, 17-9, 17-8, 16-9, 16-8, 16-7, etc down to 0-0
        getSingleColumnSubtractions(ordering: Ordering): Sum[] {
            const sums: Sum[] = [];

            for (let i = 18; i >= 0; i--) {
                const upperLimit = Math.min(9, i);
                const lowerLimit = Math.max(i - 9, 0);
                for (let j = upperLimit; j >= lowerLimit; j--) {
                    sums.push(new Sum(Operator.Subtract, new Operand(i), new Operand(j)));
                }
            }

            orderSums(sums, ordering);

            return sums;
        }

        getTimesTablesSums(numbersToMultiply: number[], maxMultiples: number, ordering: Ordering): Sum[] {
            const sums: Sum[] = [];

            for (let numberToMultiply of numbersToMultiply) {
                for (let i = 1; i <= maxMultiples; i++) {
                    sums.push(new Sum(Operator.Multiply, new Operand(i), new Operand(numberToMultiply)));
                }
            }

            orderSums(sums, ordering);

            return sums;
        }
    }
}
