//对象
let user={
    name:"John",//用逗号分隔开，用分号是错的
    age:30,
};
console.log(user.name);
user[a]="people";//切记要打双引号；不然要重新定义
//如果是多词的定义的话，就要用到方括号
user["likes birds"]=ture;//方括号内的字符要要用单双引号
let key=prompt("What do you want to know","name");
console.log(user[key]);
function olduser(name,age){
   return{
    name,//与name:name相同；
    age,//与age:age相同
   }
}//这是函数的简写方式
let maker={
    isAdmin:ture,
    name,
    ag:23,
};//这是属性名的简写
for(let key in maker){
    console.log(key)//这是打印属性名
    console.log(maker[key]);//打印属性值
}
//任务
let user2={};
user2.name="John";
user2.surname="smith";
user2.name="Pete";
delete user2.name;
let salaries={
    John:100,
    Ann:160,
    Pete:130
}
let sum=0;
for(let key in salaries){
    sum+=salaries[key];
}