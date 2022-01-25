import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class AppComponent extends LitElement {
    
    static properties = {
        itemsToDisplay: { type: Array },
    };

    static styles = css`
        .container {
            width: 20vw;
            margin: 0 auto;
            margin-top: 20px;
            background-color: white;
            padding: 1%;
            border-radius: 10px;
        }

        .category-text {
            margin: 0;
        }
    `;

    constructor() {
        super();

        this.items = [
            { name: "Sporting Goods", price: "", isOutOfStock: false, category: "sporting goods", isHeading: true },
            { name: "Football", price: "$49.99", isOutOfStock: false, category: "sporting goods", isHeading: false },
            { name: "Baseball", price: "$9.99", isOutOfStock: false, category: "sporting goods", isHeading: false },
            { name: "Basketball", price: "$29.99", isOutOfStock: true, category: "sporting goods", isHeading: false },
            { name: "Electronics", price: "", isOutOfStock: false, category: "electronics", isHeading: true },
            { name: "iPod Touch", price: "$99.99", isOutOfStock: false, category: "electronics", isHeading: false },
            { name: "iPhone 5", price: "$399.99", isOutOfStock: true, category: "electronics", isHeading: false },
            { name: "Nexus 7", price: "$199.99", isOutOfStock: false, category: "electronics", isHeading: false },
        ]

        this.itemsToDisplay = [...this.items];
    }

    render() {
        return html`
            <div class="container">
                <form-component 
                    .filterItemsList=${this.filterItemsList}
                ></form-component>
                <row-component
                    .name=${"Name"}
                    .price=${"Price"}
                    .isHeading=${true}
                ></row-component>
                ${this.itemsToDisplay.map(item => html`
                    <row-component
                        .name=${item.name}
                        .price=${item.price}
                        .isOutOfStock=${item.isOutOfStock}
                        .category=${item.category}
                        .isHeading=${item.isHeading}
                    ></row-component>
                `)}
            </div>
        `;
    }

    filterItemsList = (searchText, isChecked) => {
        const tempItems = [...this.items];
        
        let filteredItems;
        if (isChecked)
            filteredItems = tempItems.filter(item => 
                ((item.name.toLowerCase().startsWith(searchText) || 
                item.category.startsWith(searchText)) 
                && !item.isOutOfStock));
        else
            filteredItems = tempItems.filter(item => (item.name.toLowerCase().startsWith(searchText) ||
                item.category.startsWith(searchText)));

        this.itemsToDisplay = [...filteredItems];
    }
}

customElements.define("app-component", AppComponent);