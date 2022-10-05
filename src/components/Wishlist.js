import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getWishlist } from '../utils/fetch-utils';
import { setName } from '../utils/local-storage-utils';

export default function Wishlist({token}) {
    const [wishlist, setWishlist] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getWishlist(token)
            .then(res => setWishlist(res))
    }, [])

    const handleCreateJournal = (name) => {
        setName(name);
        navigate('../create');
    }

    return (
        <div  className='main'>
            <h1>Wishlist</h1>
            <div className='astro-display'>
                {
                    wishlist.length &&
                        wishlist.map((item, index) => 
                            <div key={item + index} className='wish-item'>
                                <h2>{item}</h2>
                                <form onSubmit={() => handleCreateJournal(item)}>
                                    <button className='make-journal-button'>Make a Journal</button>
                                </form>
                            </div>
                        )
                }
            </div>
        </div>
    )

}
