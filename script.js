const foods = [

  {
    name: "Burger",
    price: "$10",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },

  {
    name: "Pizza",
    price: "$15",
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b"
  },

  {
    name: "Pasta",
    price: "$12",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
  },

  {
    name: "Sandwich",
    price: "$8",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  }

];

const menuContainer = document.getElementById("menu-container");

if(menuContainer){

  foods.forEach(food => {

    menuContainer.innerHTML += `

      <div class="card">

        <img src="${food.image}" alt="${food.name}">

        <h3>${food.name}</h3>

        <p>${food.price}</p>

        <button onclick="orderFood('${food.name}')">
          Order Now
        </button>

      </div>

    `;

  });

}

function orderFood(foodName){

  alert(foodName + " added to cart!");

}