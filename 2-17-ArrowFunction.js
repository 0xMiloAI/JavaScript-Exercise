//箭头函数
let func=function(a1,a2,a3){
return Expression;
}
let func2=(ar1,ar2,ar3)=>expot;//箭头指向返回值；
//如果没有参数，则保留括号
let age=prompt("How old are you?",18);
let welcome=(age<18)?()=>console.log("Hello!"):()=>console.log("Greeting");
welcome();
let ask=(quesion,yes,no)=>confirm(quesion)?yes():no();
ask(
    "Are you agree",
    function(){console.log("You agree!")},
    function(){console.log("You canceled!")}
);

