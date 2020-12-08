import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("ContactUs");
    }

    async getHtml() {
        return `
        <h1>Contact Us!</h1>
        <p>Ori Bibi - 0523456789.</p>
        <p>Yigal Fishler - 0523546543.</p>
        `;
    }
}