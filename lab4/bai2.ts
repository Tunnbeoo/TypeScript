interface Named{
    readonly name?: string;
    outputName?: string
}

interface Greeetable extends Named{
    greet(phrase: string): void;
}

let user1: Greeetable;

user1 = new Person();
//user1,name = 'Manu;

user1.greet('Hi there - I am')
console.log(user1);
