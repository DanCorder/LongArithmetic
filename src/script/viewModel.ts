/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="problemSetGenerator.ts" />

module LongArithmatic {
    export class ViewModel {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
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
            this.sums(this.problemSetGenerator.getSums(this.numberOfSums(), Sums.Operator.Add, this.maxDigits(), this.allowCarrying()));
        }
    }
}