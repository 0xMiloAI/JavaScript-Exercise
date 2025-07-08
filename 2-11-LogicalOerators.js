//逻辑词||和&&，参照离散数学里的析取与合取
//||与析取对应   &&与合取对应
console.log(undefind || null || 0); //或运算寻找第一个真值
//若都为假则输出“Anonymous”
console.log(1 && null && 3);
//与运算寻早第一个假值，若都为真则输出最后一个值；
console.log(!0);
//!操作将数转化成布尔类型；;
let age = prompt("age?", "");
if (age >= 14 && age <= 90) {
  console.log("Right");
} else {
  console.log("wrong");
}
let username=prompt("Who's there?","");
if(username==='' || username===null){
  console.log("Canceled");
}else if(username==="Admin"){
  let password=prompt("password?","");
  if(password==='' || password===null){
    console.log("Canceled");
  }
  else if(password==="TheMaster"){
    console.log("Welcome!");
  }
  else{
    console("Wrong password");
  }
}
else{
  console.log("I don't know you");
}
