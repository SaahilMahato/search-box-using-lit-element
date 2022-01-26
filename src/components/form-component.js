import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class FormComponent extends LitElement {
    
    static properties = {
        filterItemsList: { type: Function },
    };

    static styles = css`
        .form {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }
    `;

    /**
     * Constructor of the class.
     */
    constructor() {
        super();

        this.filterItemsList = () => { };

        this.searchText = "";

        this.isChecked = false;
    }

    /**
     * Renders the component.
     * 
     * @returns {HTMLElement} - HTML of the components
     */
    render() {
        return html`
            <div class="form">
                <input type="text" .value=${this.searchText} @keyup=${this.updateSearchText}>
                <div>
                    <input type="checkbox" ?checked=${this.isChecked} @change=${this.updateIsChecked}>
                    Only show products in stock
                </div>
            </div>
        `;
    }

    /**
     * Updates the searchText property with the value of input and calls filter from parent.
     * 
     * @param {Event} e - event object return from searchbox.
     */
    updateSearchText = e => {
        this.searchText = e.target.value.toLowerCase().trim();
        this.filterItemsList(this.searchText, this.isChecked);
    }

    /**
     * Updates the isChecked property with the value of input and calls filter from parent.
     * 
     * @param {Event} e - event object return from check box.
     */
    updateIsChecked = e => {
        this.isChecked = e.target.checked;
        this.filterItemsList(this.searchText, this.isChecked);
    }
}

customElements.define("form-component", FormComponent);
