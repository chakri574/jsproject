const register=()=>{
    return `
  
<div class="registerForm">
    <form action="">
     <div>
            <h1>Register</h1>
        </div>
        <div>
            <input type="text" name="name" placeholder="Name">
            <span><i class="fa-solid fa-signature"></i></span>
        </div>
        <div>
            <input type="email" name="email" placeholder="email">
            <span><i class="fa-solid fa-envelope"></i></span>
        </div>
        <div>
            <input type="password" name="password" placeholder="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{6,}$">
            <span><i class="fa-solid fa-key"></i></span>
        </div>
         <div>
            <input type="password" name="re-password" placeholder="re-password">
            <span>

          
                <i class="fa-solid fa-repeat"></i>
            </span>
        </div>
        <div>
            <textarea name="address" placeholder="address"></textarea>
            <span><i class="fa-solid fa-location-dot"></i></span>
        </div>
        <div>
            <input type="file"  name="profileImage" >
        </div>

        <div>
           <button>Submit</button>
        </div>
    </form>
</div>



    `
}


export let handelRegisterBind=()=>{
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

// console.log(password,state);
if(password!=state["re-password"]){
  alert("password and re-passsword should match")
  return
}
// console.log(state);
let payload={email,password,profileImage,address,name}
// console.log(payload);
let formData=new FormData()
for(let data in payload){
  formData.append(data,payload[data])
};

(async()=>{
try {
    let res=await fetch("http://localhost:5000/api/auth/register",{
    method:"POST",
    body:formData
  })
  console.log(res);
  let data=await res.json()
  // console.log(data);
  if(res.status==201){
  alert(`${data.message}`)
  }else{
    alert("Something went wrong")
  }
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
}

export default register