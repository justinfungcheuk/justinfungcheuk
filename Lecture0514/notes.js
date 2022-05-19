simple = function (a){a=1}
// 將{ }內的資料 assign 到 simple
simple(1)
/**
 * ES5 var a
 * ES6 let a
 */

/*
{[[prototype]]}
this:window = simple
*/

//arrow function - 大括號代表一個地址的起步點，所以 simple 會儲存該地址 simple = {}
simple = (a) => {

}
    // arrow function 的底層 [[prototype]] 是沒有 this
    // 所以 expression function 和 arrow function 最大分別就是，arrow function 沒有 this，expression function 則有 this

    // obj = {fun => {this.a}}
    // 於 arrow function，例如：當 call   obj.fun() 時，它的 this 就是 obj, 因為它原本的 {} 內的是沒有 this 的，所以它要向上一層 upper scope 父層尋找 this，
       // 而上一層就是 obj，所以 obj 是它的 this
    
    


var b = 10;
// function expression
/**
 * this = window
 */
a = function(){
    console.log(this.b);  //1 由於是由 obj call 該 this，所以 obj.fun.b =1
    d = function(){
        console.log(this.b); //10
    }
    d();
}
//a();
// window.a(); // 因為 a 在 window運行，所以 this 會指向 window 運行 - global.a() = a() = window.a()
//console.log(b); //4


// arrow function
c = () => {
    //this.b = 3; // 由於 arrow function 沒有 this，所以它會向上一層尋找 this，而這裡的 this 就是 window 
    console.log(this.b); //10 原本沒有this，所以尋找上層的 var b = 10
    e = () => {
        console.log(this.b); //10
    }
    e(); 
}

obj = { 
    b : 1,
    fun : a,
    fun2: c
};
obj.fun(); // obj.fun() = obj.a()
console.log(b);
obj.fun2(); // 獲取 window 的 b
//window.c();
console.log(b); 




// Lecture 0514 - node.js arrow function - page 12 - 16
a = function(x,y){return x+y}
a = (x,y) => x+y;
b = function(x){}
b = (x) => {}
b = x => x++;

lucky = () => {
    console.log("The lucky number is "+ Math.floor(Math.random()*10) +"!")
}



median = (a,b,c,d,e) => {
    var array1 = [a,b,c,d,e];
    h = array1.sort((a,b) => a - b);
    console.log(h);
    console.log(array1);
}
median(1,5,8,7,6)



// Node.js destructuring assignment 解構賦值
x = array[0],
y = array[1],
[x,y] = [1,2]

// Object destructuring
// {a,b}={a:1,b:'a'};  syntax error
// Object destructuring 必須給予 var 聲明變量來給予賦值 例如：var {a,b} = {a:1,b:'a'} 聲明變量來給予賦值
// Object destructuring 必須給予括號() 來聲明變量來給予賦值 例如：({a,b}={a:1,b:'a'});
