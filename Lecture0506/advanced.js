

function foo(){
    var bar = "bar1";
    baz();
}

function baz(){
    console.log(this.bar); // 只要 function 都是 under window 運行，所以都是指向 window
}

var bar = "bar2";
foo(); // window.foo() 於 window 的 object 運作，於 window 運作時，無論於哪一層都是 window
//-------------------------------------------

function foo(){
    var bar = "bar1";
    this.bar = baz; // this.bar = window.bar 
    this.baz();
}

function baz(){
    console.log(this.bar);
}

var bar = "bar2";
foo();

// passing pharse 只看 function var let const
/**
 * window 環境下
 * bar = "bar2"
 * 
 * excution content
 * foo
 * bar = "bar1"
 * passing pharse:
 * bar -> undefined 
 * 
 * passing pharse：
 * foo -> f
 * baz -> f
 * bar
 * 
 * Heap
 * {17,18,19}
 * {23}
 */


function foo(){
    var bar = "bar1"; 
    this.baz = baz; // this.baz = window.baz
    this.baz(); // call function baz(){} 
}

function baz(){
    console.log(this.bar); // run this.bar = window.bar = "bar2"
}

var bar = "bar2";
foo();

//-------------------------------------------
// explicit binding rule 3
function foo(){
    console.log(this.bar);
}
var bar = "bar1";
var obj = { bar : "bar2"};

foo(); // window.bar = "bar1"
foo.call(obj); // call 的作用是將 obj與 foo結合 = obj.foo() 代表用 obj 來 call 一個 function
// function.call(obj) - external obj

//-------------------------------------------
// hard binding 
/**
 * hard binding 例子：
 * x = foo.bind(obj)
 * obj = {x : foo}
 */
function foo(){
    console.log(this.bar);
}
var obj = { bar : "bar"};
var obj2 = { bar : "bar2"};
var orig = foo;
foo = function(){
    orig.call(obj); //obj.foo()
}

foo(); // "bar"
foo.call(obj2); // obj2.foo()
//-------------------------------------------
// hard binding = 不能更改
function bind(fn, o){ //closue 會將 local variable 儲存起來，變成 private variable，即是會將 fn, o 永久儲存起來
    return function(){ 
        //line97&98 是一個 closue
    // closue - function inside function 由於 closue的關係，會將 local variable 將 fn, o 變成 private variable, 會永遠儲存起來， 所以它們兩個沒有被清除
        fn.call(o);
    };
}
function foo(){
    console.log(this.bar); // this 是  obj 所以 this.bar = obj.bar = "bar"
}

var obj = { bar : "bar"};
var obj2 = { bar : "bar2" };

foo = bind(foo, obj); // bind(foo, obj);  -》 bind(fn, o) -》 bind(foo, obj)
/* 將 foo,obj 變為 line97 的 parameter，即是將 fn,o 取代為 foo, obj
   將兩個 variable foo 和 obj 儲存在該 bind() function
   所以 bind(foo, obj); 會變成 line97
*/

foo(); //"bar"
foo.call(obj2); // "bar" - obj2.foo()


//-------------------------------------------
var obj = { bar : "bar"};
foo = foo.bind2(obj);

foo("baz"); // "bar baz"
//-------------------------------------------
// hard binding 
function foo(baz, bam){ 
    /* closue 可以變成 query function，例如：有兩個 variable，但只是先儲存起一個 variable，另一個稍後再用
    例如：foo = foo.bind(obj, "baz");只將其中的 "baz" 儲存到 function foo("baz")
    foo("bam"); 可以填補另一個 variable bam
    */
    console.log(this.bar + "" + baz + "" + bam); // 這裡的 baz 和 bam 就是 line128的 baz 和 bam
}

var obj = { bar : "bar"};
foo = foo.bind(obj, "baz"); // bind(obj, "baz"); 該兩個參數會變成 private variable
// bind()借其他的variable

foo("bam"); // "bar baz bam"
// query function： foo("bam");將它填入 line 128 的 function foo(bam)

//-------------------------------------------
// this : new assignment is the last step
function foo(){
    this.baz = "baz";
    console.log(this.bar + "" + baz); // underfined underfined
}
var bar = "bar";
var baz = new foo()
/**
 * new 需要運行以下三步：
 * step1:
 * new{this} //this 內是沒有東西，所以 console.log(this.bar + "" + baz); 會出現兩個 underfined underfined
 * step2:
 * 執行 foo() - line145 
 * step3: 在第三步進行 assginemnt 的分配
 * baz={baz:, this:baz} 將obj的地址分配到variable，這裡即是將 obj分配到baz
 * 
 * 例如：var 第三步baz = 第一步new 第二步foo()
 */

//-------------------------------------------
function foo(){
    this.baz = "baz";
    console.log(this);
    console.log(this.bar + " " + baz) // "undefined undefined"
}
var bar = "bar";
var baz = new foo(); // this.bar isn't inside the object, so create a variable
// new 內的 baz = {this}
baz.baz;
//-------------------------------------------
/**
 * new blind obj 
 */


 function something(){
     this.hello = "hello"; // this = obj1
     console.log(this.hello, this.who) // this = obj1
 }

 var who = "global",
 foobar,
 bazbam,
 obj1 = { who : "obj1", something: something} 
obj2 = { who: "obj2"};

something(); //"hello" "global"
console.log(hello)// "hello"

obj1.something(); //"hello" "obj1"    
console.log(obj1.hello); //"hello"

// 好用的 debug工具 selenium / cypress

obj1.something.call(obj2); // "hello" "obj2"
/**
 * obj2 取代 obj1 
 */
console.log(obj2.hello) // "hello"


foobar = something.bind(obj2); // foobar = obj2.something 《-- 將該地址抄入 foobar
/**
 * 該 something 是 window.something, 所以它是 line179 的 something()函數
 */
foobar() // "hello" "obj2"
foobar.call(obj1); // "hello" "obj2"
// obj1.foobar()

bazbam = new something(); // "hello" "undefind" new 最高權限
console.log(bazbam.hello); // "hello"

bazbam = new obj1.something; // "hello" "undefined"
bazbam = new foobar(); //"hello undefined"


/**
 * 權限 - 優先次序
 * 1. new
 * 2. call/apply - explicit this
 * 3. context object - obj
 * 4. default: global object (except strict mode = undefined)
 */

/**
 * project 結構
 * src - main.js / style.css
 * asset - jpg
 * model - database  
 * view - layout（component）(html)
 * control - route
 */