/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="viewModel.ts" />
/// <reference path="sumGenerator.ts" />

var sumGenerator = new Sums.SumGenerator();
var viewModel = new LongArithmatic.ViewModel(sumGenerator);
ko.applyBindings(viewModel);