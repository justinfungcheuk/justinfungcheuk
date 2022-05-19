const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        }) 
        document.body.innerHTML = output;
    },1000);
}

function creatPost(post, callback){  // callback = getPosts地址
    setTimeout(() => {
        posts.push(post); // step1 - 2秒後將 {title:"Post three", body:"this is post three"} 該內容擺入去 const posts = []
        callback(); // step2 - 1秒 - run getPosts - callback是一個代數 - 代替 getPosts
        // 3秒後就會同步顯示所有內容
        // 加括號就是 excution，沒有括號就是 single value
    },2000);
}
// 當 creatPost()的post運行完畢，之後才運行 callback該參數，從而獲取 post three，顯示到瀏覽器上
creatPost({title:"Post three", body:"this is post three"}, getPosts); // getPosts 抄入去 callback, 所以運行 callback() 即是運行 getPsots()
/**
 * js 所有的 function 都是一個地址，所以我們可以將它放在任何位置都可以
 * - 看見括號()就是運算
 */