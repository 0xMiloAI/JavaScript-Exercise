//作为对象属性的函数称为方法；
let user={
    name:"John",
    age:30,
};
user.sayHi=function(){
    console.log("Hello!");
}
user.sayHi();//Hello!
//也可以预先声明函数 然后user.sayHai=sayHi;
let maker={
    name:"Joy",
    say(){
        console.log(this.name);//this指的是”当前的对象“
    }//如果换成maker.name则会报错；
}//箭头函数没有this