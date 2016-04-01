/// <reference path="../typings/main.d.ts" />
/// <reference path="../../../src/script/Sums/problemSetGenerator.ts" />
/// <reference path="../../../src/script/Sums/operator.ts" />
/// <reference path="../../../src/script/Sums/ordering.ts" />

describe("problemSetGenerator", function() {
    describe("random sums", function() {
        it("generates the correct number of sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getRandomSums(2, Sums.Operator.Add, 1, 1, false);

            expect(sums.length).toEqual(2);
        });

        it("generates sums with the correct number of digits", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sum = underTest.getRandomSums(1, Sums.Operator.Add, 5, 7, false)[0];

            expect(sum.operand1.length).toEqual(5);
            expect(sum.operand2.length).toEqual(7);
        });

        it("generates addition sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sum = underTest.getRandomSums(1, Sums.Operator.Add, 1, 1, false)[0];

            expect(sum.operator).toEqual(Sums.Operator.Add);
        });

        it("generates subtraction sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sum = underTest.getRandomSums(1, Sums.Operator.Subtract, 1, 1, false)[0];

            expect(sum.operator).toEqual(Sums.Operator.Subtract);
        });

        it("generates sums without carrying", function() {
            const underTest = new Sums.ProblemSetGenerator();

            // Digits are random. Assume that 100 is enough to get an example failure
            const sum = underTest.getRandomSums(1, Sums.Operator.Add, 100, 100, false)[0];

            for (let i = 0; i < 100; i++) {
                expect(sum.operand1.getDigitAt(i) + sum.operand2.getDigitAt(i)).toBeLessThan(10);
            }
        });

        it("generates sums with carrying", function() {
            const underTest = new Sums.ProblemSetGenerator();

            // Digits are random. Assume that 100 is enough to get an example pass
            const sum = underTest.getRandomSums(1, Sums.Operator.Add, 100, 100, true)[0];

            let passCaseFound = false;
            for (let i = 0; i < 100; i++) {
                if (sum.operand1.getDigitAt(i) + sum.operand2.getDigitAt(i) >= 10) {
                    passCaseFound = true;
                    break;
                }
            }
            expect(passCaseFound).toBeTruthy();
        });
    });

    describe("generating single digit problems", function() {
        it("generates single digit sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.AscendingOperand1);

            for (const sum of sums) {
                expect(sum.operand1.length).toBe(1);
                expect(sum.operand2.length).toBe(1);
            }
        });

        it("generates 100 sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.AscendingOperand1);

            expect(sums.length).toBe(100);
        });

        it("generates all possible sums", function() {
            const foundSums: boolean[][] = [[], [], [], [], [], [], [], [], [], []];
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.AscendingOperand1);

            for (const sum of sums) {
                foundSums[sum.operand1.getDigitAt(0)][sum.operand2.getDigitAt(0)] = true;
            }

            let allSumsFound = true;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    allSumsFound = allSumsFound && foundSums[i][j];
                }
            }
            expect(allSumsFound).toBeTruthy();
        });

        it("generates sums in ascending order", function() {
            const underTest = new Sums.ProblemSetGenerator();
            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.AscendingOperand1);

            let expectedOperand1: number = 0;
            let expectedOperand2: number = 0;

            for (const sum of sums) {
                expect(sum.operand1.getDigitAt(0)).toBe(expectedOperand1);
                expect(sum.operand2.getDigitAt(0)).toBe(expectedOperand2);

                expectedOperand2++;
                if (expectedOperand2 > 9) {
                    expectedOperand2 = 0;
                    expectedOperand1++;
                }
            }
        });

        it("generates sums in descending order", function() {
            const underTest = new Sums.ProblemSetGenerator();
            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.DescendingOperand1);

            let expectedOperand1: number = 9;
            let expectedOperand2: number = 9;

            for (const sum of sums) {
                expect(sum.operand1.getDigitAt(0)).toBe(expectedOperand1);
                expect(sum.operand2.getDigitAt(0)).toBe(expectedOperand2);

                expectedOperand2--;
                if (expectedOperand2 < 0) {
                    expectedOperand2 = 9;
                    expectedOperand1--;
                }
            }
        });

        it("shuffles the sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            // Shuffling is random so do this test up to two times.
            let passCaseFound = false;
            for (let i = 0; i < 2; i++) {
                const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.Random);

                // Check that 0 + 0 isn't the first or last sum
                if ((sums[0].operand1.getDigitAt(0) !== 0 || sums[0].operand2.getDigitAt(0) !== 0) &&
                    (sums[99].operand1.getDigitAt(0) !== 0 || sums[99].operand2.getDigitAt(0) !== 0)) {
                    passCaseFound = true;
                    break;
                }
            }

            expect(passCaseFound).toBeTruthy();
        });

        it("generates addition sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitSums(Sums.Operator.Add, Sums.Ordering.AscendingOperand1);

            expect(sums.every(
                function(value: Sums.Sum): boolean {
                    return value.operator === Sums.Operator.Add; }
                )).toBeTruthy();
        });

        it("generates subtraction sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitSums(Sums.Operator.Subtract, Sums.Ordering.AscendingOperand1);

            expect(sums.every(
                function(value: Sums.Sum): boolean {
                    return value.operator === Sums.Operator.Subtract; }
                )).toBeTruthy();
        });
    });
});