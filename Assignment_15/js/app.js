function ViewModel(){
    this.hobbies=ko.observableArray();//Empty Array
    this.hobby=ko.observable("");
    this.addHobby=function(){
        if(this.hobby!=""){
            this.hobbies.push(this.hobby);
            this.hobby="";
        }
    }.bind(this);
}
const viewModel=new ViewModel();
ko.applyBindings(viewModel);

