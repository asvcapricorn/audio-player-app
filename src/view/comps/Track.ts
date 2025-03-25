import { el, svg } from 'redom';

export default class Track {
    private track: HTMLElement;

    constructor(id: number, title: string, artist: string, duration: string, date?: string, album?: string, img?: string) {
        const idEl = el('span.track__id', id);
        const imgEl = el('img.track__img', { src: img ? img : 'src/images/track-img.png', alt: 'Изображение аудиофайла' });
        const playIconEl = svg('svg.track__play-icon', {
            'aria-hidden': true,
            width: '40',
            height: '40',
            viewBox: '0 0 40 40',
            xmlns: 'http://www.w3.org/2000/svg',
        }, [
            svg('rect', {
                width: '40',
                height: '40',
                rx: '20',
                fill: 'currentColor',
            }),
            svg('path.track__play-icon-el', {
                d: 'M27.0385 21.4138C26.9679 21.4862 26.7012 21.7962 26.4528 22.0512C24.9963 23.655 21.197 26.28 19.2085 27.0813C18.9065 27.21 18.143 27.4825 17.735 27.5C17.3441 27.5 16.9715 27.41 16.6159 27.2275C16.1727 26.9725 15.8171 26.5713 15.6223 26.0975C15.4968 25.7688 15.302 24.785 15.302 24.7675C15.1072 23.6913 15 21.9425 15 20.01C15 18.1688 15.1072 16.4913 15.2667 15.3988C15.2849 15.3812 15.4798 14.1588 15.6929 13.74C16.0838 12.975 16.8473 12.5 17.6644 12.5H17.735C18.2672 12.5187 19.3863 12.9938 19.3863 13.0113C21.2677 13.8138 24.9793 16.31 26.471 17.9688C26.471 17.9688 26.8911 18.395 27.0738 18.6613C27.3587 19.0437 27.5 19.5175 27.5 19.9913C27.5 20.52 27.3405 21.0125 27.0385 21.4138Z',
                fill: 'currentColor'
            })
        ]);
        const playBtnEl = el('button.track__play-btn', imgEl, playIconEl, { type: 'button' });
        const titleEl = el('a.track__title', title, { href: '#' });
        const artistEl = el('a.track__artist', artist, { href: '#' });
        const textWrapper = el('.track__text-wrapper', titleEl, artistEl);
        const titleWrapperEl = el('.track__title-wrapper', playBtnEl, textWrapper);
        let albumEl: HTMLElement;
        if (album) {
            albumEl = el('a.track__album', album, { href: '#' });
        } else {
            albumEl = el('span.track__album', '-');
        }
        const dateEl = el('.span.track__date', date ? date : '-');
        const favBtnEl = el('button.track__fav-btn', svg('svg.track__fav-icon', {
            'aria-hidden': true,
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        }, [
            svg('path', {
                d: 'M16.5022 3.00001C15.6291 2.99851 14.7677 3.20077 13.9865 3.59072C13.2052 3.98066 12.5258 4.54752 12.0022 5.24621C11.293 4.30266 10.3051 3.606 9.17823 3.25482C8.05134 2.90365 6.84256 2.91573 5.72291 3.28936C4.60327 3.663 3.62948 4.37926 2.93932 5.3368C2.24916 6.29434 1.8776 7.44467 1.8772 8.62501C1.8772 15.3621 11.2373 20.6813 11.6357 20.9044C11.7477 20.9671 11.8739 21 12.0022 21C12.1305 21 12.2567 20.9671 12.3687 20.9044C14.0902 19.8961 15.7059 18.7173 17.1914 17.3856C20.4665 14.438 22.1272 11.4905 22.1272 8.62501C22.1255 7.13368 21.5323 5.70393 20.4778 4.6494C19.4233 3.59487 17.9935 3.0017 16.5022 3.00001Z',
                fill: 'currentColor'
            })
        ]));
        const durationEl = el('span.track__duration', duration);
        const optionsBtnEl = el('button.track__options-btn', svg('svg.track__options-icon', {
            'aria-hidden': true,
            width: '23',
            height: '4',
            viewBox: '0 0 23 4',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        }, [
            svg('circle', {
                cx: '2',
                cy: '2',
                r: '2',
                fill: 'currentColor'
            }),
            svg('circle', {
                cx: '11.5',
                cy: '2',
                r: '2',
                fill: 'currentColor'
            }),
            svg('circle', {
                cx: '21',
                cy: '2',
                r: '2',
                fill: 'currentColor'
            })
        ]));
        this.track = el('.track', idEl, titleWrapperEl, albumEl, dateEl, favBtnEl, durationEl, optionsBtnEl);
    };

    render(): HTMLElement {
        return this.track;
    }
}