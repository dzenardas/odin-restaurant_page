export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Pizza Paradise!";
    content.appendChild(headline);

    const subtitle = document.createElement('p');
    subtitle.textContent = "The best authentic Italian pizza in Vilnius";
    subtitle.className = 'subtitle';
    content.appendChild(subtitle);

    const description = document.createElement('p');
    description.textContent = "We've been serving delicious wood-fired pizzas made with fresh ingredients and traditional Italian recipes.";
    content.appendChild(description);

    const featuresTitle = document.createElement('h2');
    featuresTitle.textContent = "Why Choose Us?";
    content.appendChild(featuresTitle);

    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'features-grid';

    const features = [
        { icon: 'mdi-fire', title: 'Wood-Fired Oven', desc: 'Traditional cooking method' },
        { icon: 'mdi-leaf', title: 'Fresh Ingredients', desc: 'Locally sourced daily' },
        { icon: 'mdi-silverware-fork-knife', title: 'Expert Chefs', desc: 'Trained in Italy' },
        { icon: 'mdi-truck-fast', title: 'Fast Delivery', desc: 'Hot pizza in 30 minutes' }
    ];

    features.forEach(feature => {
        const box = document.createElement('div');
        box.className = 'feature-box';

        const icon = document.createElement('i'); 
        icon.className = `mdi ${feature.icon}`; 

        const title = document.createElement('div');
        title.className = 'feature-title';
        title.textContent = feature.title;

        const desc = document.createElement('div');
        desc.className = 'feature-desc';
        desc.textContent = feature.desc;

        box.appendChild(icon);
        box.appendChild(title);
        box.appendChild(desc);
        featuresContainer.appendChild(box);
    });

    content.appendChild(featuresContainer);
}
