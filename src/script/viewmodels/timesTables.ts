/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />

namespace ViewModels {
    export class TimesTables {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();

        public tables = ko.observableArray<number>([]);
        public ordering = ko.observable<Sums.Ordering>(Sums.Ordering.AscendingOperand2);
        public allowedOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand2,
                                                                     Sums.Ordering.DescendingOperand2,
                                                                     Sums.Ordering.Random]);
        public showSolutions = ko.observable<boolean>(false);

        public generateSums() {
            this.sums(this.problemSetGenerator.getTimesTablesSums(this.tables(), 10, this.ordering()));
        }
    }
}