import login from "./login.js";
import register from "./register.js";

const root=document.getElementById('root')
// console.log(root);

const allanchors = document.querySelectorAll('a')
// console.log(allanchors);

const router ={
    "/login":login,
    "/register":register
}

function handleClick(e){
    e.preventDefault()
    console.log(e.target);

    let path = e.target.pathname;
    history.pushState(null,"","${path}")
    root.innerHTML=router[path]()
    // if(path=="/login"){
    //     root.innerHTML=login()
    // } else if(path=="/register"){
    //     root.innerHTML=register()
    // }
}

allanchors.forEach((anchor)=>{
    anchor.addEventListener("click",handleClick)
        // e.preventDefault()
});