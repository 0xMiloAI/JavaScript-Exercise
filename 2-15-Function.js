let message="eenen";//声明外部变量
function showmessage(){
    let message="haha"//声明局部变量；
    alert("hello,world1");
}
showmessage();
function checkAgea(age){
    return (age>18)?ture:confirm("Do you have your parents permission?")
}//return (age>18) || confirm...;