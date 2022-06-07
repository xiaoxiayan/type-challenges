// 索引签名 {[key: KeyType] : ValueType}
// 索引签名参数类型 必须是 string , number, symbol,
// keyType 可以是 模板字面量类型（4.1新增） `${string}Change`

interface Dictionary {
  [key: string] : number

}

interface PropChangeHandler {
  [key: `${string}Change`] : boolean | (() => void)
  timeout: number
}

let hanndlers: PropChangeHandler = {
  nameChange: true,
  'ageChange': () => {},
  timeout: 1000
}
