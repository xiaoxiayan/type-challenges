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
//  吧正则的括号内容提取，
const a =  'abc'.replace(/a(b)c/, '$1$1$1') // 'b,b,b'
// p 约束在 传入的值是 promise<string> ,
type GetValueType<P> = P extends Promise<infer Value> ? Value : never


type getValueResult = GetValueType<Promise<'xxp'>>

type arr2 = [1, 2, 3]

type GetSecond<Arr extends unknown[]> =
  Arr extends [unknown, ...infer Second,] ? Second : never

type res = GetSecond<arr2>
//  startsWith , 匹配字符串, 前面传入的字符串，是否匹配到里面的内容，以后面传入的为先
type StartsWith<Str extends string, Prefix extends string> =
  Str extends `${Prefix}${string}` ? true : false
type StartsWithResule = StartsWith<'abc', 'a'>
type StartsWithResule2 = StartsWith<'abc', 'b'>

