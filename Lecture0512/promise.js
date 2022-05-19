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

function creatPost(post){
    return new Promise((resolve, reject) => { // new = {} 所以 creatPost() -> {resolve/reject}
        // Promise objecgt 有兩個 object 的結果 -> resolve / reject
    setTimeout(() => {
        posts.push(post);
        const error = false;
        if(!error){
            resolve(); // 無問題就運行 .then()
        }else{
            reject("error : data error"); // 有問題就運行 .catch()
        }
    },2000);
});
}

/*
creatPost({
    title:"Post three", body:"this is post three"
})
.then(getPosts)
.catch(err => console.log(err));
*/

async function init(){
    await creatPost({ title : "post three", body: "this is post three" });
    // async await 是可以確定 creatPost()運行完畢，之後才運行 getPosts()
    getPosts();
}

init();
