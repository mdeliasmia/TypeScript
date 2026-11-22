// class User{
//     public name:string = "";
// }
// const user = new User();
// user.name = "Mohit";
// console.log(user.name);

class User{
    private _name = "";
    set name(value:string){
        if(value.length < 3){
            console.log("Name Must be altest 3 Characters");
            return;
        };
        this._name = value
    }
    get name(){
        return this._name
    }
}
const user = new User();
user.name = "Mohit";
console.log(user.name);