import React, { Fragment, useState } from 'react'


import './Header.css'
import HeaderText from './HeaderText'
import SearchBar from './SearchBar'


const Header = ({ search, func, onFunc }) => {
    // pass in a property to make sure this chages when user search for new things
    const [currentQuery, setCurrentQuery] = useState('Search for a Recipe')


    return (
        <Fragment>
            <nav className={'navbar'}>
                <span className={'siteTitle'}>Goxha Search</span>
                <ul className={'headerItems'}>
                    <a href='new.com'>Hello</a>
                    <a href='new.com'>There</a>
                </ul>

            </nav>
            <HeaderText currentQuery={currentQuery} />
            <SearchBar search={search} func={func} onFunc={onFunc} />
        </Fragment>
    )
}

export default Header