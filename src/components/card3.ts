import './card3.css';

export interface CardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    author: string;
    readMoreLink: string;
}

export function Card3(props: CardProps): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card3';
    card.onclick = () => {
        window.location.href = props.readMoreLink;
    }

    const imageDiv = document.createElement('div');

    imageDiv.className = 'card3-image-div';
    const dishImg = document.createElement('img');
    dishImg.src = props.imageSrc;
    dishImg.alt = props.imageAlt;
    imageDiv.appendChild(dishImg)
    card.appendChild(imageDiv);

    const title = document.createElement('p');
    title.className = 'card3-title';
    title.textContent = props.title;
    card.appendChild(title);

    const authorDiv = document.createElement('p');
    authorDiv.className = 'card3-author';
    authorDiv.textContent = 'By ' + props.author;
    card.appendChild(authorDiv);

    return card;
}