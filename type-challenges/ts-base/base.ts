// 基础类型、
// 元祖 Tuple/*  */ 固定的内容 ，和 固定的长度
type arr = [number, string];
// 接口 interface, 可以描述函数、对象、构造器
interface IPerson {
  name: string;
  age: number;
}
//  implements 用来检测 创建的类 是否和 接口的一致
class Person implements IPerson {
  name: string;
  age: number;
}
const obj: IPerson = {
    name: 'xxp',
    age: 18
}

// 函数
interface sayHello {
  (name: string): string;
}

const func: sayHello = (name: string) => {
  return `hello ${name}`
}
type saydd = (name: string) => string;

const funb : saydd = (name: string) => {
   return  `hello ${name}`
}
