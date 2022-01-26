import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class RowComponent extends LitElement {
    
    static properties = {
        name: { type: String },
        price: { type: String },
        isOutOfStock: { type: Boolean },
        category: { type: String },
        isHeading: { type: Boolean }
    };

    static styles = css`
        .row {
            display: flex;
            justify-content: space-between;
            margin: 1% 0;
        }

        .red-text {
            color: red;
        }

        .bold-text {
            font-weight: bold;
        }
    `;

    /**
     * Constructor of the class.
     */
    constructor() {
        super();

        this.name = "";
        this.price = "";
        this.category = "";

        this.isHeading = false;
        this.isOutOfStock = false;
    }

    /**
     * Renders the component.
     * 
     * @returns {HTMLElement} - HTML of the components
     */
    render() {
        return html`
            <div class="row">
                <span class=${(this.isOutOfStock?"red-text": "") + " " + (this.isHeading?"bold-text": "")}>
                ${this.name}</span>
                <span class=${this.isHeading?"bold-text": ""}>${this.price}</span>
            </div>
        `;
    }
}

customElements.define("row-component", RowComponent);
