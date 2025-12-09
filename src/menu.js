export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    const ul = document.createElement('ul');

    const items = ["Pizza Margherita", "Chocolate Cake", "Lasagna"];
    items.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
     });

    content.appendChild(ul);
}