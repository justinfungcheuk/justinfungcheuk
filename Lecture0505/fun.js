foo(); // 註冊一個 function 地址
var foo = 2;  // 清除地址，洗走 function，assgin 一個整數2給 foo
function foo() {console.log("bar")}; // declare function foo()
//function foo() {console.log("foo")}; // override 第三行 - passing pharse 已經運行失效，導致不會進入 excution pharse
foo = function(){console.log("foo")};
foo(); // (2) 是不可運行
