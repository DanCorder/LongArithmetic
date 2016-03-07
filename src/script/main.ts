/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="viewModel.ts" />
/// <reference path="sums/problemSetGenerator.ts" />

const sumGenerator = new Sums.ProblemSetGenerator();
const viewModel = new LongArithmatic.ViewModel(sumGenerator);
ko.applyBindings(viewModel);