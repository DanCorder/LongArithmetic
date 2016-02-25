/// <reference path="../typeDefinitions/jasmine.d.ts" />
/// <reference path="../../../src/script/Sums/problemSetGenerator.ts" />
/// <reference path="../../../src/script/Sums/operator.ts" />

describe("SumGenerator", function() {
    it("generates the correct number of sums", function() {
        var underTest = new Sums.ProblemSetGenerator();
        
        var sums = underTest.getSums(2, Sums.Operator.Add, 1, false);
        
        expect(sums.length).toEqual(2);
    });
    
    it("generates sums with the correct number of digits", function() {
        var underTest = new Sums.ProblemSetGenerator();
        
        var sum = underTest.getSums(1, Sums.Operator.Add, 5, false)[0];
        
        expect(sum.operand1.length).toEqual(5);
        expect(sum.operand2.length).toEqual(5);
    });
    
    it("generates addition sums", function() {
        var underTest = new Sums.ProblemSetGenerator();
        
        var sum = underTest.getSums(1, Sums.Operator.Add, 1, false)[0];
        
        expect(sum.operator).toEqual('+');
    });
    
    it("generates sums without carrying", function() {
        var underTest = new Sums.ProblemSetGenerator();
        
        // Digits are random. Assume that 100 is enough to get an example failure
        var sum = underTest.getSums(1, Sums.Operator.Add, 100, false)[0];
        
        for (var i = 0; i < 100; i++) {
            expect(sum.operand1[i] + sum.operand2[i]).toBeLessThan(10);
        }
    });
    
    it("generates sums with carrying", function() {
        var underTest = new Sums.ProblemSetGenerator();
        
        // Digits are random. Assume that 100 is enough to get an example pass
        var sum = underTest.getSums(1,Sums.Operator.Add,  100, true)[0];
        
        var passCaseFound = false;
        for (var i = 0; i < 100; i++) {
            if (sum.operand1[i] + sum.operand2[i] >= 10) {
                passCaseFound = true;
            }
        }
        expect(passCaseFound).toBeTruthy();
    });
});