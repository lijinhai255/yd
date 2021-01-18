//Exclude 从一个类型中排除另一个类型
type A = Exclude<"x"|"a","x"|"y"|"z">
type Item = {
    name: string;
    description: string;
    price: number;
    currency: string;
  };
//   type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  
  type PricelessItem = Omit<Item, "price" | "currency">;
  const item: PricelessItem = {
    name: "Laptop Bag",
    description: "Leather bag for laptop",
  };
  
  console.log(item);