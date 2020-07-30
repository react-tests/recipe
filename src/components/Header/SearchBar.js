import React, { Fragment } from 'react'

import './Header.css'

const SearchBar = ({ search, func, onFunc }) => {
    return (
        <Fragment>
            <div style={styles.searchBar}>
                <input style={styles.query} type='text' value={search} onChange={func} />
                <button onClick={onFunc} style={styles.btn} type='submit'>Search</button>
            </div>

        </Fragment>
    )
}

const styles = {
    searchBar: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2vh',
        backgroundColor: 'rgb(214, 188, 40)',
    },
    query: {
        padding: ' 1vh 7vw',
        border: '1px solid whitesmoke',
        borderRadius: '50px',
    },
    btn: {
        marginLeft: '14px',
        backgroundColor: 'rgb(62, 62, 255)',
        fontFamily: 'cursive',
        color: 'white',
        fontSize: '16px',
        border: '1px solid blue',
        padding: ' 5px 10px',
    }
}

export default SearchBar