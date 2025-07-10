//“symbol” 值表示唯一的标识符。
//symbol 保证是唯一的
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
//symbol 不会被自动转换为字符串
let id = Symbol("id");
alert(id); // 类型错误：无法将 symbol 值转换为字符串。
//如果我们真的想显示一个 symbol，我们需要在它上面调用 .toString()
alert(id.toString()); // Symbol(id)，现在它有效了
//如果我们要在对象字面量 {...} 中使用 symbol，则需要使用方括号把它括起来
let user = {
  name: "John",
  [id]: 123 // 而不是 "id"：123
};//symbol类型在for in 中会被跳过
// 从全局注册表中读取
let id3 = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 symbol
alert( id3 === idAgain ); // true
//通过全局 symbol 返回一个名字，我们可以使用 Symbol.keyFor(sym)
// 通过 name 获取 symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id