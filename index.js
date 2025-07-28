import login from "./login.js"
import register from "./register.js"

const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":login,
    "/register":register
}

function handelClick(e){
  e.preventDefault()
//   console.log(e.target.pathname);
let path=e.target.pathname
  history.pushState(null,"",`${path}`)
root.innerHTML=router[path]()
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
  root.innerHTML=router[path]()
}
  
})

const state={
  setState(name,value){
    this[name]=value
  }
}
const form=document.querySelector('form')
const inputs=document.querySelectorAll('input')
const textArea=document.querySelector('textarea')


function handelChnage(e){
let {name,value,files}=e.target
// if(name!="re-password")
{
  if(name=="image"){
value=files[0]
const reader=new FileReader()
reader.onload=function(){
  form.style.backgroundImage=`url(${reader.result})`
}
reader.readAsDataURL(value)
state.setState(name,value)
  }else{
  state.setState(name,value)

  }
}
}
function checkPassword(e){
  let {name,value} = e.target
  if(name == "re-password")
    {
      // console.log(e.target.parentElement);
      
      state.password != value?e.target.parentElement.style.boderbottom ="3px solide red":e.target.parentElement.style.boderbottom = "3px solide green"
    }else{
      return
    }
}

function handelSubmit(e){
e.preventDefault()
// console.log(state);
let {name,email,password,address,image} = state
if(!name || !email || !password || !address || !image)
{
  alert("ALL FIELDS ARE MANDATORY")
  return
}

console.log(password,state);
if(password != state["re-password"])
  {
    alert("PASSWORD AND RE-PASSWORD SHOULD BE MATCH")
    return
  }
  // console.log(state);

  let payload = {name,email,password,address,image}
  console.log(payload);
  
}

form.addEventListener('submit',handelSubmit)
inputs.forEach(input=>{
  input.addEventListener('change',handelChnage)
})
inputs.forEach(input=>{
  input.addEventListener('inpute',checkPassword)
})
textArea.addEventListener('change',handelChnage)