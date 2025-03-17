import { el, svg } from 'redom';

export default class ProfileLink {
    private link: HTMLAnchorElement;
    private image: HTMLImageElement;
    private name: HTMLSpanElement;
    private svg: SVGElement;

    constructor(src: string, name: string) {
        this.image = el('img.profile-link__img', { src: src, width: '42', height: '42', alt: 'Фото профиля' }) as HTMLImageElement;
        this.name = el('span.profile-link__name', name);
        this.svg = svg('svg.profile-link__icon', {
            width: '16',
            height: '17',
            viewBox: '0 0 16 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        }, [
            svg('path', {
                d: 'M5.52864 4.02861C5.78899 3.76826 6.2111 3.76826 6.47145 4.02861L10.4714 8.02861C10.7318 8.28896 10.7318 8.71107 10.4714 8.97141L6.47145 12.9714C6.2111 13.2318 5.78899 13.2318 5.52864 12.9714C5.26829 12.7111 5.26829 12.289 5.52864 12.0286L9.05723 8.50001L5.52864 4.97141C5.26829 4.71107 5.26829 4.28896 5.52864 4.02861Z',
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                'fill': '#FC6D3E'
            })
        ]);
        this.link = el('a.profile-link', [this.image, this.name, this.svg], { href: '#' }) as HTMLAnchorElement;
    }

    render(): HTMLElement {
        return this.link;
    }
}