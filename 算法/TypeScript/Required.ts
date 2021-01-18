interface User {
    id:number,
    age:number,
    name:string
}
// type PartialUser = {
//     id?: number;
//     age?: number;
//     name?: string;
// }
type partialUser = Partial<User>
// type PullDownRefresh = {
//     id: number;
//     age: number;
//     name: string;
// }
type PullDownRefresh = Required<Partial<User>>

