import React from "react";

import Header from "./Header";
import ListItem from "./ListItem";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.lastName = "Fitzpatrick";
    }
    render() {
        var list = [ // We can have an array of dom elements
            <ListItem />,
            <ListItem />,
            <ListItem />
        ];
        return ( // We can then add an array as an expression
            <div>
                <Header />
                {list}
                <Footer />
            </div>
        );
    }
}
