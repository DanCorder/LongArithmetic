/// <reference path="../typings/main.d.ts" />
/// <reference path="../../../src/script/Sums/sum.ts" />

describe("sum", function() {
    describe("solutions", function() {
        it("generates the correct solution for addition", function() {
            const underTest = new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(5));

            const solution = underTest.solution;

            expect(solution.toString()).toBe("7");
        });

        it("generates the correct solution for subtraction", function() {
            const underTest = new Sums.Sum(Sums.Operator.Subtract, new Sums.Operand(5), new Sums.Operand(2));

            const solution = underTest.solution;

            expect(solution.toString()).toBe("3");
        });
    });
});