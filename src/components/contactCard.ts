import './contactCard.css';

export function contactCard(): HTMLElement {

    const enquiry_types = [
        { value: '', label: 'Please select' },
        { value: 'advertising', label: 'Advertising' },
        { value: 'learning', label: 'Learning' },
        { value: 'support', label: 'Technical Support' },
        { value: 'general', label: 'General Enquiry' }
    ];

    const card = document.createElement('div');
    card.className = 'contact-card';

    //Left Section
    //ROW1
    const left_1 = document.createElement('div');
    left_1.className = 'contact-card-left-1';
    card.appendChild(left_1);
    //ROW2
    const left_2 = document.createElement('div');
    left_2.className = 'contact-card-left-2';
    const left_2_img = document.createElement('img');
    left_2_img.src = './src/images/contact_chief@2x.png';
    left_2_img.alt = 'contact us icon';
    left_2.appendChild(left_2_img);
    card.appendChild(left_2);
    //ROW3
    const left_3 = document.createElement('div');
    left_3.className = 'contact-card-left-3';
    card.appendChild(left_3);

    //Middle Section
    //ROW1
    const middle_1 = document.createElement('div');
    middle_1.className = 'contact-card-middle-1';
    middle_1.textContent = 'Contact us';
    card.appendChild(middle_1);
    //ROW2
    const middle_2 = document.createElement('div');
    middle_2.className = 'contact-card-middle-2';
    const middle_2_p = document.createElement('p');
    middle_2_p.textContent = 'NAME';
    middle_2.appendChild(middle_2_p);
    const middle_2_input = document.createElement('input');
    middle_2_input.type = 'text';
    middle_2_input.placeholder = 'Enter your name...';
    middle_2_input.className = 'contact-card-middle-2-input';
    middle_2.appendChild(middle_2_input);
    card.appendChild(middle_2);
    //ROW3
    const middle_3 = document.createElement('div');
    middle_3.className = 'contact-card-middle-3';
    const middle_3_p = document.createElement('p');
    middle_3_p.textContent = 'SUBJECT';
    middle_3.appendChild(middle_3_p);
    const middle_3_input = document.createElement('input');
    middle_3_input.type = 'text';
    middle_3_input.placeholder = 'Enter subject...';
    middle_3_input.className = 'contact-card-middle-3-input';
    middle_3.appendChild(middle_3_input);
    card.appendChild(middle_3);
    //ROW4
    const middle_4 = document.createElement('div');
    middle_4.className = 'contact-card-middle-4';
    const middle_4_p = document.createElement('p');
    middle_4_p.textContent = 'MESSAGES';
    middle_4.appendChild(middle_4_p);
    const middle_4_textarea = document.createElement('textarea');
    middle_4_textarea.placeholder = 'Enter your messages...';
    middle_4_textarea.className = 'contact-card-middle-4-textarea';
    middle_4.appendChild(middle_4_textarea);
    card.appendChild(middle_4);
    //ROW5
    const middle_5 = document.createElement('div');
    middle_5.className = 'contact-card-middle-5';
    const middle_5_button = document.createElement('button');
    middle_5_button.className = 'contact-card-middle-5-button';
    middle_5_button.textContent = 'Submit';
    middle_5.appendChild(middle_5_button);
    card.appendChild(middle_5);

    //Right Section
    //ROW1
    const right_1 = document.createElement('div');
    right_1.className = 'contact-card-right-1';
    const right_1_p = document.createElement('p');
    right_1_p.textContent = 'EMAIL ADDRESS';
    right_1.appendChild(right_1_p);
    const right_1_input = document.createElement('input');
    right_1_input.type = 'text';
    right_1_input.placeholder = 'Your email address...';
    right_1_input.className = 'contact-card-right-1-input';
    right_1.appendChild(right_1_input);
    card.appendChild(right_1);
    //ROW2
    const right_2 = document.createElement('div');
    right_2.className = 'contact-card-right-2';
    card.appendChild(right_2);
    const right_2_p = document.createElement('p');
    right_2_p.textContent = 'ENQUIRY TYPE';
    right_2.appendChild(right_2_p);
    const right_2_select = document.createElement('select');
    right_2_select.className = 'contact-card-right-2-select';
    enquiry_types.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.textContent = item.label;
        right_2_select.appendChild(option);
    });
    right_2.appendChild(right_2_select);
    card.appendChild(right_2);

    return card;
}
