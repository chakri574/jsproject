import addProducts from "./addProducts.js"

let home=()=>{
  setTimeout(() => {
    let anchor = document.querySelector("#add")
    const handelClickAnchor=(e)=>{
        e.preventDefault()
        history.pushState({},"",`${e.target.pathname}`)
        root.innerHTML = addProducts()
    }
    anchor.addEventListener('click',handelClickAnchor)
})

    return `
    <h1>Home</h1>
    <a href="addProduct" id="add" >Add Product</a>
    `
}


export default home