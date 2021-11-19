function ViewModel(){
    this.titles=ko.observableArray();//Empty Array
    
    this.title=ko.observable("");
    this.descr=ko.observable("");
    this.addTitle=function(){
        if(this.title!="" ){
            this.titles.push(this.title);
            this.title="";
        }
    }.bind(this);

    this.addDescr=function()
    {
           if(this.descr!="")
           {
            this.titles.push(this.descr);
            this.descr="";
           }
    }.bind(this);
}
const viewModel=new ViewModel();
ko.applyBindings(viewModel);

