/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="sums/problemSetGenerator.ts" />

namespace LongArithmatic {
    export class ViewModel {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.numberOfSums(12);
            this.digitsTop(10);
            this.digitsBottom(10);
            this.allowCarrying(true);
            this.sumType(Sums.Operator.Add);
            this.allowedSumTypes([ Sums.Operator.Add, Sums.Operator.Subtract ]);

            this.generateRandomSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();
        public numberOfSums = ko.observable<number>();
        public digitsTop = ko.observable<number>();
        public digitsBottom = ko.observable<number>();
        public allowCarrying = ko.observable<boolean>();
        public sumType = ko.observable<Sums.Operator>();
        public allowedSumTypes = ko.observableArray<Sums.Operator>();

        public generateRandomSums() {
            this.sums(this.problemSetGenerator.getRandomSums(this.numberOfSums(), this.sumType(), this.digitsTop(), this.digitsBottom(), this.allowCarrying()));
        }

        public generateSingleDigitSums() {
            this.sums(this.problemSetGenerator.getSingleDigitAdditions());
        }
    }
}