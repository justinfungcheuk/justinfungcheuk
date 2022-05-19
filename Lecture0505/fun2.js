const alan = {
    name: "Peter",
    sing(){ // object 內才可以用該寫法 sing(){} function
        console.log("sing", this); 
        var anotherfunc = function(){
            console.log("function inside function",this); 
            // 因為 sing()被 anotherfunc取代，所以所有沒有主調用this的只是以單一個 this 存在的，都是指向 window
        };
        return anotherfunc()
    }
};

alan.sing()(); // alan.sing()運作後，就是 alan.sing() = anotherfunc，因為第一個括號被 anotherfunc() 取代
// 第二個括號(), anotherfunc() 內的 this 就是 window，因為 alan.sing()已經不存在



/**
 * 1. NEW
 * 2. bind()
 * 3. obj.fun()
 * 4. default this
 */

/**
 * 例子：
 * function a(){return b}
 * function b(){return c}
 * function c(){return 1}
 * a()()() // a() -> b()() -> c(1) - return 1
 */