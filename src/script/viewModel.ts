/// <reference path="typings/browser.d.ts" />
/// <reference path="sums/problemSetGenerator.ts" />

namespace LongArithmatic {
    export class ViewModel {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateRandomSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();
        public numberOfSums = ko.observable<number>(12);
        public digitsTop = ko.observable<number>(10);
        public digitsBottom = ko.observable<number>(10);
        public allowCarrying = ko.observable<boolean>(true);
        public sumType = ko.observable<Sums.Operator>(Sums.Operator.Add);
        public allowedSumTypes = ko.observableArray<Sums.Operator>([ Sums.Operator.Add, Sums.Operator.Subtract ]);

        public timesTables = ko.observableArray<number>([]);

        public ordering = ko.observable<Sums.Ordering>(Sums.Ordering.AscendingOperand1);
        public allowedOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand1,
                                                                     Sums.Ordering.DescendingOperand1,
                                                                     Sums.Ordering.Random]);

        public timesTableOrdering = ko.observable<Sums.Ordering>(Sums.Ordering.AscendingOperand2);
        public allowedTimesTableOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand2,
                                                                               Sums.Ordering.DescendingOperand2,
                                                                               Sums.Ordering.Random]);

        public showSolutions = ko.observable<boolean>(false);

        public generateRandomSums() {
            this.sums(this.problemSetGenerator.getRandomSums(this.numberOfSums(), this.sumType(), this.digitsTop(), this.digitsBottom(), this.allowCarrying()));
        }

        public generateSingleDigitSums() {
            this.sums(this.problemSetGenerator.getSingleDigitSums(this.sumType(), this.ordering()));
        }

        public generateSingleColumnSubtractions() {
            this.sums(this.problemSetGenerator.getSingleColumnSubtractions(this.ordering()));
        }

        public generateTimesTableSums() {
            this.sums(this.problemSetGenerator.getTimesTablesSums(this.timesTables(), 10, this.timesTableOrdering()));
        }
    }
}