/// <reference path="../typeDefinitions/jasmine.d.ts" />
/// <reference path="../../../src/script/Sums/subtractionSum.ts" />
/// <reference path="../../../src/script/Sums/operator.ts" />

describe("subtractionSum", function() {
    it("uses the correct operator", function() {
        var underTest = new Sums.SubtractionSum(1, 1, true);
        
        var operator = underTest.operator;
        
        expect(operator).toEqual("-");
    });

    it("generates the correct number of digits", function() {
        var underTest = new Sums.SubtractionSum(5, 3, false);
        
        expect(underTest.operand1.length).toEqual(5);
        expect(underTest.operand2.length).toEqual(3);
    });
    
    it("generates sums without carrying", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        var underTest = new Sums.SubtractionSum(100, 100, false);
        
        for (var i = 0; i < 100; i++) {
            expect(underTest.operand1[i]).not.toBeLessThan(underTest.operand2[i]);
        }
    });
    
    it("generates sums without carrying when operand 2 is shorter", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.SubtractionSum(2, 1, false);

            expect(underTest.operand1[0]).not.toBeLessThan(underTest.operand2[0]);
        }
    });
    
    it("truncates the second operand to match the first", function() {
        var underTest = new Sums.SubtractionSum(5, 8, false);
        
        expect(underTest.operand1.length).toEqual(5);
        expect(underTest.operand2.length).toEqual(5);
        
        underTest = new Sums.SubtractionSum(6, 9, true);
        
        expect(underTest.operand1.length).toEqual(6);
        expect(underTest.operand2.length).toEqual(6);
    });
    
    it("generates sums with carrying", function() {
        // Digits are random. Assume that 100 is enough to get an example pass
        var underTest = new Sums.SubtractionSum(100, 100, true);
        
        var passCaseFound = false;
        for (var i = 0; i < 100; i++) {
            if (underTest.operand1[i] - underTest.operand2[i] < 0) {
                passCaseFound = true;
                break;
            }
        }
        expect(passCaseFound).toBeTruthy();
    });
    
    it("generates sums with carrying with positive answers", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.SubtractionSum(1, 1, true);
            expect(underTest.operand1[0] - underTest.operand2[0]).toBeGreaterThan(-1);
        }
    });
    
    it("generates sums without carrying without a leading 0", function() {
        // Digits are random. Assume that 100 is enough to get a failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.SubtractionSum(1, 1, false);
            expect(underTest.operand1[0]).not.toBe(0);
            expect(underTest.operand2[0]).not.toBe(0);
        }
    });
    
    it("generates sums with carrying without a leading 0", function() {
        // Digits are random. Assume that 100 is enough to get a failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.SubtractionSum(1, 1, true);
            expect(underTest.operand1[0]).not.toBe(0);
            expect(underTest.operand2[0]).not.toBe(0);
        }
    });
});