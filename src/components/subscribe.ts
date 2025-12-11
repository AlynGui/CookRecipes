import './subscribe.css';

export function Subscribe(): HTMLElement {
    const subscribeContainer = document.createElement('div');
    subscribeContainer.className = 'subscribe-container';

    const subscribeTitle = document.createElement('p');
    subscribeTitle.className = 'subscribe-title';
    subscribeTitle.textContent = 'Deliciousness to your inbox';
    subscribeContainer.appendChild(subscribeTitle);

    const subscribeIntro = document.createElement('p');
    subscribeIntro.className = 'subscribe-intro';
    subscribeIntro.textContent = 'Sign up for our newsletter to get the latest recipes, tips, and exclusive offers delivered straight to your inbox.';
    subscribeContainer.appendChild(subscribeIntro);

    const subscribeSearch = document.createElement('div');
    subscribeSearch.className = 'subscribe-search';
    subscribeContainer.appendChild(subscribeSearch);

    const subscribeInput = document.createElement('input');
    subscribeInput.type = 'text';
    subscribeInput.className = 'subscribe-input';
    subscribeInput.placeholder = 'Your email address...';
    subscribeSearch.appendChild(subscribeInput);

    const subscribeButton = document.createElement('button');
    subscribeButton.className = 'subscribe-button';
    subscribeButton.textContent = 'Subscribe';
    subscribeSearch.appendChild(subscribeButton);

    return subscribeContainer;
}