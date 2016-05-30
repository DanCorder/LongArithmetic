/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />

namespace ViewModels {
    export class TimesTables {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();

        public tables = ko.observableArray<string>(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
        public ordering = ko.observable<Sums.Ordering>(Sums.Ordering.AscendingOperand2);
        public allowedOrderings = ko.observableArray<Sums.Ordering>([Sums.Ordering.AscendingOperand2,
                                                                     Sums.Ordering.DescendingOperand2,
                                                                     Sums.Ordering.Random]);
        public showSolutions = ko.observable<boolean>(false);

        public generateSums() {
            const tableNumbers: number[] = [];
            this.tables().forEach(str => tableNumbers.push(+str));
            this.sums(this.problemSetGenerator.getTimesTablesSums(tableNumbers, 10, this.ordering()));
        }
    }
}