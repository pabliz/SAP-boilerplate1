import AbstractView from "./AbstractView";

export default class ProjectView extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Project")
    }
    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        //console.log(this.params.id);
        return `<h1>Project</h1>`;
    }
}