/*
可以中断调试器的有断点（breakpoint）
快速跳转至代码中的断点（通过点击右侧面板中的对应的断点）。
通过取消选中断点来临时禁用对应的断点。
通过右键单击并选择移除来删除一个断点
*/
function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    debugger;  // <-- 调试器会在这停止
  //第二个就是debugger命令
    say(phrase);
  }