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
            expect(underTest.operand1[i] - underTest.operand2[i]).toBeGreaterThan(-1);
        }
    });
    
    it("generates a second operand with leading 0s when the first operand has fewer digits", function() {
        // Digits are random. Assume that 100 is enough to get an example failure
        var underTest = new Sums.SubtractionSum(1, 100, false);
        
        for (var i = 1; i < 100; i++) {
            expect(underTest.operand2[i]).toEqual(0);
        }
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
});