/// <reference path="typings/browser.d.ts" />
/// <reference path="viewModels/viewModel.ts" />
/// <reference path="sums/problemSetGenerator.ts" />

const sumGenerator = new Sums.ProblemSetGenerator();
const viewModel = new ViewModels.ViewModel(sumGenerator);
ko.applyBindings(viewModel);