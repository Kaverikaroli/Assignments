function Product(pname,unitprice){

    this.pname=pname;

    this.unitprice=unitprice;

}

const p1=new Product("Pepsi",20.00);

const p2=new Product("Maaza",20.00);

const p3=new Product("Coca Cola",20.00);



function ProductListModel(){

    this.productList=ko.observableArray([p1,p2,p3])

    console.log("Product list has "+this.productList());

}



const productListModel=new ProductListModel();

ko.applyBindings(productListModel);