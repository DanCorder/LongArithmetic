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
    
    describe("without carrying", function() {
        describe("with equal operand lengths", function() {
            it("generates sums without carrying", function() {
                // Digits are random. Assume that 100 iterations is enough to get an example failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 2, false);
                    expect(underTest.operand1[0] + underTest.operand2[0]).toBeLessThan(10);
                    expect(underTest.operand1[1] + underTest.operand2[1]).toBeLessThan(10);
                }
            });
            
            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(1, 1, false);
                    expect(underTest.operand1[0]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });
        
        describe("where operand 1 is shorter", function() {
            it("generates sums without carrying", function() {
            // Digits are random. Assume that 100 is enough to get an example failure
            for (var i = 0; i < 100; i++) {
                var underTest = new Sums.AdditionSum(2, 3, false);
                expect(underTest.operand1[0] + underTest.operand2[0]).toBeLessThan(10);
                expect(underTest.operand1[1] + underTest.operand2[1]).toBeLessThan(10);
            }
            });
            
            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 3, false);
                    expect(underTest.operand1[1]).not.toBe(0);
                    expect(underTest.operand2[2]).not.toBe(0);
                }
            });
        });
        
        describe("where operand 2 is shorter", function() {
            it("generates sums without carrying", function() {
            // Digits are random. Assume that 100 is enough to get an example failure
            for (var i = 0; i < 100; i++) {
                var underTest = new Sums.AdditionSum(3, 2, false);
                expect(underTest.operand1[0] + underTest.operand2[0]).toBeLessThan(10);
                expect(underTest.operand1[1] + underTest.operand2[1]).toBeLessThan(10);
            }
            });
            
            it("generates sums with correct leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(3, 2, false);
                    expect(underTest.operand1[2]).not.toBe(0);
                    expect(underTest.operand2[1]).not.toBe(0);
                }
            });
        });
    });
    
    describe("with carrying", function() {
        describe("with equal operand lengths", function() {
            it("generates sums with carrying on leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(1, 1, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums with carrying on trailing digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 2, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums without a leading 0", function() {
                // Digits are random. Assume that 100 is enough to get a failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(1, 1, true);
                    expect(underTest.operand1[0]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });
        
        describe("where operand 1 is shorter", function() {
            it("generates sums with carrying on leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(1, 2, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums with carrying on trailing digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 3, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums without a leading 0", function() {
                // Digits are random. Assume that 100 is enough to get a failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(1, 2, true);
                    expect(underTest.operand1[0]).not.toBe(0);
                    expect(underTest.operand2[1]).not.toBe(0);
                }
            });
        });
        
        describe("where operand 2 is shorter", function() {
            it("generates sums with carrying on leading digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 1, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums with carrying on trailing digits", function() {
                // Digits are random. Assume that 100 is enough to get an example pass
                var passCaseFound = false;
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(3, 2, true);
                    if (underTest.operand1[0] + underTest.operand2[0] >= 10) {
                        passCaseFound = true;
                        break;
                    }
                }
                expect(passCaseFound).toBeTruthy();
            });
            
            it("generates sums without a leading 0", function() {
                // Digits are random. Assume that 100 is enough to get a failure
                for (var i = 0; i < 100; i++) {
                    var underTest = new Sums.AdditionSum(2, 1, true);
                    expect(underTest.operand1[1]).not.toBe(0);
                    expect(underTest.operand2[0]).not.toBe(0);
                }
            });
        });
    });
});