import React, { Component } from 'react'
import { addToWishlist, getWishlist } from './fetch-utils.js';
import { setName } from './LocalStorage.js';

export default class AstroDisplay extends Component {
    state = {
        wishlist: []
    }

    componentDidMount = async () => {
        const wishlist = await getWishlist(this.props.token)
        const mungedWishlist = wishlist.map(item => {
            return item.englishname;
        })
        this.setState({ wishlist: mungedWishlist })
    }

    handleAddWishList = (item) => {
        async () => { 
            const name = item.englishName === '' 
                ? item.id 
                : item.englishName;
            await addToWishlist({ englishname: name }, this.props.token);}
    }

    handleCreateJournal = (item) => {
        const name = item.englishName === '' 
        ? item.id 
        : item.englishName

        setName(name);
        this.props.history.push('./create');
    }

    isInWishlist = (item) => {
        !this.state.wishlist.find(wish => {
            // nice complicated find callback here!
            const name = item.englishName === '' 
                ? item.id 
                : item.englishName;
            return name === wish;
            }
        )
    }

    render() {
        return (
            <div className="astro-display">

                {this.props.display.map(item => 
                    <div className="astro-item" key={item.id}>
                        <h2>{ item.englishName === '' 
                            ? item.id 
                            : item.englishName
                        }</h2>
                        <p>gravity: {item.gravity}</p>
                        <p>date discovered: {item.discoveryDate}</p>
                        <p>radius: {item.meanRadius} KM</p>
                        <div className='buttons'>
                            {
                            !this.isInWishlist(item) && <button className='add-wishlist-button' onClick={ 
                                () => this.handleAddWishList(item)}>Add to Wishlist
                            </button>
                            }

                            <form onSubmit={() => 
                                this.handleCreateJournal(item)}>
                                <button className='make-journal-button'>Make a Journal</button>
                            </form>
                        </div>
                    </div>
                    )}

            </div>
        )
    }
}