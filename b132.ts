function Lo2(target: any, propertyName: string) {
    console.log("Target", target);
    console.log("property Name: ", propertyName);
}

class Product{
    
    title: string;
    private _price: number;

constructor(t: string, p: number){
    this.title = t;
    this._price = p;
}    
    priceInfor(){};
}