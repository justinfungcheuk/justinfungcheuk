var name = "global";

// window 是一個 object！

var outter = function(){   


        console.log("From fun1 in obj1")
        console.log(this); // this 作用是告訴我們運行的 function， 它從哪裡而來
        /* this 指向 name 
        - 而它是可以指向 window 或 object
        - 或者它可以是一個
        */
       console.log(this.name);
       this.name = "hello";
       // 更新 object世界的其中一個 variable
       // this 是 object 的 variable，它是一個 代數
    }

// this 的重要性是告訴我們 this 是在什麼狀態下運行，可以是 window 或 object 的狀態下
/**
 * 如果 this 是在 object 
 */
var obj1 = {
    name: "obj1",
    fun1: outter
}

var obj2 = {
    name: "obj2",
    fun2: obj1.fun1
}

outter();
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