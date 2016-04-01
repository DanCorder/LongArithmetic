/// <reference path="typings/browser.d.ts" />
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

            this.ordering(Sums.Ordering.Random);
            this.allowedOrderings([Sums.Ordering.Random, Sums.Ordering.AscendingOperand1, Sums.Ordering.DescendingOperand1]);

            this.showSolutions(false);

            this.generateRandomSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();
        public numberOfSums = ko.observable<number>();
        public digitsTop = ko.observable<number>();
        public digitsBottom = ko.observable<number>();
        public allowCarrying = ko.observable<boolean>();
        public sumType = ko.observable<Sums.Operator>();
        public allowedSumTypes = ko.observableArray<Sums.Operator>();

        public ordering = ko.observable<Sums.Ordering>();
        public allowedOrderings = ko.observableArray<Sums.Ordering>();

        public showSolutions = ko.observable<boolean>();

        public generateRandomSums() {
            this.sums(this.problemSetGenerator.getRandomSums(this.numberOfSums(), this.sumType(), this.digitsTop(), this.digitsBottom(), this.allowCarrying()));
        }

        public generateSingleDigitSums() {
            this.sums(this.problemSetGenerator.getSingleDigitSums(this.sumType(), this.ordering()));
        }
    }
}