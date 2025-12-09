export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = "Get In Touch";
    content.appendChild(contactHeadline);

    const contactGrid = document.createElement('div');
    contactGrid.className = 'contact-grid';

    const contacts = [
        { icon: 'mdi-email', title: 'Email', info: 'info@pizzaparadise.lt' },
        { icon: 'mdi-phone', title: 'Phone', info: '+370 123 456 789' },
        { icon: 'mdi-map-marker', title: 'Address', info: 'Pizza Street 123, Vilnius' },
        { icon: 'mdi-clock', title: 'Opening Hours', info: 'Mon-Sun: 11:00 - 23:00' }
    ];

    contacts.forEach(contact => {
        const box = document.createElement('div');
        box.className = 'contact-box';

        const icon = document.createElement('i');
        icon.className = `mdi ${contact.icon} contact-icon`;

        const title = document.createElement('div');
        title.className = 'contact-title';
        title.textContent = contact.title;

        const info = document.createElement('div');
        info.className = 'contact-info';
        info.textContent = contact.info;

        box.appendChild(icon);
        box.appendChild(title);
        box.appendChild(info);
        contactGrid.appendChild(box);
    });

    content.appendChild(contactGrid);
}
