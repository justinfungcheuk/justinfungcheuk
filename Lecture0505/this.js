var name = "global";

// window 是一個 object！

var obj1 = {   // obj1 的世界，name 是 obj1 的 variable
    // = 等號後是一個 value
    name: "obj1",
    fun1: function(){ // fun1 是一個 variable
        console.log("From fun1 in obj1")
        console.log(this); // 該 this 是在 object內運行，所以它是 obj1，可以視它為一個代數 - 將 this 代替為 obj1
        // this 的重要性！注意！是告訴我們，它在 object 的世界，指向在那一個 object 運行，來 call 該 function
        
        console.log(this.name); 
        /* this 指向 name 
        - 而它是可以指向 window 或 object
        - 或者它可以是一個
        */
    }
}




var obj2 = {
    name: "obj2",
        fun2: obj1.fun1
}

obj1.fun1();
obj2.fun2();

// function 是一個地址

/**
 * obj.name - name 是 obj 的 variable - 而該 variable 是 under object
 * fun1 也是 variable，只是它和 name 儲存的內容不同
 * fun1 起步點是一個地址
 * 
 * 
 * window.name = "global"
 * obj.name : "obj1" 將 obj1 分配到 obj.name
 * 以上的 window 和 object 只是文法上的不同，但是它們都是只想 name 這個 varibale
 */

fun1 = function(){} // 該寫法是 function expression
fun1:function(){} // 在 object 下，它也是一個 function expression
// 將 function(){} 儲存到 fun1