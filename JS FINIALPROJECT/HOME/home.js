let product=[]
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product)
    })
}


function  displayProduct(prod){
    let output="";
    prod.map((val)=>{
        output +=`
        <main>
        <div id="image">
        <img src="${val.thumbnail}"/>
        </div>
        <h3> ${val.title}</h3>
        <div class="flex_details">
         <p class="rating">Rating : ${val.rating} ⭐</p>
         <p>Price : &#8377;${Math.floor(val.price*90)}</p>
        </div>
        <div class="flex_details"> <p>Instock :${val.stock}</p>
         <button onclick="Details('${val.id}')" id="details">Details</button></div>

        </main>
        `
    })
    document.getElementById("product_container").innerHTML=output;
}
fetchData()
document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return (v.title.toLowerCase().includes(searchTerm)||v.category.toLowerCase().includes(searchTerm));
    })
    displayProduct(filteredProduct)
})

function Details(productid){
    localStorage.setItem("productID",productid);
    window.location.href="../ViewDetails/ViewDetail.html"
}