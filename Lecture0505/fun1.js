var food = 'fish'; // passing pharse 
var tast = function(){ // tast - f 抄去 heap
    console.log("initial food" + this.food); // 因為 var 所以 food 是 undefind
    // 因為在 excution content，在 tast內我們找不到 food的定義，所以它是 undefind - 因此它是 "initial food" undefind
    var food = "meat"; // 註冊 local variable
    console.log("final food" + food); // "final food" meat - 獲取 local 的 food
};

tast(); // 該 tast 是由 window 所來


var food = 'fish'; // passing pharse 
var tast = function(){ // tast - f 抄去 heap
    console.log("initial food" + food); // 因為 var 所以 food 是 undefind
    // 因為在 excution content，在 tast內我們找不到 food的定義，所以它是 undefind - 因此它是 "initial food" undefind
    let food = "meat"; // 註冊 local variable
    // variable 沒有做 assignment，該 let 會被放到 TDZ，執行到 let 會即時死不再運行該代碼
    console.log("final food" + food); // "final food" meat - 獲取 local 的 food
};

tast(); // 該 tast 是由 window 所來

const food = 'fish'; // passing pharse 
var tast = function(){ // tast - f 抄去 heap
    console.log("initial food" + food); // 因為 var 所以 food 是 undefind
    // 因為在 excution content，在 tast內我們找不到 food的定義，所以它是 undefind - 因此它是 "initial food" undefind
    food = "meat"; // 註冊 local variable

    console.log("final food" + food); // "final food" meat - 獲取 local 的 food
};

tast(); // 該 tast 是由 window 所來



// function 可以加 () 去運行
fun()

// object 不可以直接加括號 () 運行
obj = {
    name:"alan",
    female:"boy"
}
