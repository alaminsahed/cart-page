const cardElement = document.querySelector(".card-container");
const cartElement = document.querySelector(".cart-products");

const fetchData =()=>{
    data.forEach((product)=>{
        cardElement.innerHTML += `
        <div class="card" onClick="addCart(${product.id})">
             <div class="card-img">
                 <img src="${product.img}" class="${product.name}">
             </div>
             <div class="item-body">
                <p class="text-center">${product.name}</p>
             </div>
            </div>
        
        `
    })

}

fetchData();

let cart=[];

const addCart=(id) =>{
   let duplicate= cart.find(item => item.id === id);
   if(duplicate)
   {
         duplicate.qty = duplicate.qty+1;
    
   }
   else{
    const cartProduct = data.find((product)=>product.id === id);
    //   console.log(cartProduct);
        
        cart.push({...cartProduct, qty: 1})
      
   }
   console.log(cart);
  update()
}

const update=()=>{
    showCart();
      
}

const showCart=()=>{
    // console.log(cartElement.innerHTML);
    cartElement.innerHTML = null;
    cart.forEach((item)=>{
        console.log(item.qty);
        cartElement.innerHTML += `
        <table>
        <tr>
          <td>
            <div class="card cart-card">
            <span class="cart-qty">${item.qty}</span>
              <img src="${item.img}" />
            </div>
          </td>
          <td>${item.name}</td>
          <td>BDT:${item.price}</td>
          <td><i class="fa fa-trash" aria-hidden="true" onClick="removeCart(${item.id})"></i></td>
        </tr>
      </table>
        `
    })
}


const removeCart=(id)=>{
   cart = cart.filter(item=>item.id !== id);
   update();
}


