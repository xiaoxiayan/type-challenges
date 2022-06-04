// 重载签名
function greet (person: string) : string
function greet (person: string[]) : string[]


// 实现签名.使用过重载的可以用 unknown

function greet (person: unknown) :unknown {
  if (typeof person === 'string') {
    return  `hellow  ${person}`
  } else if (Array.isArray(person)) {
    return person.map(el => { return `hellow, ${el}` })
  }
}

console.log(greet(['va', 'ccd']))