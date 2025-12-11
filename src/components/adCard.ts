import './adCard.css';

export function adCard(): HTMLElement {
    const card = document.createElement('div');
    card.className = 'adCard';

    const title = document.createElement('p');
    title.className = 'adCard-title';
    title.textContent = 'Don’t forget to eat healthy food';
    card.appendChild(title);
    const website = document.createElement('p');
    website.className = 'adCard-website';
    website.textContent = 'www.foodieland.com';
    card.appendChild(website);

    return card;
}