/// <reference path="../typings/main.d.ts" />
/// <reference path="../../../src/script/sums/operand.ts" />

describe("operand", function() {
    describe("construction", function() {
        it("can be created from a digit", function() {
            expect(new Sums.Operand(3).toString()).toBe("3");
        });
    });

    describe("converting to string", function() {
        it("copes with an empty value", function() {
            expect(new Sums.Operand().toString()).toBe("");
        });

        it("writes digits in the correct order", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(2);
            underTest.prependDigit(1);

            expect(underTest.toString()).toBe("12");
        });

        it("writes negative numbers correctly", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(2);
            underTest.prependDigit(1);
            underTest.isNegative = true;

            expect(underTest.toString()).toBe("-12");
        });
    });

    it("overwrites digits", function() {
        const underTest = new Sums.Operand();

        underTest.prependDigit(3);
        underTest.prependDigit(2);
        underTest.prependDigit(1);

        underTest.setDigitAt(2, 4);
        expect(underTest.toString()).toBe("423");
        underTest.setDigitAt(1, 5);
        expect(underTest.toString()).toBe("453");
        underTest.setDigitAt(0, 6);
        expect(underTest.toString()).toBe("456");
    });

    it("gets digits", function() {
        const underTest = new Sums.Operand();

        underTest.prependDigit(3);
        underTest.prependDigit(2);
        underTest.prependDigit(1);

        expect(underTest.getDigitAt(0)).toBe(3);
        expect(underTest.getDigitAt(1)).toBe(2);
        expect(underTest.getDigitAt(2)).toBe(1);
    });

    it("appendDigits digits", function() {
        const underTest = new Sums.Operand();

        underTest.appendDigit(3);
        expect(underTest.toString()).toBe("3");
        underTest.appendDigit(2);
        expect(underTest.toString()).toBe("32");
        underTest.appendDigit(1);
        expect(underTest.toString()).toBe("321");
    });

    describe("reporting length", function() {
        it("reports 0 correctly", function() {
            const underTest = new Sums.Operand();

            expect(underTest.length).toBe(0);
        });

        it("reports 1 correctly", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(1);

            expect(underTest.length).toBe(1);
        });

        it("reports 2 correctly", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(2);
            underTest.prependDigit(1);

            expect(underTest.length).toBe(2);
        });
    });

    describe("arithmetic", function() {
        it("adds short numbers", function() {
            const underTest1 = new Sums.Operand(6);
            const underTest2 = new Sums.Operand(7);

            const result = underTest1.doArithmetic(Sums.Operator.Add, underTest2);

            expect(result.toString()).toBe("13");
        });

        it("adds long numbers", function() {
            const underTest1 = new Sums.Operand();
            const underTest2 = new Sums.Operand();

            for (let i = 0; i < 20; i++) {
                underTest1.prependDigit(6);
                underTest2.prependDigit(7);
            }

            const result = underTest1.doArithmetic(Sums.Operator.Add, underTest2);

            expect(result.toString()).toBe("144444444444444444443");
        });

        it("subtracts short numbers", function() {
            const underTest1 = new Sums.Operand(7);
            const underTest2 = new Sums.Operand(6);

            const result = underTest1.doArithmetic(Sums.Operator.Subtract, underTest2);

            expect(result.toString()).toBe("1");
        });

        it("subtracts long numbers", function() {
            const underTest1 = new Sums.Operand();
            const underTest2 = new Sums.Operand();

            for (let i = 0; i < 19; i++) {
                underTest1.prependDigit(7);
                underTest2.prependDigit(6);
            }
            underTest1.prependDigit(8);
            underTest2.prependDigit(6);

            const result = underTest1.doArithmetic(Sums.Operator.Subtract, underTest2);

            expect(result.toString()).toBe("21111111111111111111");
        });

        it("subtracts numbers with negative answers", function() {
            const underTest1 = new Sums.Operand(4);
            const underTest2 = new Sums.Operand(6);

            const result = underTest1.doArithmetic(Sums.Operator.Subtract, underTest2);

            expect(result.toString()).toBe("-2");
        });

        it("multiplies numbers", function() {
            const underTest1 = new Sums.Operand(4);
            const underTest2 = new Sums.Operand(6);

            const result = underTest1.doArithmetic(Sums.Operator.Multiply, underTest2);

            expect(result.toString()).toBe("24");
        });

        it("warns about unsupported operator types", function() {
            const underTest1 = new Sums.Operand(4);
            const underTest2 = new Sums.Operand(6);

            expect(function() {
                underTest1.doArithmetic(Sums.Operator.Divide, underTest2);
            }).toThrow("Unsupported operator: /");
        });
    });
});
