import AbstractView from "./AbstractView";

export default class Home extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("About")
    }
    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        return `<h1>About</h1>`;
    }
}