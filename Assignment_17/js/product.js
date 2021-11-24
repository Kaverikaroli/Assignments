function ViewModel(){
    this.productname=ko.observable("");
    this.productprice=ko.observable("");
    this.products=ko.observableArray([
        {name:'pepsi',price:30},
       
    ])
    this.addproduct=function(){
        if(this.productname()!=""&&this.productprice()!=""){
            this.products.push({
                name:this.productname(),
                price:this.productprice()

            })
            this.productname("");
            this.productprice("");
        }
    }


}
const viewModel=new ViewModel();
ko.applyBindings(viewModel);
