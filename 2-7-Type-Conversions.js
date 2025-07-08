let value = true;
console.log(typeof value);
value = String(value);//现在变成了string类型；即“true”；
console.log(typeof value);//string
//number类型也一样；
//boolean类型转换只有true和false；
//null和undefined类型转换为number类型时，都变成了0；
//symbol类型转换为number类型时，会报错；
//object类型转换为number类型时，会报错；
//object类型转换为string类型时，会调用对象的toString方法；
//object类型转换为boolean类型时，会调用对象的valueOf方法；
//object类型转换为symbol类型时，会调用对象的toString方法；
//object类型转换为object类型时，会调用对象的toString方法；
//object类型转换为object类型时，会调用对象的toString方法；