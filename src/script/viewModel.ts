/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="sums/problemSetGenerator.ts" />

module LongArithmatic {
    export class ViewModel {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.numberOfSums(12);
            this.maxDigits(10);
            this.allowCarrying(true);
            this.sumType(Sums.Operator.Add);
            this.allowedSumTypes([ Sums.Operator.Add, Sums.Operator.Subtract ]);
            
            this.refreshSums();
        }
        
        public sums = ko.observableArray<Sums.Sum>();
        public numberOfSums = ko.observable<number>();
        public maxDigits = ko.observable<number>();
        public allowCarrying = ko.observable<boolean>();
        public sumType = ko.observable<Sums.Operator>();
        public allowedSumTypes = ko.observableArray<Sums.Operator>();
        
        public refreshSums() {
            this.sums(this.problemSetGenerator.getSums(this.numberOfSums(), this.sumType(), this.maxDigits(), this.allowCarrying()));
        }
    }
}