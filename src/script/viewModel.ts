/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="sumGenerator.ts" />

module LongArithmatic {
    export class ViewModel {
        sumGenerator: Sums.SumGenerator;
        constructor(sumGenerator: Sums.SumGenerator) {
            this.sumGenerator = sumGenerator;
            this.sums = ko.observableArray(this.sumGenerator.getSums(12));
        }
        
        public refreshSums() {
            this.sums(this.sumGenerator.getSums(12));
        }
        
        public sums;
    }
}