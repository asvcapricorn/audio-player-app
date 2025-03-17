import { el } from 'redom';

export default class Container {
    private container: HTMLElement;

    constructor(...children: Array<HTMLElement | SVGElement>) {
        this.container = el('.container', ...children);
    };

    render(): HTMLElement {
        return this.container;
    };
}