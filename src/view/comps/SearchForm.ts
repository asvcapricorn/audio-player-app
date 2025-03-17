import { el } from 'redom';
import SearchInput from './SearchInput';

export default class Search {
    private form: HTMLElement;
    private input: SearchInput;

    constructor() {
        this.input = new SearchInput();
        this.form = el('form.search-form', { action: "#", method: "GET" }, this.input.render());
    }

    render(): HTMLElement {
        return this.form;
    }
}