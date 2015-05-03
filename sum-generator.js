window.longArithmetic = window.longArithmetic || {};

window.longArithmetic.SumGenerator = (function() {

    return function() {
        var self = this;
        
        self.getSums = function() {
            return [
                { operand1: 1234567890, operand2: 8765432109, operator: '+' },
                { operand1: 1234567890, operand2: 8765432109, operator: '+' },
                { operand1: 1234567890, operand2: 8765432109, operator: '+' },
                { operand1: 1234567890, operand2: 8765432109, operator: '+' },
                { operand1: 1234567890, operand2: 8765432109, operator: '+' }];
        };
    };
})();