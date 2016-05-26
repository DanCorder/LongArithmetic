/// <reference path="../typings/browser.d.ts" />
/// <reference path="../sums/problemSetGenerator.ts" />
/// <reference path="singleDigitSums.ts" />
/// <reference path="randomSums.ts" />
/// <reference path="singleColumnSubtractions.ts" />
/// <reference path="timesTables.ts" />

namespace ViewModels {
    export class ViewModel {
        constructor(private problemSetGenerator: Sums.ProblemSetGenerator) { }

        public singleDigitSums = new SingleDigitSums(this.problemSetGenerator);
        public randomSums = new RandomSums(this.problemSetGenerator);
        public singleColumnSubtractions = new SingleColumnSubtractions(this.problemSetGenerator);
        public timesTables = new TimesTables(this.problemSetGenerator);
    }
}