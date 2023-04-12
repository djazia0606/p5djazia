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

    addToCartButton.addEventListener("click", function() {
    const userInput = prompt("Veuillez saisir une valeur :");
    console.log(userInput);
    });

    const addToCartButton = document.getElementById("addToCart");

    addToCartButton.addEventListener("click", function() {
    const id = "123"; // à remplacer par l'id de l'article
    const color = "rouge"; // à remplacer par la couleur sélectionnée par l'utilisateur
    const quantity = 1; // à remplacer par la quantité sélectionnée par l'utilisateur
    const cartItem = [id, color, quantity];
  
  // Récupération des éléments du panier dans le localStorage (s'il existe)
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  // Ajout du nouvel élément dans le tableau d'éléments du panier
  cartItems.push(cartItem);
  
  // Enregistrement du tableau d'éléments du panier dans le localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});


    
