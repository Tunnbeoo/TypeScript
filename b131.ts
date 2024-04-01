function Log(target: any, methodName: string, descripter: PropertyDecorator) {
    console.log("Target", target);
    console.log("property Name: ", methodName);
}

class product{
    @Log
    title: string;
    private _price: number;

constructor(t: string, p: number){
    this.title = t;
    this._price = p;
}    
    priceInfor(){};
}