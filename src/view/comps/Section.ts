import { el } from 'redom';

export default class Section {
    private section: HTMLElement;

    constructor(clazz: string, ...children: HTMLElement[]) {
        this.section = el('section.' + clazz, ...children);
    };

    render(): HTMLElement {
        return this.section;
    }
}