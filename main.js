const cardElement = document.querySelector(".card-container")

const fetchData =()=>{
    data.forEach((product)=>{
        cardElement.innerHTML += `
        <div class="card">
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