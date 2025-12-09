export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const p = document.createElement('p');
    p.textContent = "Email: info@myrestaurant.com | Phone: 123-456-7890";
    content.appendChild(p);
}