const calculator=new Object();

calculator.add=30;

calculator.sub=-10;

calculator.mul=200;
calculator.div=0.5;

calculator.details=function(){

    return this.add+" "+this.sub+" "+this.mul+" "+this.div;

}



console.log(calculator);