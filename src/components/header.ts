import './header.css';

export function Header(): HTMLElement {
    const header = document.createElement('header');
    header.className = 'header';

    const headerInner = document.createElement('div');
    headerInner.className = 'header-inner';
    header.appendChild(headerInner);

    const headerLogo = document.createElement('img');
    headerLogo.className = 'header-logo';
    headerLogo.src = './src/images/Foodieland..svg';
    headerLogo.alt = 'Foodieland Logo';
    headerLogo.addEventListener('click', () => {
        window.location.href = './index.html';
    });
    headerInner.appendChild(headerLogo);

    const headerNav = document.createElement('nav');
    headerNav.className = 'header-nav';
    const homeLink = document.createElement('a');
    const recipesLink = document.createElement('a');
    const contactLink = document.createElement('a');
    homeLink.href = './index.html';
    recipesLink.href = './recipes.html';
    contactLink.href = './contact.html';
    homeLink.textContent = 'Home';
    recipesLink.textContent = 'Recipes';
    contactLink.textContent = 'Contact';
    headerNav.appendChild(homeLink);
    headerNav.appendChild(recipesLink);
    headerNav.appendChild(contactLink);
    headerInner.appendChild(headerNav);
    const headerSocials = document.createElement('div');
    headerSocials.className = 'header-socials';
    const instagram = document.createElement('img');
    const facebook = document.createElement('img');
    const twitter = document.createElement('img');
    instagram.src = './src/images/004-instagram.svg';
    instagram.alt = 'Instagram';
    facebook.src = './src/images/001-facebook.svg';
    facebook.alt = 'Facebook';
    twitter.src = './src/images/003-twitter.svg';
    twitter.alt = 'Twitter';
    headerSocials.appendChild(facebook);
    headerSocials.appendChild(twitter);
    headerSocials.appendChild(instagram);
    headerInner.appendChild(headerSocials);

    const headerLine = document.createElement('hr');
    headerLine.className = 'header-line';
    header.appendChild(headerLine);

    return header;
}