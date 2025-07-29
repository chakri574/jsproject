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
if(name=="profileImage"){
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


function checkPasssword(e){
 let {name,value}=e.target
  if(name=="re-password"){
// console.log(e.target.parentElement);

    state.password!=value?e.target.parentElement.style.borderBottom="3px solid red":e.target.parentElement.style.borderBottom="3px solid black"
  }else{
    return
  }
}

function handelSubmit(e){

e.preventDefault()
// console.log(state);
let {name,email,password,address,profileImage}=state
if(!name||!email||!password||!address||!profileImage){
  alert("All Feilds are mandatory")
  return
}


if(password!=state["re-password"]){
  console.log(password,state);
  alert("password and re-passsword should match")
  return
}
// console.log(state);



let payload={email,password,profileImage,address,name}
// console.log(payload);
let formData = new FormData()
for(let data in payload){
  formData.append(data,payload[data])
}

(async()=>{
try {
    let res=await fetch("http://localhost:5000/api/auth/register",{
    method:"POST",
    body:formData
  })
  let data=await res.json()
  console.log(data);
} catch (error) {
  console.log(error);
  alert("Something went wrong")
}

})();
}



form.addEventListener('submit',handelSubmit)
inputs.forEach(input=>{
  input.addEventListener('change',handelChnage)
})

inputs.forEach(input=>{
  input.addEventListener('input',checkPasssword)
})
textArea.addEventListener('change',handelChnage)
