/// <reference path="../typeDefinitions/jasmine.d.ts" />
/// <reference path="../../../src/script/Sums/problemSetGenerator.ts" />
/// <reference path="../../../src/script/Sums/operator.ts" />

describe("problemSetGenerator", function() {
    it("generates the correct number of random sums", function() {
        const underTest = new Sums.ProblemSetGenerator();

        const sums = underTest.getRandomSums(2, Sums.Operator.Add, 1, 1, false);

        expect(sums.length).toEqual(2);
    });

    it("generates random sums with the correct number of digits", function() {
        const underTest = new Sums.ProblemSetGenerator();

        const sum = underTest.getRandomSums(1, Sums.Operator.Add, 5, 7, false)[0];

        expect(sum.operand1.length).toEqual(5);
        expect(sum.operand2.length).toEqual(7);
    });

    it("generates random addition sums", function() {
        const underTest = new Sums.ProblemSetGenerator();

        const sum = underTest.getRandomSums(1, Sums.Operator.Add, 1, 1, false)[0];

        expect(sum.operator).toEqual(Sums.Operator.Add);
    });

    it("generates random subtraction sums", function() {
        const underTest = new Sums.ProblemSetGenerator();

        const sum = underTest.getRandomSums(1, Sums.Operator.Subtract, 1, 1, false)[0];

        expect(sum.operator).toEqual(Sums.Operator.Subtract);
    });

    it("generates random sums without carrying", function() {
        const underTest = new Sums.ProblemSetGenerator();

        // Digits are random. Assume that 100 is enough to get an example failure
        const sum = underTest.getRandomSums(1, Sums.Operator.Add, 100, 100, false)[0];

        for (let i = 0; i < 100; i++) {
            expect(sum.operand1[i] + sum.operand2[i]).toBeLessThan(10);
        }
    });

    it("generates random sums with carrying", function() {
        const underTest = new Sums.ProblemSetGenerator();

        // Digits are random. Assume that 100 is enough to get an example pass
        const sum = underTest.getRandomSums(1, Sums.Operator.Add, 100, 100, true)[0];

        let passCaseFound = false;
        for (let i = 0; i < 100; i++) {
            if (sum.operand1[i] + sum.operand2[i] >= 10) {
                passCaseFound = true;
                break;
            }
        }
        expect(passCaseFound).toBeTruthy();
    });

    describe("generating 100 addition problems", function() {
        it("generates 100 sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitAdditions();

            expect(sums.length).toBe(100);
        });

        it("generates all the sums", function() {
            const foundSums: boolean[][] = [[], [], [], [], [], [], [], [], [], []];
            const underTest = new Sums.ProblemSetGenerator();

            const sums = underTest.getSingleDigitAdditions();

            for (const sum of sums) {
                foundSums[sum.operand1[0]][sum.operand2[0]] = true;
            }

            let allSumsFound = true;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    allSumsFound = allSumsFound && foundSums[i][j];
                }
            }
            expect(allSumsFound).toBeTruthy();
        });

        it("shuffles the sums", function() {
            const underTest = new Sums.ProblemSetGenerator();

            // Shuffling is random so do this test up to two times.
            let passCaseFound = false;
            for (let i = 0; i < 2; i++) {
                const sums = underTest.getSingleDigitAdditions();

                // Check that 0 + 0 isn't the first or last sum
                if ((sums[0].operand1[0] !== 0 || sums[0].operand2[0] !== 0) &&
                    (sums[99].operand1[0] !== 0 || sums[99].operand2[0] !== 0)) {
                    passCaseFound = true;
                    break;
                }
            }

            expect(passCaseFound).toBeTruthy();
        });
    });
});