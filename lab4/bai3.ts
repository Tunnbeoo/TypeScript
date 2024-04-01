abstract class Department{
    static fiscalYear =2024;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string){

    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(this: Department):void;

    addEmployee(employees:string){
        this.employees.push(employees);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor (id: string, admins: string[]){
        super(id,'IT');
        this.admins= admins = admins;
    }
    describe() {
        console.log('IT Department - ID: '+ this.id);
        
    }
}

const employees = Department.createEmployee('Max');
console.log(employees, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('max');
it.addEmployee('Manu');
