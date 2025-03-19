import { el } from 'redom';

export default class Side {
    private side: HTMLElement;
    private nav: HTMLElement;
    private list: HTMLUListElement;

    constructor() {
        this.list = el('ul.side__list') as HTMLUListElement;
        this.nav = el('nav.side__nav', this.list);
        this.side = el('aside.side', this.nav);
    };

    addItem(active: boolean, href: string, icon: SVGElement, text: string): HTMLLIElement {
        const link = el('a.side__link' + (active === true ? ' side__link--active' : ''), [icon, el('span.side__link-text', text)], { href: href });
        const item = el('li.side__item', link) as HTMLLIElement;
        this.list.appendChild(item);
        return item;
    };

    render(): HTMLElement {
        return this.side;
    };
}