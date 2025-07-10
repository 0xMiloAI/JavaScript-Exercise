function User(name){
    this.name=name;
    this.isAdmin=false;
}
let user=new User("Jack");
console.log(user.name);//Jack
//就是创建并分配给this
function maker(name){
    if(!new.target){//用于判断函数是否被new调用
        return new maker(name);
    }
    this.name=name
}
let john=maker("john");
console.log(john.name);
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let joha = new User("John");
  
  joha.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */