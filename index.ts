import { el, mount } from 'redom';
import routes from './src/controller/Routes';

const appEl = document.querySelector('.app');

const renderPage = (route: string) => {
    if (appEl) {
        appEl.innerHTML = '';
        const page = routes[route];
        if (page) {
            mount(appEl, page.render());
            return;
        }
        mount(appEl, el('h1', '404 - Page Not Found'));
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