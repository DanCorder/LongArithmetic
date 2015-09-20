/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="viewModel.ts" />
/// <reference path="problemSetGenerator.ts" />

var sumGenerator = new Sums.ProblemSetGenerator();
var viewModel = new LongArithmatic.ViewModel(sumGenerator);
ko.applyBindings(viewModel);