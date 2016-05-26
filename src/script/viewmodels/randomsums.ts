/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />

namespace ViewModels {
    export class RandomSums {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) {
            this.generateSums();
        }

        public sums = ko.observableArray<Sums.RandomSum>();

        public numberOfSums = ko.observable<number>(12);
        public digitsTop = ko.observable<number>(10);
        public digitsBottom = ko.observable<number>(10);
        public allowCarrying = ko.observable<boolean>(true);
        public sumType = ko.observable<Sums.Operator>(Sums.Operator.Add);
        public allowedSumTypes = ko.observableArray<Sums.Operator>([ Sums.Operator.Add, Sums.Operator.Subtract ]);
        public showSolutions = ko.observable<boolean>(false);

        public generateSums() {
            this.sums(this.problemSetGenerator.getRandomSums(this.numberOfSums(), this.sumType(), this.digitsTop(), this.digitsBottom(), this.allowCarrying()));
        }
    }
}