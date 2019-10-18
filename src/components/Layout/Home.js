import React, {Component} from 'react';
import {Header, Footer} from "./HeaderFooter"
import Exercises from "../Exercises"
import {items, groups} from "../../store";
import {links} from "../../storeLink";

export class Home extends Component {
    state = {
        items,
        item: {},
        links,
        link: {},
    }

    getItemsByGroups(){
        return Object.entries(
            this.state.items.reduce((items, item) => {
                const {groups} = item

                items[groups] = items[groups]
                    ? [...items[groups], item]
                    : [items]

                return items
            }, {})
        )
    }

    handleCategorySelect = catergory => {
        this.setState({
            catergory
        })
    }

    handleItemSelect = id => {
        this.setState(({items}) => ({
            item: items.find(ex => ex.id ===id) }))
        this.setState(({links}) => ({
            link: links.find(ex => ex.id === id)
            })
        )
    }

    render(){
        const items = this.getItemsByGroups(),
            {catergory, item, link} = this.state

        return(
            <nav>
                <Header/>
                <Footer
                    style={{marginTop: 20}}
                    category={catergory}
                    groups={groups}
                    onSelect={this.handleCategorySelect}
                />
                <Exercises
                    item={item}
                    category={catergory}
                    items={items}
                    onSelect={this.handleItemSelect}
                    link={link}
                />
            </nav>

        )}
}

export default Home;