import './footer.css';

export function Footer(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerUpper = document.createElement('div');
    footerUpper.className = 'footer-upper';
    footer.appendChild(footerUpper);

    const footerGroup875 = document.createElement('div');
    footerGroup875.className = 'footer-group875';
    const footerGroup875Text = document.createElement('p');
    const footerGroup875Image = document.createElement('img');
    footerGroup875Text.textContent = 'Where every bite tells a story and every recipe sparks joy.';
    footerGroup875Image.src = '/images/foodieland..svg';
    footerGroup875Image.addEventListener('click', () => {
        window.location.href = './index.html';
    });
    footerGroup875Image.alt = 'Foodieland Logo';
    footerGroup875.appendChild(footerGroup875Image);
    footerGroup875.appendChild(footerGroup875Text);
    footerUpper.appendChild(footerGroup875);

    const footerGroup824 = document.createElement('div');
    footerGroup824.className = 'footer-group824';
    const about = document.createElement('span');
    const contact = document.createElement('span');
    const recipes = document.createElement('span');
    about.textContent = 'About Us';
    contact.textContent = 'Contact';
    recipes.textContent = 'Recipes';
    footerGroup824.appendChild(recipes);
    footerGroup824.appendChild(contact);
    footerGroup824.appendChild(about);
    footerUpper.appendChild(footerGroup824);

    const footerLine = document.createElement('hr');
    footerLine.className = 'footer-line';
    footer.appendChild(footerLine);

    const footerLower = document.createElement('div');
    footerLower.className = 'footer-lower';
    footer.appendChild(footerLower);

    const footerPlain = document.createElement('div');
    footerLower.appendChild(footerPlain);

    const footerCopyright = document.createElement('p');
    footerCopyright.className = 'footer-copyright';
    footerCopyright.innerHTML = '© 2025 Created by <span style="color: red;">Lin Gui</span>. Figma Design By <span style="color: red;">Flowbase</span>';
    footerLower.appendChild(footerCopyright);

    const footerSocials = document.createElement('div');
    footerSocials.className = 'footer-socials';
    const instagram = document.createElement('img');
    const facebook = document.createElement('img');
    const twitter = document.createElement('img');
    instagram.src = '/images/004-instagram.svg';
    instagram.alt = 'Instagram';
    facebook.src = '/images/001-facebook.svg';
    facebook.alt = 'Facebook';
    twitter.src = '/images/003-twitter.svg';
    twitter.alt = 'Twitter';
    footerSocials.appendChild(facebook);
    footerSocials.appendChild(twitter);
    footerSocials.appendChild(instagram);
    footerLower.appendChild(footerSocials);

    return footer;
}