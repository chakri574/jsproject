import home from "./home.js"

const login=()=>{
    return `
 
<div class="registerForm">
    <form action="" class="loginForm">
        <div>
            <h1>Login</h1>
        </div>
       
        <div>
            <input type="email" name="email" placeholder="email">
            <span><i class="fa-solid fa-envelope"></i></span>
        </div>
        <div>
            <input type="password" name="password" placeholder="password">
            <span><i class="fa-solid fa-key"></i></span>
        </div>

      

        <div>
           <button>Submit</button>
        </div>
    </form>
</div>
 
    `
}


export let handelLoginbind=()=>{
        const state={
  setState(name,value){
    this[name]=value
  }
}
    const form=document.querySelector('form')
    const inputs=document.querySelectorAll('input')
    function handelChnage(e){
        let {name,value}=e.target
        state.setState(name,value)
}
function handelSubmit(e){
e.preventDefault()
let {email,password}=state    
let payload={email,password};
console.log(payload);

(async()=>{
   try {
     let res=await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json"
        }
    })
    console.log(res);
    let data=await res.json()
    console.log(data);
    if(res.status==200){
        alert(`${data.message}`)
        history.pushState({},"","/home")
        root.innerHTML=home()
    }else{
        alert(`${data.message}`)

    }
   } catch (error) {
    console.log(error);
    alert("Something went wrong")
    
   }
})()
}

inputs.forEach(input=>{
input.addEventListener('change',handelChnage)
})
form.addEventListener('submit',handelSubmit)
}

export default login