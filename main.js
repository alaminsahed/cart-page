const cardElement = document.querySelector(".card-container");
const cartElement = document.querySelector(".cart-products");
const priceElement = document.querySelector(".total-price");

//fetch data to show in UI
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

// cart functionality
let cart=[];

const addCart=(id) =>{
   let duplicate= cart.find(item => item.id === id);
   if(duplicate)
   {
         duplicate.qty = duplicate.qty+1;
    
   }
   else{
    const cartProduct = data.find((product)=>product.id === id);
    
        
        cart.push({...cartProduct, qty: 1})
      
   }

  update()
}

// when state change to the cart update the present data

const update=()=>{
    showCart();
    subtotal();
      
}

//show cart data in UI
const showCart=()=>{
    // console.log(cartElement.innerHTML);
    cartElement.innerHTML = null;
    cart.forEach((item)=>{
       
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

//remove product from cart
const removeCart=(id)=>{
   cart = cart.filter(item=>item.id !== id);
   update();
}

//subtotal

const subtotal= () =>{
    let total = 0;
    cart.map(item=>{
        total += item.price * item.qty;
    })
   priceElement.innerHTML = `
   <p>Discount: <span>BDT00</span></p>
   <p>Subtotal: <span>BDT${total}</span></p>
   <p>Tax(0%): <span>BDT00</span></p>
   <p>Total: <span>BDT</span></p>
   <button class="price-btn">PAY <span>BDT${total}</span></button>
   `
}




