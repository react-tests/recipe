import React, { Fragment } from 'react'


import Card from '../components/Card/Card'

const RecipeList = ({ items }) => {
    return (
        <Fragment>
            {items.map(rec => (
                <Card />
            ))}
        </Fragment>
    )
}
export default RecipeList