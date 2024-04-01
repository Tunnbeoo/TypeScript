function logger(contructor: Function){
    console.log(contructor);
}

class SinhVienPlay{
    tenSinhVien = 'Nguyen Van A';
    constructor(){
        console.log("Tao Sinh Vien");
    }
}

let sinhA = new SinhVienPlayHCM();
console.log(sinhA);
