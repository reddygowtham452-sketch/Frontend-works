document.addEventListener("DOMContentLoaded",()=>{
    displayCart()
})
function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let totalBill=0;
    if(cart.length===0){
        cartContent.innerHTML="<h2>Your Cart is empty. Start shopping</h2>";

    }
    cart.map((product,i)=>{
        totalBill +=Math.floor((product.price)*90)
        let newProd=document.createElement("div")
        newProd.setAttribute("class","prod-info")
        newProd.innerHTML=`
             <main>
                      <div id="flex_details">
        <div id="image"> 
            <img src="${product.thumbnail}"/></div>
        <div id="para">
            <h3>${product.title}</h3>
             <p>${"<b>Brand</b> : "+product.brand}</p>
                    <p>${"<b>Category</b> : "+product.category}</p>
                    <p>${"<b>Description</b> : "+product.description}</p>
                    <p>${"<b>Price : &#8377;</b><span>"+Math.floor((product.price)*87)}</span></p>
                   
        </div>
        <div> <button onclick="RemoveFromCart(${i})" id="remove">Remove</button></div>

         </div></main>
        `;
        cartContent.append(newProd)
    })
   
     totalPrice.append(totalBill)
}
 function RemoveFromCart(index){
        let cart=JSON.parse(localStorage.getItem("cart"));
        cart.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(cart))
         location.reload()
     }