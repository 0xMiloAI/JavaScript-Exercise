let user = {}; // 一个没有 "address" 属性的 user 对象

alert(user.address.street); // Error!我们希望得到一个undefined
//而不是一个错误
let usr = {};
//这样太复杂
alert(usr.address ? usr.address.street : undefined);
//所以可以使用可选链；
let uer = {}; // user 没有 address 属性

alert( uer?.address?.street );
//如果 ?. 左边部分不存在，就会立即停止运算（“短路效应”）。
//因此，如果在 ?. 的右侧有任何进一步的函数调用或操作，它们均不会执行
let ser = null;
let x = 0;
user?.sayHi(x++); // 没有 "user"，因此代码执行没有到达 sayHi 调用和 x++   
alert(x); // 0，值没有增加
/*
obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined
*/