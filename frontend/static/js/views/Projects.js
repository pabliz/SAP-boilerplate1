import AbstractView from "./AbstractView";

export default class Home extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Projects")
    }
    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        return `<h1>Projects</h1>`;
    }
}