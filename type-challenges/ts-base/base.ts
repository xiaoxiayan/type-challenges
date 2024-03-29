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

const funb: saydd = (name: string) => {
  return `hello ${name}`
}
//  吧正则的括号内容提取，
const a = 'abc'.replace(/a(b)c/, '$1$1$1') // 'b,b,b'
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
// 输入的字符串 第一个和最后一个是否是 字符串，如果是，那么返回 true，如果不是，那么返回 false
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string,
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}` : Str

type ReplaceStrResule = ReplaceStr<'xxp like music', 'music', 'eat'>

// ## trim
// 去除左边，
type TrimStrRight<Str extends string> =
  Str extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? TrimStrRight<Rest> : Str;
type StrRight = TrimStrRight<'xxp    '>

// 去除右边
type TrimStrLeft<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimStrLeft<Rest> : Str

type StrLeft = TrimStrLeft<'    xxp'>

type TrimStr<Str extends string> = TrimStrLeft<TrimStrRight<Str>>

type TrimResult = TrimStr<'   xxp   '>

// 函数提取参数，返回值的类型。 返回一个数组
// 提取参数
type GetParameters<Func extends Function> =
  // 解构 args, 参数
  Func extends (...args: infer Args) => unknown ? Args : never;

type ParamterResult = GetParameters<(name: string, age: number) => string>

// 提取返回值

type GetReturnType<Func extends Function> =
  Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;


type ReturnTypeResullt = GetReturnType<() => 'xxp'>

// 获取 this

class Xxp {
  name: string;

  constructor() {
    this.name = 'xxp'
  }
  hello(this: Xxp) {
    return 'hello, I\m' + this.name
  }
}

const xp = new Xxp()

xp.hello()
xp.hello.call({ xxx: 1 }) // 应该要报错呀


type GetThisParameterType<T>
  = T extends (this: infer ThisType, ...args: any[]) => any
  ? ThisType
  : unknown

type GetThisParameterTypeRes = GetThisParameterType<typeof xp.hello>



//  keyof, typeof 专项


const COLORS = {
  red: 'red',
  blue: 'blue'
}

interface PersonMan {
  age: Number;
  sex: String;
}

type Colors = keyof typeof COLORS


let color: Colors



type ccc = typeof COLORS


const asdsd: PersonMan = {
  age: 18,
  sex: 'man'
}


type Person56 = {
  age: Number;
  name: String;
}
const Person1 = {
  age: '18',
  name: 'xiaohong'
}

type aa = typeof Person1

// object, Object 以及 {}
// Object 代表顶层，表示的是ts中所有的类型，  但是 undefined 和 null 和 void 需要修改配置才不报错
const tmp1: Object = 'lxp'
const tmp2: Object = 599

// object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些
// object 表示原始类型，基础数据类型 不是具体的值
const tmp3: object = Number
const tmp4: object = String
const tmp5: object = []
const tmp6: object = null





