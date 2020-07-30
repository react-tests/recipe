import React, { Fragment, useState, useEffect } from 'react'

import Header from '../components/Header/Header'
import Card from '../components/Card/Card'


export default function App() {
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')
    const [recipes, setRecipes] = useState([])
    const APP_ID = '2b1b7c59'
    const APP_KEY = '9d553a153709e3a268f6ff8075727a68'
    const urlBase = `https://api.edamam.com/search?q=${query}&app_id=`
    const url = `${urlBase}${APP_ID}&app_key=${APP_KEY}`

    useEffect(() => {
        getData()
    }, [query])

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = () => {
        setQuery(search)
    }

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const results = data.hits
        setRecipes(results)
    }
    return (
        <Fragment>
            <Header search={search} func={updateSearch} onFunc={getSearch} />
            <main style={styles.main}>
                {recipes.map(rec => (
                    <Card
                        key={rec.recipe.label} title={rec.recipe.label}
                        calories={rec.recipe.calories} image={rec.recipe.image}
                    />
                )
                )}

            </main>

        </Fragment>

    )
}
const styles = {
    main: {
        backgroundColor: '#fafafa',
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 14
    }
}