import './src/styles/style.scss';
import { el, mount } from 'redom';
import routes from './src/controller/Routes';

// const appEl = document.querySelector('.app');
const bodyEl = document.querySelector('body');

const renderPage = (route: string) => {
    if (bodyEl) {
        bodyEl.innerHTML = '';
        const page = routes[route];
        if (page) {
            mount(bodyEl, page.render());
            return;
        }
        mount(bodyEl, el('h1', '404 - Page Not Found'));
    }
};

window.addEventListener('load', () => {
    const path = window.location.pathname;
    renderPage(path);
});

// document.addEventListener('click', (event) => {
//     const target = event.target as HTMLElement;
//     if (target.tagName === 'A' && target.getAttribute('href')) {
//         event.preventDefault();
//         const path = target.getAttribute('href')!;
//         window.history.pushState({}, '', path);
//         renderPage(path);
//     }
// });