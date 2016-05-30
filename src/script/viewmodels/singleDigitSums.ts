/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />

namespace ViewModels {
    export class SingleDigitSums {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateSums();
        }

        public sums = ko.observableArray<Sums.Sum>();

        public sumType = ko.observable<Sums.Operator>(Sums.Operator.Add);
        public allowedSumTypes = ko.observableArray<Sums.Operator>([ Sums.Operator.Add, Sums.Operator.Subtract ]);
        public ordering = ko.observable<Sums.Ordering>(Sums.Ordering.Random);
        public allowedOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand1,
                                                                     Sums.Ordering.DescendingOperand1,
                                                                     Sums.Ordering.Random]);
        public showSolutions = ko.observable<boolean>(false);

        public generateSums() {
            this.sums(this.problemSetGenerator.getSingleDigitSums(this.sumType(), this.ordering()));
        }
    }
}