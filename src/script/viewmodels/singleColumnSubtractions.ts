/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />

namespace ViewModels {
    export class SingleColumnSubtractions {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();

        public ordering = ko.observable<Sums.Ordering>(Sums.Ordering.Random);
        public allowedOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand1,
                                                                     Sums.Ordering.DescendingOperand1,
                                                                     Sums.Ordering.Random]);
        public showSolutions = ko.observable<boolean>(false);

        public generateSums() {
            this.sums(this.problemSetGenerator.getSingleColumnSubtractions(this.ordering()));
        }
    }
}