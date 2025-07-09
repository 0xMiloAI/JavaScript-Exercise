//对象的引用和复制
let user={
    name:"John",
};
let admin=user;
admin.name="Pete";//痛过admin来修改user内的属性名；
console.log(user.name);//"Pete";
let a={};
let b=a;
console.log(a==b)//ture   复制引用才能够相等，单独定义是不相等的；
let maker={
    min:"John",
    age:30,
};
let clone={}
for(let key in maker){
    clone[key]=maker[key];
}//clone是带有相同内容的完全独立体
clone.name="Pete";
console.log(maker.name)//还是原来的“John";
let p1={yes:ture};
let p2={no:ture};
Object.assign(maker,p1,p2);
//现在将p1和p2的属性全拷贝到了maker中；

