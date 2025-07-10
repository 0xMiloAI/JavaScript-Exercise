//对象到字符串的转换，
// 输出
alert(obj);

// 将对象作为属性键
anotherObj[obj] = 123;
//对象到数字的转换
// 显式转换
let num = Number(obj);

// 数学运算（除了二元加法）
let n = +obj; // 一元加法
let delta = date1 - date2;

// 小于/大于的比较
let greater = user1 > user2;
//Symbol.toPrimitive 方法存在，则它会被用于所有 hint，无需更多其他方法。
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // 转换演示：
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500
  //如果没有 Symbol.toPrimitive，那么 JavaScript 将尝试寻找 toString 和 valueOf 方法
  let uer = {
    name: "John",
    money: 1000,
  
    // 对于 hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // 对于 hint="number" 或 "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(uer); // toString -> {name: "John"}
  alert(+uer); // valueOf -> 1000
  alert(uer + 500); // valueOf -> 1500
  /*
  对象到原始值的转换，是由许多期望以原始值作为值的内建函数和运算符自动调用的。

这里有三种类型（hint）：

"string"（对于 alert 和其他需要字符串的操作）
"number"（对于数学运算）
"default"（少数运算符，通常对象以和 "number" 相同的方式实现 "default" 转换）
规范明确描述了哪个运算符使用哪个 hint。

转换算法是：

调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在，
否则，如果 hint 是 "string"
尝试调用 obj.toString() 或 obj.valueOf()，无论哪个存在。
否则，如果 hint 是 "number" 或者 "default"
尝试调用 obj.valueOf() 或 obj.toString()，无论哪个存在
  */