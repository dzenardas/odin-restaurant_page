export default function loadHome() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to My Restaurant!";
    content.appendChild(headline);

    const p = document.createElement('p');
    p.textContent = "Come enjoy a cozy atmosphere and delicious meals!";
    content.appendChild(p);
}