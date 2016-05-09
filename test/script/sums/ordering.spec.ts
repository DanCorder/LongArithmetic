/// <reference path="../typings/main.d.ts" />
/// <reference path="../../../src/script/sums/ordering.ts" />

describe("ordering", function() {
    describe("to text", function() {
        it("converts values to human readable text", function() {
            expect(Sums.orderingToText(Sums.Ordering.AscendingOperand1)).toBe("ascending");
            expect(Sums.orderingToText(Sums.Ordering.AscendingOperand2)).toBe("ascending");
            expect(Sums.orderingToText(Sums.Ordering.DescendingOperand1)).toBe("descending");
            expect(Sums.orderingToText(Sums.Ordering.DescendingOperand2)).toBe("descending");
            expect(Sums.orderingToText(Sums.Ordering.Random)).toBe("random");
        });
    });

    describe("sorting by operand 1", function() {
        it("orders by operand 1 ascending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(2)),
            ];

            Sums.orderSums(sums, Sums.Ordering.AscendingOperand1);

            expect(sums[0].operand1.toString()).toBe("0");
            expect(sums[1].operand1.toString()).toBe("1");
            expect(sums[2].operand1.toString()).toBe("2");
        });

        it("falls back to operand 2 when sorting by operand 1 ascending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(2)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.AscendingOperand1);

            expect(sums[0].operand2.toString()).toBe("0");
            expect(sums[1].operand2.toString()).toBe("1");
            expect(sums[2].operand2.toString()).toBe("2");
        });

        it("orders by operand 1 descending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(2)),
            ];

            Sums.orderSums(sums, Sums.Ordering.DescendingOperand1);

            expect(sums[0].operand1.toString()).toBe("2");
            expect(sums[1].operand1.toString()).toBe("1");
            expect(sums[2].operand1.toString()).toBe("0");
        });

        it("falls back to operand 2 when sorting by operand 1 descending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(2)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.DescendingOperand1);

            expect(sums[0].operand2.toString()).toBe("2");
            expect(sums[1].operand2.toString()).toBe("1");
            expect(sums[2].operand2.toString()).toBe("0");
        });
    });

    describe("sorting by operand 2", function() {
        it("orders by operand 2 ascending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(2)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.AscendingOperand2);

            expect(sums[0].operand2.toString()).toBe("0");
            expect(sums[1].operand2.toString()).toBe("1");
            expect(sums[2].operand2.toString()).toBe("2");
        });

        it("falls back to operand 2 when sorting by operand 1 ascending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.AscendingOperand2);

            expect(sums[0].operand1.toString()).toBe("0");
            expect(sums[1].operand1.toString()).toBe("1");
            expect(sums[2].operand1.toString()).toBe("2");
        });

        it("orders by operand 2 descending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(2)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(0)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.DescendingOperand2);

            expect(sums[0].operand2.toString()).toBe("2");
            expect(sums[1].operand2.toString()).toBe("1");
            expect(sums[2].operand2.toString()).toBe("0");
        });

        it("falls back to operand 1 when sorting by operand 2 descending", function() {
            const sums: Sums.Sum[] = [
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(2), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(0), new Sums.Operand(1)),
                new Sums.Sum(Sums.Operator.Add, new Sums.Operand(1), new Sums.Operand(1)),
            ];

            Sums.orderSums(sums, Sums.Ordering.DescendingOperand2);

            expect(sums[0].operand1.toString()).toBe("2");
            expect(sums[1].operand1.toString()).toBe("1");
            expect(sums[2].operand1.toString()).toBe("0");
        });
    });

    it("shuffles the sums", function() {
        const sums: Sums.Sum[] = [];

        for (let i = 0; i < 100; i++) {
            sums.push(new Sums.Sum(Sums.Operator.Add, new Sums.Operand(i), new Sums.Operand(i)));
        }

        Sums.orderSums(sums, Sums.Ordering.Random);

        // Shuffling is random so do this test up to two times.
        let passCaseFound = false;
        for (let i = 0; i < 2; i++) {
            // Check that 0 + 0 isn't the first or last sum
            if ((sums[0].operand1.getDigitAt(0) !== 0 || sums[0].operand2.getDigitAt(0) !== 0) &&
                (sums[99].operand1.getDigitAt(0) !== 0 || sums[99].operand2.getDigitAt(0) !== 0)) {
                passCaseFound = true;
                break;
            }
        }

        expect(passCaseFound).toBeTruthy();
    });
});
