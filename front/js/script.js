

/**
 * 1 recuperer les articles via l'API
 * 2 construire un html
 * 3 injecter html dans le dom=generer l'html
 * */

fetch("http://localhost:3000/api/products")
.then(function(reponse){
    if(reponse.ok){
        return reponse.json()
    }
})
.then(function(data){
 displayProducts(data)
})
.catch(function(err){
    console.log(err)
})

function displayProducts(products){
    for (let i = 0; i < products.length; i++) {
            const product = products[i];
            document.querySelector('#items').innerHTML +=`
    
            <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">}${product.description}</p>
            </article>
            </a>
             `   
    }
}
    

 

