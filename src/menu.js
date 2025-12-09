export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Our Pizza Menu";
    content.appendChild(headline);

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const pizzas = [
        { 
            name: "Margherita", 
            desc: "Classic pizza with fresh tomato sauce, mozzarella cheese, and aromatic basil leaves.",
            price: "12€",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/960px-Pizza_Margherita_stu_spivack.jpg"
        },
        { 
            name: "Pepperoni", 
            desc: "America's favorite! Loaded with spicy pepperoni slices, mozzarella cheese, and our signature tomato sauce.",
            price: "14€",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Pepperoni_Pizza_%2829204589095%29.jpg/960px-Pepperoni_Pizza_%2829204589095%29.jpg"
        },
        { 
            name: "Quattro Formaggi", 
            desc: "Four cheese blend: mozzarella, gorgonzola, parmesan, and fontina.",
            price: "15€",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/960px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg"
        }
    ];

    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.className = 'pizza-card';

        const img = document.createElement('img');
        img.src = pizza.img;
        img.alt = pizza.name;
        img.className = 'pizza-image';

        const info = document.createElement('div');
        info.className = 'pizza-info';

        const name = document.createElement('h3');
        name.className = 'pizza-name';
        name.textContent = `${pizza.name}`;

        const desc = document.createElement('p');
        desc.className = 'pizza-desc';
        desc.textContent = pizza.desc;

        const price = document.createElement('div');
        price.className = 'pizza-price';
        price.textContent = pizza.price;

        info.appendChild(name);
        info.appendChild(desc);
        info.appendChild(price);

        pizzaCard.appendChild(img);
        pizzaCard.appendChild(info);
        menuContainer.appendChild(pizzaCard);
    });

    content.appendChild(menuContainer);
}