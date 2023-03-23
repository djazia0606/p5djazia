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
 console.log(data)
})
.catch(function(err){
    console.log(err)
})
function displayProduct(data){
    const addTitle = document.querySelector('#title').innerHTML +=`
         
            <h3 id="product.name">${data.name}</h3>
              
             `   
    
}
    

