
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
            <input type="password" name="password" placeholder="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$">
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
            <input type="file" accept=".png,.jpgx"  >
        </div>

        <div>
           <button>Submit</button>
        </div>
    </form>
</div>

    `
}

export default register
