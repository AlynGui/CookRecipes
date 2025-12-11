import './detailCard.css';

export interface DetailCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
    minutesToPrepare: number;
    foodStyle: string;
    nutrition: { calories: number; protein: number; fat: number; carbs: number; cholesterol: number; };
    author: string;
    date: string;
}

export function detailCard(props: DetailCardProps): HTMLElement {
    const card = document.createElement('div');
    card.className = 'detail-card';

    //left
    const leftR1 = document.createElement('div');
    leftR1.className = 'detail-card-left-r1';
    leftR1.textContent = props.title;
    card.appendChild(leftR1);

    const leftR2 = document.createElement('div');
    leftR2.className = 'detail-card-left-r2';
    //author
    const leftR2_1 = document.createElement('div');
    leftR2_1.className = 'detail-card-left-r2-1';
    const leftR2_1_img = document.createElement('img');
    leftR2_1_img.src = '/images/author.svg';
    leftR2_1_img.alt = 'author icon';
    leftR2_1.appendChild(leftR2_1_img);
    const leftR2_1_span1 = document.createElement('span');
    leftR2_1_span1.className = 'author-name';
    leftR2_1_span1.textContent = `${props.author}`;
    leftR2_1.appendChild(leftR2_1_span1);
    const leftR2_1_span2 = document.createElement('span');
    leftR2_1_span2.className = 'date-posted';
    leftR2_1_span2.textContent = `${props.date}`;
    leftR2_1.appendChild(leftR2_1_span2);
    leftR2.appendChild(leftR2_1);
    //minutes to prepare
    const leftR2_2 = document.createElement('div');
    leftR2_2.className = 'detail-card-left-r2-2';
    const leftR2_2_img = document.createElement('img');
    leftR2_2_img.src = '/images/Timer.svg';
    leftR2_2_img.alt = 'timer icon';
    leftR2_2.appendChild(leftR2_2_img);
    const leftR2_2_span = document.createElement('span');
    leftR2_2_span.className = 'detail-card-left-r2-2-span';
    leftR2_2_span.textContent = `${props.minutesToPrepare} Minutes`;
    leftR2_2.appendChild(leftR2_2_span);
    leftR2.appendChild(leftR2_2);
    //food style
    const leftR2_3 = document.createElement('div');
    leftR2_3.className = 'detail-card-left-r2-3';
    const leftR2_3_img = document.createElement('img');
    leftR2_3_img.src = '/images/ForkKnife.svg';
    leftR2_3_img.alt = 'food style icon';
    leftR2_3.appendChild(leftR2_3_img);
    const leftR2_3_span = document.createElement('span');
    leftR2_3_span.className = 'detail-card-left-r2-3-span';
    leftR2_3_span.textContent = `${props.foodStyle}`;
    leftR2_3.appendChild(leftR2_3_span);
    leftR2.appendChild(leftR2_3);
    card.appendChild(leftR2);

    const leftR3 = document.createElement('div');
    leftR3.className = 'detail-card-left-r3';
    const leftRR3_img = document.createElement('img');
    leftRR3_img.src = props.imageSrc;
    leftRR3_img.alt = props.imageAlt;
    leftR3.appendChild(leftRR3_img);
    card.appendChild(leftR3);

    const leftR4 = document.createElement('div');
    leftR4.className = 'detail-card-left-r4';
    leftR4.textContent = props.content;
    card.appendChild(leftR4);

    //right
    const rightR1 = document.createElement('div');
    rightR1.className = 'detail-card-right-r1';
    //print
    const rightR1_1 = document.createElement('div');
    rightR1_1.className = 'detail-card-right-r1-1';
    const rightR1_1_top = document.createElement('div');
    rightR1_1_top.className = 'detail-card-right-r1-top';
    const rightR1_1_img = document.createElement('img');
    rightR1_1_img.src = '/images/printer.svg';
    rightR1_1_img.alt = 'print icon';
    rightR1_1_top.appendChild(rightR1_1_img);
    rightR1_1.appendChild(rightR1_1_top);
    const rightR1_1_bottom = document.createElement('div');
    rightR1_1_bottom.className = 'detail-card-right-r1-bottom';
    rightR1_1_bottom.textContent = 'PRINT';
    rightR1_1.appendChild(rightR1_1_bottom);
    rightR1.appendChild(rightR1_1);
    //share
    const rightR1_2 = document.createElement('div');
    rightR1_2.className = 'detail-card-right-r1-2';
    const rightR1_2_top = document.createElement('div');
    rightR1_2_top.className = 'detail-card-right-r1-top';
    const rightR1_2_img = document.createElement('img');
    rightR1_2_img.src = '/images/share.svg';
    rightR1_2_img.alt = 'share icon';
    rightR1_2_top.appendChild(rightR1_2_img);
    rightR1_2.appendChild(rightR1_2_top);
    const rightR1_2_bottom = document.createElement('div');
    rightR1_2_bottom.className = 'detail-card-right-r1-bottom';
    rightR1_2_bottom.textContent = 'SHARE';
    rightR1_2.appendChild(rightR1_2_bottom);
    rightR1.appendChild(rightR1_2);
    card.appendChild(rightR1);

    const rightR2 = document.createElement('div');
    rightR2.className = 'detail-card-right-r2';
    const rightR2_r1 = document.createElement('div');
    rightR2_r1.className = 'detail-card-right-r2-r1';
    rightR2_r1.textContent = 'Nutrition Information';
    rightR2.appendChild(rightR2_r1);
    //calories
    const rightR2_r2 = document.createElement('div');
    rightR2_r2.className = 'detail-card-right-r2-nutrition';
    const rightR2_r2_span1 = document.createElement('span');
    rightR2_r2_span1.textContent = 'Calories';
    rightR2_r2.appendChild(rightR2_r2_span1);
    const rightR2_r2_span2 = document.createElement('span');
    rightR2_r2_span2.textContent = `${props.nutrition.calories} kcal`;
    rightR2_r2.appendChild(rightR2_r2_span2);
    rightR2.appendChild(rightR2_r2);
    //fat
    const rightR2_r3 = document.createElement('div');
    rightR2_r3.className = 'detail-card-right-r2-nutrition';
    const rightR2_r3_span1 = document.createElement('span');
    rightR2_r3_span1.textContent = 'Total Fat';
    rightR2_r3.appendChild(rightR2_r3_span1);
    const rightR2_r3_span2 = document.createElement('span');
    rightR2_r3_span2.textContent = `${props.nutrition.fat} g`;
    rightR2_r3.appendChild(rightR2_r3_span2);
    rightR2.appendChild(rightR2_r3);
    //Protein
    const rightR2_r4 = document.createElement('div');
    rightR2_r4.className = 'detail-card-right-r2-nutrition';
    const rightR2_r4_span1 = document.createElement('span');
    rightR2_r4_span1.textContent = 'Protein';
    rightR2_r4.appendChild(rightR2_r4_span1);
    const rightR2_r4_span2 = document.createElement('span');
    rightR2_r4_span2.textContent = `${props.nutrition.protein} g`;
    rightR2_r4.appendChild(rightR2_r4_span2);
    rightR2.appendChild(rightR2_r4);
    //Carbohydrates
    const rightR2_r5 = document.createElement('div');
    rightR2_r5.className = 'detail-card-right-r2-nutrition';
    const rightR2_r5_span1 = document.createElement('span');
    rightR2_r5_span1.textContent = 'Carbohydrates';
    rightR2_r5.appendChild(rightR2_r5_span1);
    const rightR2_r5_span2 = document.createElement('span');
    rightR2_r5_span2.textContent = `${props.nutrition.carbs} g`;
    rightR2_r5.appendChild(rightR2_r5_span2);
    rightR2.appendChild(rightR2_r5);
    //Cholesterol
    const rightR2_r6 = document.createElement('div');
    rightR2_r6.className = 'detail-card-right-r2-nutrition';
    const rightR2_r6_span1 = document.createElement('span');
    rightR2_r6_span1.textContent = 'Cholesterol';
    rightR2_r6.appendChild(rightR2_r6_span1);
    const rightR2_r6_span2 = document.createElement('span');
    rightR2_r6_span2.textContent = `${props.nutrition.cholesterol} mg`;
    rightR2_r6.appendChild(rightR2_r6_span2);
    rightR2.appendChild(rightR2_r6);
    //bottom div
    const rightR2_r7 = document.createElement('div');
    rightR2_r7.className = 'detail-card-right-r2-r7';
    rightR2_r7.textContent = '* Percent Daily Values are based on a 2,000 calorie diet.';
    rightR2.appendChild(rightR2_r7);
    card.appendChild(rightR2);

    return card;
}

