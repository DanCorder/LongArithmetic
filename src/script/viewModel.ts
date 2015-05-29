/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="sumGenerator.ts" />

module LongArithmatic {
    export class ViewModel {
        sumGenerator: Sums.SumGenerator;
        constructor(sumGenerator: Sums.SumGenerator) {
            this.sumGenerator = sumGenerator;
            this.numberOfSums(12);
            this.sums(this.sumGenerator.getSums(this.numberOfSums()));
        }
        
        public sums = ko.observableArray<Sums.Sum>();
        public numberOfSums = ko.observable<number>();
        
        public refreshSums() {
            this.sums(this.sumGenerator.getSums(this.numberOfSums()));
        }
    }
}