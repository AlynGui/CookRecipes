import './slideCard.css';

export interface SlideCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
    minutesToPrepare: number;
    foodStyle: string;
    readMoreLink: string;
    author: string;
    date: string;
}

export function SlideCard(props: SlideCardProps): HTMLElement {
    const card = document.createElement('div');
    card.className = 'slideCard';

    // Left sections
    const left = document.createElement('div');
    left.className = 'slideCard-left';
    card.appendChild(left);

    //top1 section
    const left_top1 = document.createElement('div');
    left_top1.className = 'slideCard-left-top1';
    left.appendChild(left_top1);
    const left_top1_img = document.createElement('img');
    left_top1_img.src = './src/images/hotIcon.svg';
    left_top1_img.alt = 'hot icon';
    left_top1.appendChild(left_top1_img);
    const left_top1_span = document.createElement('span');
    left_top1_span.className = 'slideCard-left-top1-span';
    left_top1_span.textContent = 'Hot Recipes';
    left_top1.appendChild(left_top1_span);

    //top2 section: title
    const left_top2 = document.createElement('div');
    left_top2.className = 'slideCard-left-top2';
    left_top2.textContent = props.title;
    left.appendChild(left_top2);

    //top3 section: content
    const left_top3 = document.createElement('div');
    left_top3.className = 'slideCard-left-top3';
    left_top3.textContent = props.content;
    left.appendChild(left_top3);

    //top4 section: minutes to prepare and food style
    const left_top4 = document.createElement('div');
    left_top4.className = 'slideCard-left-top4';
    left.appendChild(left_top4);
    //minutes to prepare
    const left_top4_time = document.createElement('div');
    left_top4_time.className = 'slideCard-left-top4-time';
    const left_top4_time_img = document.createElement('img');
    left_top4_time_img.src = './src/images/Timer.svg';
    left_top4_time_img.alt = 'timer icon';
    left_top4_time.appendChild(left_top4_time_img);
    const left_top4_time_span = document.createElement('span');
    left_top4_time_span.className = 'slideCard-left-top4-time-span';
    left_top4_time_span.textContent = `${props.minutesToPrepare} Minutes`;
    left_top4_time.appendChild(left_top4_time_span);
    left_top4.appendChild(left_top4_time);
    //food style
    const left_top4_foodStyle = document.createElement('div');
    left_top4_foodStyle.className = 'slideCard-left-top4-foodStyle';
    const left_top4_foodStyle_img = document.createElement('img');
    left_top4_foodStyle_img.src = './src/images/ForkKnife.svg';
    left_top4_foodStyle_img.alt = 'food style icon';
    left_top4_foodStyle.appendChild(left_top4_foodStyle_img);
    const left_top4_foodStyle_span = document.createElement('span');
    left_top4_foodStyle_span.className = 'slideCard-left-top4-foodStyle-span';
    left_top4_foodStyle_span.textContent = `${props.foodStyle}`;
    left_top4_foodStyle.appendChild(left_top4_foodStyle_span);
    left_top4.appendChild(left_top4_foodStyle);

    //top5 section: author and button
    const left_top5 = document.createElement('div');
    left_top5.className = 'slideCard-left-top5';
    left.appendChild(left_top5);
    //author
    const left_top5_1 = document.createElement('div');
    left_top5_1.className = 'slideCard-left-top5-1';
    const left_top5_1_img = document.createElement('img');
    left_top5_1_img.src = './src/images/author.svg';
    left_top5_1_img.alt = 'author icon';
    left_top5_1.appendChild(left_top5_1_img);
    const left_top5_1_span1 = document.createElement('span');
    left_top5_1_span1.className = 'author-name';
    left_top5_1_span1.textContent = `${props.author}`;
    left_top5_1.appendChild(left_top5_1_span1);
    const left_top5_1_span2 = document.createElement('span');
    left_top5_1_span2.className = 'date-posted';
    left_top5_1_span2.textContent = `${props.date}`;
    left_top5_1.appendChild(left_top5_1_span2);
    left_top5.appendChild(left_top5_1);
    //button
    const left_top5_2 = document.createElement('div');
    left_top5_2.className = 'slideCard-left-top5-2';
    const left_top5_2_span = document.createElement('span');
    left_top5_2_span.textContent = 'View Recipes';
    left_top5_2.appendChild(left_top5_2_span);
    const left_top5_2_img = document.createElement('img');
    left_top5_2_img.src = './src/images/PlayCircle.svg';
    left_top5_2_img.alt = 'view recipes icon';
    left_top5_2.onclick = () => {
        window.location.href = props.readMoreLink;
    }
    left_top5_2.appendChild(left_top5_2_img);
    left_top5.appendChild(left_top5_2);

    // Right section
    const right = document.createElement('div');
    right.className = 'slideCard-right';
    card.appendChild(right);
    const right_img = document.createElement('img');
    right_img.src = props.imageSrc;
    right_img.alt = props.imageAlt;
    right.appendChild(right_img);
    const right_hand_img = document.createElement('img');
    right_hand_img.src = './src/images/Badge.svg';
    right_hand_img.alt = 'hand icon';
    right.appendChild(right_hand_img);

    return card
}