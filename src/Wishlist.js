import React, { Component } from 'react'
import { getWishlist } from './fetch-utils.js';
import { setName } from './LocalStorage.js';

export default class Wishlist extends Component {

    state = {
        wishlist: []
    }

    componentDidMount = async () => {
        const data = await getWishlist(this.props.token);
        this.setState({ wishlist: data })
    }

    handleCreateJournal = (name) => {
        setName(name);
        this.props.history.push('./create');
    }

    render() {
        return (
            <div  className='main'>
                <h1>Wishlist</h1>
                <div className='astro-display'>
                    {
                        // the empty object comparison won't work, since arrays are a new object and simple equality checks only work on primitive types
                        this.state.wishlist.length > 0 ? 
                            this.state.wishlist.map(item => 
                                <div className='wish-item'>
                                    <h2>{item.englishname}</h2>
                                    <form onSubmit={() => this.handleCreateJournal(item.englishname)}>
                                        <button className='make-journal-button'>Make a Journal</button>
                                    </form>
                                </div>
                            )
                            : <div></div>
                    }
                </div>
            </div>
        )
    }
}
