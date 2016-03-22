/// <reference path="../typings/main.d.ts" />
/// <reference path="../../../src/script/Sums/operand.ts" />

describe("operand", function() {
    describe("operand", function() {
        it("can be created from a digit", function() {
            expect(new Sums.Operand(3).toString()).toBe("3");
        });
    });

    describe("converting to string", function() {
        it("copes with an empty value", function() {
            expect(new Sums.Operand().toString()).toBe("");
        });

        it("it writes digits in the correct order", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(2);
            underTest.prependDigit(1);

            expect(underTest.toString()).toBe("12");
        });
    });

    it("it overwrites digits", function() {
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

    it("it gets digits", function() {
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
        it("it reports 0 correctly", function() {
            const underTest = new Sums.Operand();

            expect(underTest.length).toBe(0);
        });

        it("it reports 0 correctly", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(1);

            expect(underTest.length).toBe(1);
        });

        it("it reports 0 correctly", function() {
            const underTest = new Sums.Operand();

            underTest.prependDigit(2);
            underTest.prependDigit(1);

            expect(underTest.length).toBe(2);
        });
    });
});
