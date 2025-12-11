import './card2.css';

export interface CardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    minutesToPrepare: number;
    foodStyle: string;
    readMoreLink: string;
}

export function Card2(props: CardProps): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card2';
    card.onclick = () => {
        window.location.href = props.readMoreLink;
    }

    const imageDiv = document.createElement('div');
    imageDiv.className = 'card2-image-div';
    const dishImg = document.createElement('img');
    dishImg.src = props.imageSrc;
    dishImg.alt = props.imageAlt;
    imageDiv.appendChild(dishImg)
    card.appendChild(imageDiv);

    const likeOuter = document.createElement('div');
    likeOuter.className = 'card2-like-outer';
    imageDiv.appendChild(likeOuter);

    const likeInner = document.createElement('img');
    likeInner.className = 'card2-like-inner';
    likeInner.src = './src/images/Heart2.svg';
    likeInner.alt = 'like icon';
    likeOuter.appendChild(likeInner);
    likeInner.onclick = (event) => {
        event.stopPropagation();
        if (likeInner.src.includes('Heart1.svg')) {
            likeInner.src = './src/images/Heart2.svg';
        } else {
            likeInner.src = './src/images/Heart1.svg';
        }
    };

    const title = document.createElement('p');
    title.className = 'card2-title';
    title.textContent = props.title;
    card.appendChild(title);

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'card2-bottomContainer';
    card.appendChild(bottomContainer);

    const minutesContainer = document.createElement('div');
    minutesContainer.className = 'card2-minutesContainer';
    bottomContainer.appendChild(minutesContainer);

    const minuteImg = document.createElement('img');
    minuteImg.className = 'card2-minuteImg';
    minuteImg.src = './src/images/Timer.svg';
    minuteImg.alt = 'clock icon';
    minutesContainer.appendChild(minuteImg);
    const minutesToPrepare = document.createElement('span');
    minutesToPrepare.className = 'card2-minutesToPrepare';
    minutesToPrepare.textContent = props.minutesToPrepare.toString() + ' Minutes';
    minutesContainer.appendChild(minutesToPrepare);

    const styleContainer = document.createElement('div');
    styleContainer.className = 'card2-styleContainer';
    bottomContainer.appendChild(styleContainer);

    const styleImg = document.createElement('img');
    styleImg.className = 'card2-styleImg';
    styleImg.src = './src/images/ForkKnife.svg';
    styleImg.alt = 'style icon';
    styleContainer.appendChild(styleImg);
    const foodStyle = document.createElement('span');
    foodStyle.className = 'card2-style';
    foodStyle.textContent = props.foodStyle;
    styleContainer.appendChild(foodStyle);

    return card;
}