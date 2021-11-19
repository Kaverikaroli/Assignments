var viewModel = {
      
    items: ko.observableArray ([
        { itemName: 'Item Number One' },
        { itemName: 'Item Number Two' },
    ]),
    
    chosenValue: ko.observableArray(),
};

 ko.applyBindings(viewModel);