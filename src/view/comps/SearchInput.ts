import { el, svg } from 'redom';

export default class SearchInput {
    private input: HTMLElement;
    private field: HTMLElement;
    private svg: SVGElement;

    constructor() {
        this.field = el('input.search-custom-input__field', { type: 'text', id: 'search', name: 'search', placeholder: 'Что будем искать?' });
        this.svg = svg('svg.search-cuctom-input__icon', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
        }, [
            svg('path', {
                d: 'M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z',
                stroke: '#AAAAAA',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
            svg('path', {
                d: 'M20.9999 21L17.5 17.5001',
                stroke: '#AAAAAA',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
        ]);

        this.input = el('.search-custom-input', [this.field, this.svg]);
    }

    render(): HTMLElement {
        return this.input;
    }
}