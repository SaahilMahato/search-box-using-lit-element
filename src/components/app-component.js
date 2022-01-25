import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class AppComponent extends LitElement {
    
    static properties = {
        itemsToDisplay: { type: Array },
    };

    static styles = css`
        .container {
            width: 40vw;
            margin: 0 auto;
        }
    `;

    constructor() {
        super();

        this.items = [
            { name: "Football", price: "$49.99", isOutOfStack: false, category: "sporting" },
            { name: "Baseball", price: "$9.99", isOutOfStack: false, category: "sporting" },
            { name: "Basketball", price: "$29.99", isOutOfStack: true, category: "sporting" },
            { name: "iPod Touch", price: "$99.99", isOutOfStack: false, category: "electronics" },
            { name: "iPhone 5", price: "$399.99", isOutOfStack: true, category: "electronics" },
            { name: "Nexus 7", price: "$199.99", isOutOfStack: false, category: "electronics" },
        ]

        this.itemsToDisplay = [...this.items];
    }

    render() {
        return html`
            <div class="container">
                <form-component 
                    .filterItemsList=${this.filterItemsList}
                ></form-component>
                ${this.itemsToDisplay.map(item => html`
                    <span>${item.name}</span>
                `)}
            </div>
        `;
    }

    filterItemsList = (searchText, isChecked) => {
        const tempItems = [...this.items];
        
        let filteredItems;
        if (isChecked)
            filteredItems = tempItems.filter(item => (item.name.includes(searchText) && !item.isOutOfStack));
        else
            filteredItems = tempItems.filter(item => item.name.includes(searchText));

        this.itemsToDisplay = [...filteredItems];
    }
}

customElements.define("app-component", AppComponent);