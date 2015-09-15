/// <reference path="typeDefinitions/knockout.d.ts" />
/// <reference path="viewModel.ts" />
/// <reference path="additionGenerator.ts" />

var sumGenerator = new Sums.AdditionGenerator();
var viewModel = new LongArithmatic.ViewModel(sumGenerator);
ko.applyBindings(viewModel);