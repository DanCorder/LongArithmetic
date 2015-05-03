window.longArithmetic = window.longArithmetic || {};

window.longArithmetic.SumGenerator = (function() {

    return function() {
        var self = this;
        
        self.getSums = function(numberOfSums) {
            var sums = [];
            
            for (var i = 0; i < numberOfSums; i++) {
                sums.push(getSum());
            }
            
            return sums;
        };
        
        function getSum() {
            return { operand1: 1234567890, operand2: 8765432109, operator: '+' };
        }
    };
})();