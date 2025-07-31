import addProducts from "./addProducts.js"
import home from "./home.js"
import login, { handelLoginbind } from "./login.js"
import register, { handelRegisterBind } from "./register.js"

const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":[login,handelLoginbind],
    // "/register":[register,handelRegisterBind],
    "/register":[register,handelRegisterBind]
}

function handelClick(e){
 e.preventDefault()
//  console.log(e.target.pathname);
 let path=e.target.pathname.replace("/ecommersfrontend","")
  history.pushState(null,"",`${path}`)
root.innerHTML=router[path][0]()
if(router[path][1]){
  router[path][1]()
}
}
allAnchors.forEach((anchor)=>{
    anchor.addEventListener("click",handelClick)
})
window.addEventListener('popstate',(e)=>{
  // console.log(location);
let path=location.pathname
if(path=="/index.html"){
root.innerHTML=""
}else{
  root.innerHTML=router[path][0]()
if(router[path][1])
  {
  router[path][1]()
  }
}
})

