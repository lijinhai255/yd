//Extract允许您通过选择两种不同类型中存在的属性来构造类型
interface FirstType {
    id:number;
    firstName:string;
    lastName:string;
}

interface SecondType {
    id:number;
    address:string;
    city:string;
}

type ExtractType1 = Extract<keyof FirstType,keyof SecondType>;
// ExtractType1  id
type ExcludeType2 = Exclude<keyof FirstType,keyof SecondType>
// ExcludeType2 firstName lastName
