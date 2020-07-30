import React, { Fragment } from 'react'

const HeaderText = ({ currentQuery }) => {
    return (
        <Fragment>
            <h1 style={style.headerText}>{currentQuery} </h1>
        </Fragment>
    )
}

const style = {
    headerText: {
        backgroundColor: 'rgb(39, 31, 31)',
        marginTop: 0,
        textAlign: 'center',
        padding: 8,
        color: 'whitesmoke',
        marginBottom: 0,
    }
}
export default HeaderText