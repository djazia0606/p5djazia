console.log("hello")


/**recuperation de l'id dans l'url */
 



 const urlcourante = document.location.href; 
 const url = new URL(urlcourante);
 const id = url.searchParams.get("id");
 console.log(id);

 


 fetch("http://localhost:3000/api/products/"+id)
.then(function(reponse){
    if(reponse.ok){
        return reponse.json()
    }
})
.then(function(data){
displayProduct(data)
 //console.log(data)
})
.catch(function(err){
    console.log(err)
})
function displayProduct(data){
    const addTitle = document.querySelector('#title').innerHTML +=`
         <h3 id="product.name">${data.name}</h3>
        `   
    const addPrice = document.querySelector('#price').innerHTML +=`
         <p id="productPrice">${data.price}</p>
        `   
    const addDescription = document.querySelector('#description').innerHTML +=`
         <p id="productDescription">${data.description}</p>
    
         `  
    
    let mesDivs = document.getElementsByClassName('item__img');
    let maDiv = mesDivs[0];
    let imageElement=document.createElement('img')
    imageElement.src =data.imageUrl
    imageElement.alt=data.altTxt
    maDiv.appendChild(imageElement)



    console.log(maDiv)

    
    let addOption = document.querySelector('#colors')
     
    for (let i = 0; i<data.colors.length; i++){
        
        const option = document.createElement('option'); 
        option.value = data.colors[i]; 
        option.textContent = data.colors[i]; 
        addOption.appendChild(option); 
        
    }
    

    

}
const addToCartButton = document.getElementById("addToCart");

    
    
let colorSelect = document.querySelector('#colors')
colorSelect.addEventListener("change", function() {
    let color= colorSelect.value
    console.log(color);
});

let itemQuantity =document.querySelector('#quantity')
itemQuantity.addEventListener("change", function() {
    let quantity = itemQuantity.value
    console.log(quantity);
});


addToCartButton.addEventListener("click", function() {
    
                console.log(id);
                console.log(colors);
                console.log(quantity);
                });

    const item = {
                    id: id,
                    color: colorSelect.value,
                    quantity: itemQuantity.value,
    }
                  



    
