const login=()=>{
    return `
 
<div class="registerForm">
    <form action="" class="login">
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

export default login