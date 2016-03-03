/// <reference path="../typeDefinitions/jasmine.d.ts" />
/// <reference path="../../../src/script/Sums/additionSum.ts" />
/// <reference path="../../../src/script/Sums/operator.ts" />

describe("additionSum", function() {
    it("uses the correct operator", function() {
        var underTest = new Sums.AdditionSum(1, 1, true);
        
        var operator = underTest.operator;
        
        expect(operator).toEqual("+");
    });
    
    it("generates the correct number of digits", function() {
        var underTest = new Sums.AdditionSum(5, 6, false);
        
        expect(underTest.operand1.length).toEqual(5);
        expect(underTest.operand2.length).toEqual(6);
    });
    
    it("generates sums without carrying", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        var underTest = new Sums.AdditionSum(100, 100, false);
        
        for (var i = 0; i < 100; i++) {
            expect(underTest.operand1[i] + underTest.operand2[i]).toBeLessThan(10);
        }
    });
    
    it("generates sums without carrying with correct leading digits", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.AdditionSum(1, 1, false);
            expect(underTest.operand1[0] + underTest.operand2[0]).toBeLessThan(10);
        }
    });
    
    it("generates sums with carrying", function() {
        // Digits are random. Assume that 100 is enough to get an example pass
        var underTest = new Sums.AdditionSum(100, 100, true);
        
        var passCaseFound = false;
        for (var i = 0; i < 100; i++) {
            if (underTest.operand1[i] + underTest.operand2[i] >= 10) {
                passCaseFound = true;
                break;
            }
        }
        expect(passCaseFound).toBeTruthy();
    });
    
    it("generates sums without carrying without a leading 0", function() {
        // Digits are random. Assume that 100 is enough to get a failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.AdditionSum(1, 1, false);
            expect(underTest.operand1[0]).not.toBe(0);
            expect(underTest.operand2[0]).not.toBe(0);
        }
    });
    
    it("generates sums with carrying without a leading 0", function() {
        // Digits are random. Assume that 100 is enough to get a failure
        for (var i = 0; i < 100; i++) {
            var underTest = new Sums.AdditionSum(1, 1, true);
            expect(underTest.operand1[0]).not.toBe(0);
            expect(underTest.operand2[0]).not.toBe(0);
        }
    });
});