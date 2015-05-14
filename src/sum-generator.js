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
            var operand1 = '';
            var operand2 = '';
            
            for (var i = 0; i < 10; i++) {
                var digit1 = Math.floor(Math.random() * 10);
                var digit2 = getRandomIntBetween(0, 9-digit1);
                
                operand1 += digit1;
                operand2 += digit2;
            }
            
            return { operand1: operand1, operand2: operand2, operator: '+' };
        }
        
        function getRandomIntBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
})();