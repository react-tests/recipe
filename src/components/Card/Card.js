import React, { Fragment } from 'react'

import './Card.css'

const Card = ({ title, calories, image, ingredients }) => {
    return (
        <Fragment>
            <div style={styles.card}>
                <img src={image} style={styles.img} alt='food' />

                <div style={styles.name} >
                    <span >{title}</span>
                </div>
                <div style={styles.infoBox} >
                    <p>Calories {calories} </p>
                </div>

                {/* <Ingredients items={ingredients} /> */}
            </div>
            {/* <div style={styles.card}>
                <img src={require('../../assets/png/wom.jpg')} style={styles.img} alt='food' />

                <div style={styles.name} >
                    <span >Title</span>
                </div>
                <div style={styles.infoBox} >
                    <span>calories </span>
                </div>
            </div> */}

        </Fragment >
    )
}

const styles = {
    card: {
        height: 350,
        backgroundColor: '#45454b',
        maxWidth: 300,
        // marginLeft: 10,
        // marginRight: 10,
        flex: '1 0 300px',
        marginRight: 5,
        marginBottom: 25,
        borderRadius: 10,
        objectFit: 'contain'
    },
    img: {
        height: 240,
        width: '100%',
    },
    name: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        letterSpacing: '0.8px',
        color: 'white',
        position: 'relative',
        bottom: 24,
        border: '1.5px solid white',
        margin: '12px',
        padding: '7.5px 0px',
        textAlign: 'center',
    },
    infoBox: {
        height: '100%',
        width: 130,
        position: 'relative',
        left: 70,
        bottom: 30,
        fontFamily: 'monospace',
        fontSize: 15,
        color: '#fafafa',

    },
    ul: {
        position: 'relative',
        right: 10,
        bottom: 5
    },
}

export default Card