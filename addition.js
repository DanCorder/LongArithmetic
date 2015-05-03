window.longArithmetic = window.longArithmetic || {};
window.longArithmetic.viewModels = window.longArithmetic.viewModels || {};

window.longArithmetic.viewModels.Addition = (function(ko) {

    return function(sumGenerator) {
        var self = this;
        
        self.sums = ko.observableArray(sumGenerator.getSums(12));
    };
})(ko);