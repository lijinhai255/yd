type  petsGroup = 'dog'|'cat'|'fish';

interface IPetInfo {
    name: string;
    age: number;
}
// type IPets = {
//     dog: IPetInfo;
//     cat: IPetInfo;
//     fish: IPetInfo;
// }
type IPets = Record<petsGroup,IPetInfo>;

const animalsInfo:IPets ={
    dog:{
        name:"dogName",
        age:2
    },
    cat:{
        name:"catName",
        age:2
    },
    fish:{
        name:"fishName",
        age:2
    }
}
