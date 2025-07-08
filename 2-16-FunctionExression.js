//函数是一个值；
let showmessage=function(){
    console.log("Hello");
};//末尾是有分号的；
function sayHi(){
    console.log("Hi");
}
let func=sayHi;
func();
function ask(question,yes,no){
    if(question()){
        yes();
    }
    else{
        no();
    }
}
function showok(){
    console.log("success!");
}
function showno(){
    console.log("failed");
}
function ques(){
    return confirm("Do you agree?");
}
ask(ques,showok,showno);