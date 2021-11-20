const array =[];
fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
      //console.log(completedata[2].title);
      let data1="";
      completedata.map((values)=>{
      data1+=`<div class="card">
    
       <input type="checkbox" value="${values.title}" id="${values.id}" onclick="addToCart(value,id)">
       <h1 class="title">${values.title}</h1>
       <img src="${values.image}" alt="img" class="images">
       
       <p>${values.description}</p>
       <p class="catagory">${values.category}</p>
       <p class="price">${values.price}</p>
      </div>`
  })
  document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})

//function to add selected items in array or cart
function addToCart(product,Id){
    console.log('after fetch call add');
    console.log(product);
    var checkbox = document.getElementById(Id);
    if(checkbox.checked == true){
        array.push(product);
    }else{
        removeItem(array,product);
    }
    showcart();
}

//function to show all selected item on html page
function showcart(){

     let output = ``;
     let size = array.length;
     if(size == 0){
         output +=`
         <div class="cart">
         <h3>Empty Cart<h3>
         </div>`;
     }
     else{
         for(i=0;i<size;i++){
             output +=`
             <div class="cart">
             ${(i+1)} -- ${array[i]}
             </div>`;
         }
     }
     document.getElementById(cart.id).innerHTML = output;
}

//function to remove unchecked items from array or cart
function removeItem(array,item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}