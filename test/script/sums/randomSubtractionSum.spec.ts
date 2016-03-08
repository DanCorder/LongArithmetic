/// <reference path="../typeDefinitions/jasmine.d.ts" />
/// <reference path="../../../src/script/sums/randomSubtractionSum.ts" />
/// <reference path="../../../src/script/sums/operator.ts" />

describe("RandomSubtractionSum", function() {
    it("uses the correct operator", function() {
        const underTest = new Sums.RandomSubtractionSum(1, 1, true);

        const operator = underTest.operator;

        expect(operator).toEqual(Sums.Operator.Subtract);
    });

    it("uses the correct operator symbol", function() {
        const underTest = new Sums.RandomSubtractionSum(1, 1, true);

        const symbol = underTest.symbol;

        expect(symbol).toEqual("-");
    });

    it("generates the correct number of digits", function() {
        const underTest = new Sums.RandomSubtractionSum(5, 3, false);

        expect(underTest.operand1.length).toEqual(5);
        expect(underTest.operand2.length).toEqual(3);
    });

    it("truncates the second operand to match the first", function() {
        let underTest = new Sums.RandomSubtractionSum(5, 8, false);

        expect(underTest.operand1.length).toEqual(5);
        expect(underTest.operand2.length).toEqual(5);

        underTest = new Sums.RandomSubtractionSum(6, 9, true);

        expect(underTest.operand1.length).toEqual(6);
        expect(underTest.operand2.length).toEqual(6);
    });

    describe("without carrying", function() {
        describe("with equal operand lengths", function() {
            it("generates sums without carrying", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(2, 2, false);
                    expect(underTest.operand1[0]).not.toBeLessThan(underTest.operand2[0]);
                    expect(underTest.operand1[1]).not.toBeLessThan(underTest.operand2[1]);
                }
            });

            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(1, 1, false);
                    expect(underTest.operand1[0]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });

        describe("where operand 1 is shorter", function() {
            it("generates sums without carrying", function() {
            // Digits are random. Assume that 100 is enough to get an example failure
            for (let i = 0; i < 100; i++) {
                const underTest = new Sums.RandomSubtractionSum(2, 3, false);
                expect(underTest.operand1[0]).not.toBeLessThan(underTest.operand2[0]);
                expect(underTest.operand1[1]).not.toBeLessThan(underTest.operand2[1]);
            }
            });

            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(2, 3, false);
                    expect(underTest.operand1[1]).not.toBe(0);
                    expect(underTest.operand2[2]).not.toBe(0);
                }
            });
        });

        describe("where operand 2 is shorter", function() {
            it("generates sums without carrying", function() {
            // Digits are random. Assume that 100 is enough to get an example failure
            for (let i = 0; i < 100; i++) {
                const underTest = new Sums.RandomSubtractionSum(3, 2, false);
                expect(underTest.operand1[0]).not.toBeLessThan(underTest.operand2[0]);
                expect(underTest.operand1[1]).not.toBeLessThan(underTest.operand2[1]);
            }
            });

            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(3, 2, false);
                    expect(underTest.operand1[2]).not.toBe(0);
                    expect(underTest.operand2[1]).not.toBe(0);
                }
            });
        });
    });

    describe("with carrying", function() {
        describe("with equal operand lengths", function() {
            it("generates sums with positive answers", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(2, 2, true);
                    expect(10 * underTest.operand1[1] + underTest.operand1[0])
                        .not.toBeLessThan(10 * underTest.operand2[1] + underTest.operand2[0]);
                }
            });

            it("generates sums with carrying on trailing digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                let passCaseFound = false;
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(2, 2, true);
                    if (underTest.operand1[0] - underTest.operand2[0] < 0) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });

            it("generates sums without a leading 0", function() {
                // Digits are random. Assume that 100 is enough to get a failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(1, 1, true);
                    expect(underTest.operand1[0]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });

        describe("where operand 2 is shorter", function() {
            it("generates sums with carrying on leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                let passCaseFound = false;
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(3, 2, true);
                    if (underTest.operand1[1] - underTest.operand2[1] < 0) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });

            it("generates sums with carrying on trailing digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                let passCaseFound = false;
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(3, 2, true);
                    if (underTest.operand1[0] - underTest.operand2[0] < 0) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });

            it("generates sums without a leading 0", function() {
                // Digits are random. Assume that 100 is enough to get a failure
                for (let i = 0; i < 100; i++) {
                    const underTest = new Sums.RandomSubtractionSum(2, 1, true);
                    expect(underTest.operand1[1]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });
    });
});