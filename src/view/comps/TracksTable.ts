import { el, svg } from 'redom';
import requests from '../../model/requestsClass';

export default class TracksTable {
    private tracksTable: HTMLTableElement;

    constructor() {
        const trEl = el('tr.tracks-table__tr');
        const tableThList = ['№',
            'Название',
            'АЛЬБОМ',
            svg('svg.tracks-table__icon', {
                'aria-hidden': true,
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
            }, [
                svg('path', {
                    d: 'M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M11 1.5V3.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M5 1.5V3.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M2.5 5.5H13.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                })
            ]),
            '',
            svg('svg.tracks-table__icon', {
                'aria-hidden': true,
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
            }, [
                svg('path', {
                    d: 'M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z',
                    stroke: 'currentColor',
                    'stroke-miterlimit': '10'
                }),
                svg('path', {
                    d: 'M8 4.5V8H11.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                })
            ]),
            ''
        ];
        for (const th of tableThList) {
            const thEl = el('th.tracks-table', th);
            trEl.appendChild(thEl);
        };
        const theadEl = el('thead.tracks-table__thead', trEl);
        const tbodyEl = el('tbody.tracks-table__tbody',);
        requests.getTracks(window.localStorage.getItem('token'))
            .then(data => {
                console.log(data);
                for (const track of data) {
                    const row = el('tr.tracks-table__tr');
                    row.innerHTML = `
                        <td>${track.id}</td>
                        <td>${track.title}</td>
                        <td>-</td>
                        <td>Сегодня</td>
                        <td><3</td>
                        <td>${track.duration}</td>
                        <td>...</td>
                     `;
                    tbodyEl.appendChild(row);

                }
            })
            .catch(error => console.error(error));

        this.tracksTable = el('table.tracks-table', theadEl, tbodyEl) as HTMLTableElement;
    };

    render(): HTMLTableElement {
        return this.tracksTable;
    }
}