interface User {
    id:number;
    age:number;
    name:string
}
// type PickUser = {
//     id: number;
//     age: number;
// }
type PickUser = Pick<User,"id"|"age">