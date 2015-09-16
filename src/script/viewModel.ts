/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="sumGenerator.ts" />

module LongArithmatic {
    export class ViewModel {
        sumGenerator: Sums.SumGenerator;
        constructor(sumGenerator: Sums.SumGenerator) {
            this.sumGenerator = sumGenerator;
            this.numberOfSums(12);
            this.maxDigits(10);
            this.allowCarrying(true);
            
            this.refreshSums();
        }
        
        public sums = ko.observableArray<Sums.Sum>();
        public numberOfSums = ko.observable<number>();
        public maxDigits = ko.observable<number>();
        public allowCarrying = ko.observable<boolean>();
        
        public refreshSums() {
            this.sums(this.sumGenerator.getSums(this.numberOfSums(), this.maxDigits(), this.allowCarrying()));
        }
    }
}