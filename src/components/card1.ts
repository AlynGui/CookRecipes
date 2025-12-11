import './card1.css';

export interface CardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    minutesToPrepare: number;
    foodStyle: string;
    readMoreLink: string;
}

export function Card1(props: CardProps): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card1';
    card.onclick = () => {
        window.location.href = props.readMoreLink;
    }

    const imageDiv = document.createElement('div');
    imageDiv.className = 'card1-image-div';
    const dishImg = document.createElement('img');
    dishImg.src = props.imageSrc;
    dishImg.alt = props.imageAlt;
    imageDiv.appendChild(dishImg)
    card.appendChild(imageDiv);

    const likeOuter = document.createElement('div');
    likeOuter.className = 'card1-like-outer';
    imageDiv.appendChild(likeOuter);

    const likeInner = document.createElement('img');
    likeInner.className = 'card1-like-inner';
    likeInner.src = '/images/Heart2.svg';
    likeInner.alt = 'like icon';
    likeOuter.appendChild(likeInner);
    likeInner.onclick = (event) => {
        event.stopPropagation();
        if (likeInner.src.includes('Heart1.svg')) {
            likeInner.src = '/images/Heart2.svg';
        } else {
            likeInner.src = '/images/Heart1.svg';
        }
    };

    const title = document.createElement('p');
    title.className = 'card1-title';
    title.textContent = props.title;
    card.appendChild(title);

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'card1-bottomContainer';
    card.appendChild(bottomContainer);

    const minutesContainer = document.createElement('div');
    minutesContainer.className = 'card1-minutesContainer';
    bottomContainer.appendChild(minutesContainer);

    const minuteImg = document.createElement('img');
    minuteImg.className = 'card1-minuteImg';
    minuteImg.src = '/images/Timer.svg';
    minuteImg.alt = 'clock icon';
    minutesContainer.appendChild(minuteImg);
    const minutesToPrepare = document.createElement('span');
    minutesToPrepare.className = 'card1-minutesToPrepare';
    minutesToPrepare.textContent = props.minutesToPrepare.toString() + ' Minutes';
    minutesContainer.appendChild(minutesToPrepare);

    const styleContainer = document.createElement('div');
    styleContainer.className = 'card1-styleContainer';
    bottomContainer.appendChild(styleContainer);

    const styleImg = document.createElement('img');
    styleImg.className = 'card1-styleImg';
    styleImg.src = '/images/ForkKnife.svg';
    styleImg.alt = 'style icon';
    styleContainer.appendChild(styleImg);
    const foodStyle = document.createElement('span');
    foodStyle.className = 'card1-style';
    foodStyle.textContent = props.foodStyle;
    styleContainer.appendChild(foodStyle);

    return card;
}